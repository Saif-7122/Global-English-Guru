const SHEET_NAME = "Masterclass leads";
const HEADERS = [
  "Registered at", "Full name", "Email", "Phone", "Contact consent",
  "Confirmation email", "Email sent at", "Outreach status", "Outreach notes", "Programme of interest",
];
const EMAIL_COLUMN = 3;
const STATUS_COLUMN = 6;
const INTEREST_COLUMN = 10;
const PROGRAMMES = {
  masterclass: "Spoken English Masterclass",
  everyday: "Confident English for Everyday Life",
  career: "Career Communication Professionals",
};
const PENDING = "Pending";
const SENT = "Sent";
const CONTACT_EMAIL = "globalenglishguru.ed@gmail.com";

function initializeRegistration() {
  const properties = PropertiesService.getScriptProperties();
  const sheetId = properties.getProperty("LEADS_SPREADSHEET_ID");
  const secret = properties.getProperty("MASTERCLASS_SHARED_SECRET");
  if (!sheetId || !secret || secret.length < 32) {
    throw new Error("Set LEADS_SPREADSHEET_ID and MASTERCLASS_SHARED_SECRET before initialization.");
  }

  const spreadsheet = SpreadsheetApp.openById(sheetId);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  if (!sheet.getLastRow()) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  const actualHeaders = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  if (!actualHeaders[INTEREST_COLUMN - 1]
      && HEADERS.slice(0, -1).every((header, index) => header === actualHeaders[index])) {
    sheet.getRange(1, INTEREST_COLUMN, 1, 1).setValues([[HEADERS[INTEREST_COLUMN - 1]]]).setFontWeight("bold");
    actualHeaders[INTEREST_COLUMN - 1] = HEADERS[INTEREST_COLUMN - 1];
  }
  if (HEADERS.some((header, index) => header !== actualHeaders[index])) {
    throw new Error("The existing Masterclass leads tab has different columns.");
  }

  const alreadyScheduled = ScriptApp.getProjectTriggers().some(
    (trigger) => trigger.getHandlerFunction() === "retryPendingConfirmations",
  );
  if (!alreadyScheduled) {
    ScriptApp.newTrigger("retryPendingConfirmations").timeBased().everyMinutes(15).create();
  }
  SpreadsheetApp.flush();
  properties.setProperty("MASTERCLASS_READY", "programmes-v2");
}

function doPost(event) {
  const properties = PropertiesService.getScriptProperties();
  const secret = properties.getProperty("MASTERCLASS_SHARED_SECRET");
  if (!event || !event.postData || event.postData.contents.length > 2048) {
    return json("rejected");
  }

  let data;
  try {
    data = JSON.parse(event.postData.contents);
  } catch {
    return json("rejected");
  }
  if (!data || !secret || data.secret !== secret || !validLead(data)) {
    return json("rejected");
  }
  if (properties.getProperty("MASTERCLASS_READY") !== "programmes-v2") {
    return json("unavailable");
  }

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return json("unavailable");
  try {
    const sheet = getLeadSheet();
    const programme = PROGRAMMES[data.interest || "masterclass"];
    const lastRow = sheet.getLastRow();
    const existing = lastRow > 1
      ? sheet.getRange(2, EMAIL_COLUMN, lastRow - 1)
        .createTextFinder(data.email).matchCase(false).matchEntireCell(true).findAll()
        .map((cell) => cell.getRow())
        .find((row) => getProgramme(sheet, row) === programme)
      : undefined;
    const row = existing || lastRow + 1;

    if (!existing) {
      sheet.appendRow([
        new Date(), cellText(data.name), cellText(data.email), cellText(data.phone),
        "Yes", PENDING, "", "New", "", programme,
      ]);
      SpreadsheetApp.flush();
    } else if (sheet.getRange(row, STATUS_COLUMN).getValue() === SENT) {
      return json("confirmed");
    }

    return json(sendConfirmation(sheet, row) ? "confirmed" : "pending");
  } catch {
    console.error("Unable to process a programme submission.");
    return json("unavailable");
  } finally {
    lock.releaseLock();
  }
}

function validLead(data) {
  return typeof data.name === "string" && !!data.name.trim() && data.name.length <= 100
    && !/[\x00-\x1F\x7F]/.test(data.name)
    && typeof data.email === "string" && data.email.length <= 254
    && /^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(data.email)
    && typeof data.phone === "string" && /^\+[1-9]\d{6,14}$/.test(data.phone)
    && data.consent === true
    && (data.interest === undefined || Object.prototype.hasOwnProperty.call(PROGRAMMES, data.interest));
}

function getLeadSheet() {
  const id = PropertiesService.getScriptProperties().getProperty("LEADS_SPREADSHEET_ID");
  return SpreadsheetApp.openById(id).getSheetByName(SHEET_NAME);
}

function getProgramme(sheet, row) {
  return sheet.getRange(row, INTEREST_COLUMN).getValue() || PROGRAMMES.masterclass;
}

// Preserve phone numbers and keep submitted text from being interpreted as a formula.
function cellText(value) {
  return "'" + value;
}

function json(status) {
  return ContentService.createTextOutput(JSON.stringify({ status }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendConfirmation(sheet, row) {
  const [name, email] = sheet.getRange(row, 2, 1, 2).getDisplayValues()[0];
  const programme = getProgramme(sheet, row);
  const isMasterclass = programme === PROGRAMMES.masterclass;
  try {
    if (MailApp.getRemainingDailyQuota() < 1) return false;
    MailApp.sendEmail({
      to: email,
      subject: isMasterclass ? "Your Spoken English Masterclass registration" : "Your course inquiry for " + programme,
      name: "Global English Guru",
      replyTo: CONTACT_EMAIL,
      body: [
        "Hi " + name + ",",
        isMasterclass
          ? "Thank you for registering for the Spoken English Masterclass with Sajid Ahmed. Your registration has been received."
          : "Thank you for your interest in " + programme + ". We received your course inquiry.",
        isMasterclass
          ? "Our team may contact you with the session details and joining instructions. Reply to this email if you have any questions."
          : "Our team may contact you about the next batch and how to enrol. Reply to this email if you have any questions.",
        "Global English Guru\nKurnool, Andhra Pradesh",
      ].join("\n\n"),
    });
  } catch {
    console.warn("A programme confirmation email is pending.");
    return false;
  }
  sheet.getRange(row, STATUS_COLUMN, 1, 2).setValues([[SENT, new Date()]]);
  SpreadsheetApp.flush();
  return true;
}

function retryPendingConfirmations() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return;
  try {
    const sheet = getLeadSheet();
    const count = sheet.getLastRow() - 1;
    if (count < 1) return;
    const pending = sheet.getRange(2, STATUS_COLUMN, count)
      .createTextFinder(PENDING).matchEntireCell(true).findAll();
    for (const cell of pending.slice(0, 20)) {
      if (MailApp.getRemainingDailyQuota() < 1) break;
      sendConfirmation(sheet, cell.getRow());
    }
  } finally {
    lock.releaseLock();
  }
}
