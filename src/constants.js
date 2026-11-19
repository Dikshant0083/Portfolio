// ---------------------------------------------------------------------------
// All portfolio content lives here, so you can update text, links and images
// without touching the components.
// ---------------------------------------------------------------------------

// Skills logos
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";

// Education logos
import chitkaraLogo from "./assets/education_logo/UniLogo.jpg";
import rbseLogo from "./assets/education_logo/Rbselogo.jpg";

// Optimized (WebP) images. The original PNG/JPG files are still in /assets.
import profileImg from "./assets/optimized/profile.webp";
import hospitalImg from "./assets/optimized/hospital.webp";
import hireeasyImg from "./assets/optimized/hireeasy.webp";
import healthquestImg from "./assets/optimized/healthquest.webp";
import tictacImg from "./assets/optimized/tictac.webp";
import businessImg from "./assets/optimized/business.webp";
import doctorPatientImg from "./assets/optimized/doctor-patient.webp";
import jpmorganImg from "./assets/optimized/jpmorgan.webp";
import deloitteImg from "./assets/optimized/deloitte.webp";
import tataImg from "./assets/optimized/tata.webp";
import hack1 from "./assets/optimized/hack1.webp";
import hack2 from "./assets/optimized/hack2.webp";
import hack3 from "./assets/optimized/hack3.webp";
import hack4 from "./assets/optimized/hack4.webp";
import hack5 from "./assets/optimized/hack5.webp";
import hack6 from "./assets/optimized/hack6.webp";

// ---------------------------------------------------------------------------
// Profile and links
// ---------------------------------------------------------------------------
export const profile = {
  firstName: "Dikshant",
  lastName: "Choudhary",
  photo: profileImg,
  location: "Java intern at Bajaj Finserv Health",
  roles: [
    "insurance APIs with Spring Boot",
    "AI-powered job platforms",
    "healthcare web apps",
    "REST APIs with Node & Express",
    "clean, responsive interfaces",
  ],
  intro:
    "I'm a Computer Science student at Chitkara University and a Java intern at Bajaj Finserv Health, where I build partner APIs for a health-insurance issuance platform with Spring Boot, NestJS, Kafka and Redis. Outside work I build full-stack apps end to end, from a job platform with resume parsing and match scoring to hospital management systems.",
  resume:
    "https://drive.google.com/file/d/1xUyvYQvH7i9jp8wQxe3jIqwIHhYiuWsU/view?usp=drive_link",
  email: "khileridikshant@gmail.com",
  // Contact form: free access key from https://web3forms.com (it's sent to your email).
  // Messages from the form are delivered to that email. Safe to keep in public code.
  web3formsAccessKey: "0ecfad7f-1d76-4fbb-96a1-69dc53a9737f",
  phone: "+91 74248 33954",
  whatsapp: "https://wa.me/917424833954",
  github: "https://github.com/Dikshant0083",
  linkedin: "https://www.linkedin.com/in/dikshantchoudhary",
};

