// ============================================================
// GLOBAL ENGLISH GURU — Central Site Configuration
// Update this file with real data when assets are provided.
// ============================================================

export const SITE = {
  name: "Global English Guru",
  tagline: "Confidence. Communication. Careers.",
  shortDescription:
    "Live online communication courses for students and professionals — small batches, personal feedback, practical activities.",
  url: "https://www.globalenglishguru.com", // [PLACEHOLDER: update to real domain]

  // ── Contact ────────────────────────────────────────────────
  phone: "+91 7660981213, +91 9347047827", 
  email: "globalenglishguru.ed@gmail.com",
  whatsappNumber: "919347047827", 
  whatsappMessage:
    "Hello Global English Guru, I would like to know more about the free demo and upcoming online batches.",
  address: "234, 2nd Floor, Jagadeesh Mall, Shilpa Birla Compound Rd, beside Wallmart, Krishna Reddy Nagar, B Camp, Kurnool, Andhra Pradesh 518002",
  googleMapsUrl: "https://maps.google.com",

  // ── Social ─────────────────────────────────────────────────
  instagram: "https://instagram.com/globalenglishguru", // [PLACEHOLDER]
  youtube: "https://youtube.com/@globalenglishguru", // [PLACEHOLDER]

  // ── Conversion Links ───────────────────────────────────────
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfVyJxiE9PnZQ7PmHvhiweSNaoUg2u7pmayhC051odDKFoOwA/viewform?usp=dialog", 

  // ── SEO ────────────────────────────────────────────────────
  metaTitle:
    "Global English Guru — Online Communication & English Speaking Classes",
  metaDescription:
    "Practical live online communication courses for students and professionals. Small batches of 10, personal feedback, mock interviews, JAM sessions. Register for a free demo today.",
  ogImage: "/og-image.png", // [PLACEHOLDER — create 1200×630 OG image]
};

// ── WhatsApp click-to-chat URL ─────────────────────────────
export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

// ── Trust Strip Items ──────────────────────────────────────
export const TRUST_ITEMS = [
  { icon: "star", label: "200+ Google Reviews" },
  { icon: "building", label: "Established institute — 15+ yrs Kurnool, 5 yrs Hyderabad" },
  { icon: "wifi", label: "Live Online Classes" },
  { icon: "users", label: "Max. 10 students per batch" },
  { icon: "mic", label: "Practical Speaking Every Session" },
];

// ── Problem → Transformation Pairs ────────────────────────
export const PROBLEMS = [
  {
    problem: "You understand English but freeze when you speak",
    solution: "Speak confidently in everyday conversations",
  },
  {
    problem: "You blank out during interviews",
    solution: "Answer interview questions clearly and calmly",
  },
  {
    problem: "Fear of public speaking holds you back",
    solution: "Deliver presentations and speak in groups with confidence",
  },
  {
    problem: "You struggle to organise your thoughts while speaking",
    solution: "Speak continuously on a topic without losing your thread",
  },
  {
    problem: "You never get individual feedback in large classes",
    solution: "Receive personal weekly feedback from your coach",
  },
  {
    problem: "Theory-heavy classes bore you — you never actually speak",
    solution: "Practise actively in every session — speaking is the lesson",
  },
];

// ── Why Us Features ────────────────────────────────────────
export const WHY_US = [
  {
    icon: "mic-2",
    title: "You Speak in Every Single Session",
    description:
      "Most sessions are speaking activities — conversations, role-plays, JAM sessions. No passive note-taking. You practise from minute one.",
  },
  {
    icon: "users",
    title: "Max. 10 Students Per Batch",
    description:
      "Every student gets speaking time and individual attention in each class. Your coach will know your name, your challenges, and your progress.",
  },
  {
    icon: "heart",
    title: "Supportive, Not Judgmental",
    description:
      "Coaches create a safe environment where making mistakes is part of learning. Students consistently say they felt comfortable from the very first session.",
  },
  {
    icon: "bar-chart-2",
    title: "Personal Feedback After Each Session",
    description:
      "Your coach shares specific, written feedback on your speaking progress after every class — so you always know what improved and what to work on.",
  },
  {
    icon: "award",
    title: "15 Years of Offline Results",
    description:
      "Global English Guru has run offline batches in Kurnool for 15+ years and Hyderabad for 5 years. Over 200 five-star Google reviews back that track record.",
  },
  {
    icon: "globe",
    title: "Live Online — Join From Anywhere in India",
    description:
      "These are live, interactive classes — not recorded videos. Join from home using a phone, tablet, or laptop. Same quality, anywhere in India.",
  },
];

