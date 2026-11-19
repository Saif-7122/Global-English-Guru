# Global English Guru

The homepage promotes the Spoken English Masterclass and two live online courses. The form at `/masterclass/register` defaults to the masterclass. The course cards open the same form with their programme selected. Successful submissions go to `/masterclass/thank-you`.

The interactive hero uses a pointer-responsive Canvas pixel field, with a text fallback and a static treatment for reduced-motion settings. The four supplied clips are served from `public/media`. They play on demand with their original audio and editable English caption tracks. The caption tracks were drafted from automatic transcription and should be checked against the original audio before publication.

## Run locally

Use Node.js 22.13 or later.

```sh
npm ci
npm run dev
```

Open [the local site](http://localhost:3000).

## Connect Google Sheets and confirmation email

1. Open or create a private Google Sheet using the Google account that should send confirmations. In that Sheet, choose **Extensions → Apps Script**. Paste the supplied `google-apps-script/Code.gs` into the editor and save.
2. In Apps Script **Project Settings → Script properties**, add `LEADS_SPREADSHEET_ID` (the part of the Sheet URL between `/d/` and `/edit`) and `MASTERCLASS_SHARED_SECRET` (a random value with at least 32 characters). Generate one locally with `node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"`. Keep it in the two settings screens.
3. Select and run `initializeRegistration` in Apps Script, then authorize Sheets, Mail, and trigger permissions. This creates or upgrades the **Masterclass leads** tab and schedules retries for delayed confirmation emails. Existing rows are preserved. It sends no email during setup.
4. Choose **Deploy → New deployment → Web app**, set **Execute as** to your account, and set access to **Anyone** so the website’s server can reach it. For an existing deployment, update it to a new version. Copy the deployed URL ending in `/exec`. The endpoint accepts submissions only with the shared secret. Keep Sheet sharing restricted to the outreach team.
5. Set the two integration variables below on your host and deploy. Submit a test using an inbox you control. Confirm the Sheet row, the email, and the thank-you page before sending ad traffic.

The Sheet records the selected programme and contact consent, and starts leads with outreach status **New**. The team can update **Outreach status** and **Outreach notes**. Repeated submissions reuse the existing row for the same email and programme. The confirmation status stays **Pending** if Google cannot send immediately. The retry trigger checks every 15 minutes, subject to [Apps Script email quotas](https://developers.google.com/apps-script/guides/services/quotas). For a later campaign, connect a fresh Sheet and Apps Script deployment.

## Configure the site

Copy `.env.example` to `.env.local` for local development. Set the production values in your hosting environment before building.

| Variable | Value |
|---|---|
| `MASTERCLASS_APPS_SCRIPT_URL` | The deployed Google Apps Script web app URL ending in `/exec`. |
| `MASTERCLASS_APPS_SCRIPT_SECRET` | The same secret as `MASTERCLASS_SHARED_SECRET` in Apps Script. |
| `MASTERCLASS_DATE_TIME` | Confirmed date and time with time zone. Optional until announced. |
| `MASTERCLASS_FORMAT` | Confirmed format, such as an online platform or venue. Optional until announced. |
| `MASTERCLASS_FEE` | Confirmed price or “Free” if applicable. Optional until announced. |
| `NEXT_PUBLIC_SITE_URL` | Final public origin, including `https://`, for canonical URLs, social previews, and the sitemap. |

Use a Next.js host with server support for the registration form. The build command is `npm run build` and the start command is `npm start`. After deploying, submit from a phone using an inbox you control and check the thank-you page, receipt email, and corresponding Sheet row before starting the campaign.