// Small facts shown under the hero. `value` animates as a counter when numeric.
export const heroFacts = [
  { value: 9.31, decimals: 2, label: "CGPA at Chitkara" },
  { value: 50, prefix: "Top ", label: "teams at HackIndia 2025" },
  { value: 6, label: "projects live online" },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// Logos that orbit the portrait in the hero
export const orbitLogos = [
  { name: "React", logo: reactjsLogo },
  { name: "Node.js", logo: nodejsLogo },
  { name: "MongoDB", logo: mongodbLogo },
  { name: "Spring Boot", logo: springbootLogo },
  { name: "Java", logo: javaLogo },
  { name: "Express", logo: expressjsLogo },
];

// ---------------------------------------------------------------------------
// Work experience (newest first)
// ---------------------------------------------------------------------------
export const experience = [
  {
    company: "Bajaj Finserv Health",
    short: "BFHL",
    role: "Software Engineering Intern (Java)",
    team: "Integration Layer (IPAX)",
    date: "July 2026 – Present",
    current: true,
    summary:
      "I build and support the APIs behind a health-insurance policy issuance platform that connects 15+ insurer, bank and distribution partners with the company's CRM.",
    // Each area becomes a tab in the Experience section.
    areas: [
      {
        title: "Partner integrations",
        tools: "Java, Spring Boot, NestJS",
        points: [
          "Built end-to-end partner integrations, including an issuance API that passed UAT and a welcome-kit callback API.",
          "Built policy status-update, contact-update and cancellation APIs, both partner-specific and generic versions.",
          "Built a reverse-feed API for OPD appointments that runs from the integration layer through the CRM event processor on Kafka and Azure Event Hubs.",
          "Extended issuance flows for several insurers: pre-existing disease details with waiting-period logic, renewals without a previous policy number, and payment and employee data passed through to the CRM.",
          "Added input sanitisation from a security assessment (a custom validation annotation, length checks and injection stripping) and AES encryption key handling, gated by per-partner config so other partners weren't affected.",
          "Wrote API documentation for partners.",
        ],
      },
      {
        title: "Reliability",
        tools: "Spring Boot, MongoDB, Redis",
        points: [
          "Built in-flight request deduplication for policy issuance, so concurrent duplicate requests can't create duplicate policies (in code review).",
          "Made duplicate issuance requests idempotent by returning the existing health account number instead of failing.",
          "Added product ID validation and made partner validation null-safe, which also removed a redundant database lookup.",
          "Built reflow APIs in the Partner Automation service to re-trigger failed issuances.",
          "Fixed incorrect status codes on SSO transactions and added duplicate detection to SSO account linking.",
          "Tracked API latency at p50, p90 and p99, and set up the dev environment and production deployment pipeline for the policy-management service.",
        ],
      },
      {
        title: "Internal tools",
        tools: "React, Vite, Tailwind, NestJS, MongoDB",
        points: [
          "Built the Issuance Log Summary, Issuance Log Projection and Policy Journey views in the team's Utility Portal, showing each policy's issuance lifecycle.",
          "Designed Case 360 and an Error Report that groups issuance failures by partner, stage and error type.",
          "Fixed the issuance-config to product-code mapping flow end to end, from the portal through a passthrough API.",
          "Did a security hardening pass: moved JWT secrets into Azure Key Vault, tightened log redaction and added purpose-based audit logging.",
        ],
      },
      {
        title: "Production support",
        tools: "MongoDB, CLI tooling",
        points: [
          "Analysed issuance failures in MongoDB logs across partners, manually issued failed policies and bulk-reflowed many more, including endorsements.",
          "Built a daily issuance-reporting CLI tool that groups errors by pattern, so recurring failures are easy to spot.",
          "Pulled data for business teams and triaged API bugs.",
          "Ran a proof of concept comparing gzip and zstd compression for Java modules.",
        ],
      },
    ],
    stack: [
      "java", "springboot", "nestjs", "typescript", "rest", "react",
      "mongodb", "redis", "kafka", "eventhubs",
      "azure", "azuredevops", "docker", "helm", "argocd", "jwt", "latency",
    ],
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
export const SkillsInfo = [
  {
    title: "Frontend",
    blurb: "Interfaces that are responsive, accessible and quick to load.",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    blurb: "APIs, authentication and data models that hold up in production.",
    skills: [
      { name: "Spring Boot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "NestJS", icon: "nestjs" },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "Redis", icon: "redis" },
      { name: "Kafka", icon: "kafka" },
    ],
  },
  {
    title: "Languages",
    blurb: "The foundations I use for data structures, algorithms and OOP.",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    blurb: "What I use every day to design, test and ship.",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "MongoDB Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Docker", icon: "docker" },
      { name: "Azure DevOps", icon: "azuredevops" },
    ],
  },
];

// Unique list of every skill, used by the scrolling marquee
export const allSkills = Array.from(
  new Map(
    SkillsInfo.flatMap((c) => c.skills).map((s) => [s.name, s])
  ).values()
);

// ---------------------------------------------------------------------------
// Projects. `featured: true` shows the project as a large row.
// ---------------------------------------------------------------------------
export const projects = [
  {
    id: 1,
    featured: true,
    title: "HireEasy",
    summary:
      "A job discovery platform that pulls live listings from several APIs and scores how well each one matches your resume.",
    description:
      "An intelligent job discovery platform that aggregates real-time listings from multiple APIs. It parses resumes with NLP, scores each listing against your profile with TF-IDF matching, includes a built-in resume builder, and sends daily email alerts.",
    image: hireeasyImg,
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Dikshant0083/HireEasy.git",
    webapp: "https://hire-easy-gamma.vercel.app",
  },
  {
    id: 5,
    featured: true,
    title: "Doctor-Patient-Hub",
    summary:
      "A healthcare platform that connects doctors and patients with appointment booking, medical history and secure messaging.",
    description:
      "Doctor-Patient-Hub streamlines communication between doctors and patients. It offers appointment booking, medical history tracking and secure messaging, backed by a Node.js and Express server.",
    image: doctorPatientImg,
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    github: "https://github.com/Dikshant0083/Patient-ONE.git",
    webapp: "https://patient-one-00mp.onrender.com/",
  },
  {
    id: 0,
    title: "Doctery Hospital",
    summary:
      "Online appointment booking with real-time doctor availability.",
    description:
      "Doctery is a digital healthcare platform for booking appointments online. Patients can see real-time doctor availability and get personalised care, so quality medical support is always a click away.",
    image: hospitalImg,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/Dikshant0083/Hospital-management-express.git",
    webapp: "https://hospital-management-express.vercel.app/",
  },
  {
    id: 2,
    title: "Health Quest",
    summary: "Track calories and plan meals in real time.",
    description:
      "HealthQuest is a wellness web app that tracks your calories and meals in real time. It has a clean interface and interactive features that make health management easier.",
    image: healthquestImg,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dikshant0083/Health_quest.git",
    webapp: "https://dikshant0083.github.io/Health_quest/",
  },
  {
    id: 4,
    title: "Choudhary Construction",
    summary:
      "A business site for construction materials and pond liners, with product listings and enquiries.",
    description:
      "A fully responsive business website that showcases construction materials and plastic pond liners, with dynamic product listings and an enquiry feature.",
    image: businessImg,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dikshant0083/Business-website.git",
    webapp: "https://business-website-nine-omega.vercel.app/",
  },
  {
    id: 3,
    title: "Tic-Tac-Toe",
    summary: "The classic two-player game, built from scratch.",
    description:
      "Classic Tic-Tac-Toe built from scratch with HTML, CSS and JavaScript. It has a responsive layout and complete game logic for two players.",
    image: tictacImg,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dikshant0083/SCT_WD_3.git",
    webapp: "https://dikshant0083.github.io/SCT_WD_3/",
  },
];

// ---------------------------------------------------------------------------
// Achievements
// ---------------------------------------------------------------------------
export const hackathon = {
  title: "Top 50 teams at HackIndia",
  organization: "India's Web3 and AI hackathon",
  date: "2025",
  description:
    "With my team Byte Hogs, I was selected among the top 50 teams across India at HackIndia 2025, India's biggest Web3 and AI hackathon, hosted at Chitkara University. We built a scalable software solution under hackathon time pressure.",
  gallery: [
    { title: "Pitching to the judges", image: hack2 },
    { title: "Team Byte Hogs with our certificates", image: hack6 },
    { title: "Building during the hackathon", image: hack3 },
    { title: "Team Byte Hogs at our table", image: hack5 },
    { title: "Heads down on the build", image: hack4 },
    { title: "HackIndia 2025 certificate", image: hack1 },
  ],
};

export const certifications = [
  {
    title: "Cybersecurity Analyst Job Simulation",
    organization: "Tata",
    platform: "Forage",
    date: "Apr 2026",
    description:
      "Identity and Access Management fundamentals, IAM strategy assessment, custom IAM solution design and platform integration.",
    image: tataImg,
    link: "https://drive.google.com/file/d/1BTX9wKK_r0df7O51tWlE31yWLKmzcHEZ/view?usp=drive_link",
  },
  {
    title: "Software Engineering Job Simulation",
    organization: "JPMorgan Chase & Co.",
    platform: "Forage",
    date: "Jan 2026",
    description:
      "Project setup, Kafka and H2 integration, and building REST API integrations and controllers.",
    image: jpmorganImg,
    link: "https://drive.google.com/file/d/1qSEC7ONMayhqWcWstqm0sVjo_HlufIOl/view?usp=drive_link",
  },
  {
    title: "Cyber Job Simulation",
    organization: "Deloitte Australia",
    platform: "Forage",
    date: "Dec 2025",
    description:
      "Forensic analysis, malware analysis and risk assessment in a simulated corporate environment.",
    image: deloitteImg,
    link: "https://drive.google.com/file/d/18a0-Aa-sgajK2inbB81qtfQa7emYfcR6/view?usp=drive_link",
  },
];

// ---------------------------------------------------------------------------
// Education (newest first)
// ---------------------------------------------------------------------------
export const education = [
  {
    id: 0,
    current: true,
    img: chitkaraLogo,
    school: "Chitkara University, Punjab",
    date: "Sept 2023 – July 2027 (expected)",
    grade: "9.31 CGPA so far",
    degree: "B.E. in Computer Science Engineering",
    desc: "Hands-on projects, technical workshops and hackathons alongside the core computer science curriculum.",
    coursework: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Database Systems",
      "Operating Systems",
      "Computer Networks",
      "Web Development",
    ],
  },
  {
    id: 2,
    img: rbseLogo,
    school: "R.M. Memorial Public School, Gajsinghpur",
    date: "April 2021 – July 2022",
    grade: "85%",
    degree: "Class XII, RBSE (Physics, Chemistry, Mathematics)",
    desc: "Built a strong foundation in science and analytical reasoning.",
  },
  {
    id: 1,
    img: rbseLogo,
    school: "R.M. Memorial Public School, Gajsinghpur",
    date: "April 2019 – August 2020",
    grade: "86.33%",
    degree: "Class X, RBSE (Science with Computer Applications)",
    desc: "Science, Mathematics, Social Studies and Computer Applications.",
  },
];