// ── Courses ────────────────────────────────────────────────
export const COURSES = [
  {
    id: "everyday",
    name: "Confident English for Everyday Life",
    badge: "Beginner Friendly",
    accentColor: "blue",
    audience: "For anyone who understands English but hesitates when speaking",
    audienceDetails: [
      "College students",
      "Recent school graduates",
      "Young adults in daily life",
      "Anyone who understands English but hesitates to speak",
    ],
    outcomes: [
      "Introduce yourself confidently",
      "Hold common everyday conversations",
      "Reduce hesitation and freezing",
      "Improve speaking clarity",
      "Speak on a topic for longer without stopping",
      "Participate in practical speaking activities",
      "Receive personal feedback on your progress",
    ],
    activities: ["Pair Conversations", "Role-Plays", "JAM Sessions", "Speaking Activities", "Weekly Feedback"],
    batchSize: "Max. 10 students per batch",
    fee: "₹3,000",
    format: "Live Online",
    batchNote: "Live online. Max. 10 students per batch for personal attention.",
  },
  {
    id: "career",
    name: "Career Communication Professionals",
    badge: "Career Focused",
    accentColor: "amber",
    audience: "For final-year students, fresh graduates and working professionals",
    audienceDetails: [
      "Final-year college students",
      "Fresh graduates seeking jobs",
      "Working professionals",
      "Anyone preparing for interviews or workplace communication",
    ],
    outcomes: [
      "Answer interview questions clearly and confidently",
      "Give a professional self-introduction",
      "Participate in and lead group discussions",
      "Speak continuously on a topic",
      "Deliver presentations confidently",
      "Improve workplace communication",
      "Develop leadership skills to influence and inspire teams",
      "Build essential soft skills — time management, teamwork & adaptability",
      "Practise assertive communication to express ideas with confidence",
      "Practise through mock interviews, JAM sessions and presentations",
    ],
    activities: [
      "Mock Interviews",
      "Group Discussions",
      "JAM Sessions",
      "Presentations",
      "Public Speaking",
      "Role-Plays",
    ],
    batchSize: "Max. 10 students per batch",
    fee: "₹5,000",
    format: "Live Online",
    batchNote: "Live online. Max. 10 students per batch for personal attention.",
  },
];

// ── Learning Activities ─────────────────────────────────────
export const ACTIVITIES = [
  { icon: "users-2", label: "Pair Conversations" },
  { icon: "theater", label: "Role-Plays" },
  { icon: "mic", label: "JAM Sessions" },
  { icon: "message-square", label: "Group Discussions" },
  { icon: "briefcase", label: "Mock Interviews" },
  { icon: "presentation", label: "Presentations" },
  { icon: "video", label: "Recorded Practice" },
  { icon: "clipboard-list", label: "Weekly Feedback" },
];

// ── Learning Flow Steps ─────────────────────────────────────
export const LEARNING_FLOW = [
  {
    step: "01",
    title: "Learn Briefly",
    description: "Short, focused input — just enough context to jump into practice",
  },
  {
    step: "02",
    title: "Practise Actively",
    description: "Speak, respond, discuss, role-play — the session is built around doing",
  },
  {
    step: "03",
    title: "Receive Feedback",
    description: "Your coach gives you specific, personal feedback in real time",
  },
  {
    step: "04",
    title: "Record Progress",
    description: "Activities may be recorded so you can see your own improvement",
  },
  {
    step: "05",
    title: "Improve Weekly",
    description: "Weekly assessments track your growth — you will notice the difference",
  },
];

// ── Progress Milestones ─────────────────────────────────────
export const PROGRESS_MILESTONES = [
  { icon: "video", label: "Initial Speaking Recording", description: "See where you start" },
  { icon: "activity", label: "Weekly Activities", description: "Speaking tasks every session" },
  { icon: "message-circle", label: "Trainer Feedback", description: "Personal guidance each week" },
  { icon: "briefcase", label: "Mock Interviews", description: "Real interview practice" },
  { icon: "mic", label: "JAM Recordings", description: "Track your fluency growth" },
  { icon: "users", label: "Group Discussion Performance", description: "Participation and leadership" },
  { icon: "film", label: "Final Recording", description: "See how far you've come" },
];

// ── Trainers ────────────────────────────────────────────────
// [PLACEHOLDER — replace with real trainer data]
export const TRAINERS = [
  {
    id: "sajid-ahmed",
    photo: "/assets/founder(Sajid Ahmed).webp",
    name: "Mr. Sajid Ahmed",
    role: "Founder & Master Faculty",
    qualifications: "Certified Personality Development and Soft Skills Trainer",
    experience: "20 years of experience in teaching",
    philosophy:
      "Trained by The Times Of India and The Enadu. Worked for National level institutes like VETA (Chennai) and Career Launcher (Delhi). Trained B.Tech, MBA, Degree students, School Children, Teachers, Officials, Business people and House Wives.",
    videoUrl: null, 
  }
];

// ── FAQ ─────────────────────────────────────────────────────
export const FAQS = [
  {
    q: "Who can join these courses?",
    a: "Anyone who wants to improve their spoken communication in English. Course 1 is ideal for beginners and everyday speakers. Course 2 is designed for students and professionals preparing for interviews, group discussions and workplace communication.",
  },
  {
    q: "Are the classes completely online?",
    a: "Yes. All sessions are conducted live online. You can join from anywhere in India using a laptop, tablet or smartphone.",
  },
  {
    q: "What is the batch size?",
    a: "We maintain a small batch size for extra care. This ensures every student gets speaking time and personal feedback in every session.",
  },
  {
    q: "Is this a grammar course?",
    a: "No. This is a practical communication course. The focus is on speaking, listening, confidence and clarity — not grammar rules or theory.",
  },
  {
    q: "Will every student get speaking opportunities in each session?",
    a: "Yes. The small batch size for extra care ensures every student participates actively in every session.",
  },
  {
    q: "What is the difference between the two courses?",
    a: "Course 1 (Confident English for Everyday Life) is for anyone who wants to improve everyday spoken communication. Course 2 (Career Communication Professionals) is specifically designed for students and professionals targeting interviews, presentations and workplace communication.",
  },
  {
    q: "Are the sessions live? Can I watch recordings later?",
    a: "Yes, all sessions are live and interactive. Session recordings are not provided as standard — the live format is what makes the learning effective. If you miss a session, please contact us to discuss make-up options.",
  },
  {
    q: "How does the free demo work?",
    a: "The free demo is a short live session where you meet the coach, participate in a speaking activity, understand the course approach, ask questions and identify which course suits you best. No prior preparation needed. Parents are welcome to attend.",
  },
  {
    q: "How do I pay after the demo?",
    a: "After the demo, our team will share full payment details via WhatsApp. We accept UPI, bank transfer, and other common methods. No advance payment is required to attend the demo.",
  },
  {
    q: "Is a certificate provided?",
    a: "A course completion certificate is provided to students who complete the full batch. Certificate details are shared during enrolment.",
  },
  {
    q: "Which course should I choose?",
    a: "If you want to improve everyday spoken confidence, choose Course 1. If you are preparing for job interviews, group discussions or professional communication, choose Course 2. Attend the free demo — your coach will help you decide.",
  },
  {
    q: "What happens if I miss a class?",
    a: "Please contact us regarding missed-session policy. [Policy to be confirmed]",
  },
  {
    q: "Do I need any prior English knowledge?",
    a: "For Course 1, you need a basic understanding of English — you don't need to be fluent. For Course 2, a reasonable comfort level with English is recommended since the focus is on professional communication skills.",
  },
  {
    q: "Is Global English Guru only an online institute?",
    a: "No. Global English Guru is an established offline communication-training institute with over 200 Google reviews. We are now offering these courses online so students across India can benefit.",
  },
];

// ── Demo Section Expectations ───────────────────────────────
export const DEMO_EXPECTATIONS = [
  "Meet your communication coach in a short live session",
  "Participate in a friendly speaking activity — no preparation needed",
  "See exactly how our classes work before you commit",
  "Ask any questions about schedule, fees, or course structure",
  "Get honest guidance on which course suits your goals",
  "Parents are welcome to join and ask questions too",
];
