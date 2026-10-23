// ---------------------------------------------------------------
// Every piece of copy on the site lives here.
// Change the data and the page follows — no component edits needed.
// ---------------------------------------------------------------

const IMG = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const profile = {
  firstName: "Abhigyan",
  lastName: "Singh",
  heroWord: "Software Engineer",
  role: "Software Engineer",
  company: "Bacancy Technologies",
  location: "Ahmedabad, India",
  status: "Open to new opportunities",
  email: "abhigyansingh1314@gmail.com",
  phone: "+91 91424 02410",
  cvUrl: "/Abhigyan-Singh-Resume.pdf",

  // Drop a background-removed PNG at public/portrait.png and the hero
  // switches from the stock placeholder to your own cut-out.
  portrait: "/portrait.png",
  portraitFallback: IMG("1507003211169-0a1dd7228f2d", 800),

  // Order here drives the header, the menu and the contact card.
  socials: [
    {
      short: "In",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhigyan-singh-007565251",
    },
    {
      short: "Gh",
      label: "GitHub",
      href: "https://github.com/abhigyansingh1314",
    },
    {
      short: "@",
      label: "Email",
      href: "mailto:abhigyansingh1314@gmail.com",
    },
  ],
};

// ---------------------------------------------------------------
// About — the three-column block under the hero
// ---------------------------------------------------------------

export const about = {
  intro:
    "Hello! I'm Abhigyan Singh. A software engineer building full-stack, machine learning and embedded products from India.",

  // The bulleted checklist in the left column
  points: [
    "Full Stack Development",
    "Machine Learning & Data",
    "Blockchain & Web3",
    "Embedded Systems",
    "Cloud & Automation",
  ],

  // The floating stat cards. `dark: true` inverts one, as in the reference.
  cards: [
    { value: 3, suffix: "", label: "Featured projects" },
    { value: 3, suffix: "", label: "Certifications earned", dark: true },
    { value: 1, suffix: "", label: "Internship completed", faces: true },
  ],

  // Outlined headline that sits under the image
  outline: "Full stack, machine learning and embedded - built end to end.",
  ctaLabel: "View projects",
  ctaHref: "#work",

  // The two cards that float either side of the statement
  floats: [
    { value: "4", suffix: "", label: "Months of industry experience" },
    { value: "4", suffix: "", label: "Peripheral interfaces worked with" },
  ],

  image: IMG("1522252234503-e356532cafd5"),
};

export const statement = {
  text: "I turn ideas into working systems - from full-stack web apps and machine learning models to firmware that talks to real hardware.",
};

// ---------------------------------------------------------------
// Bio — image left, copy right, years-of-experience circle
// ---------------------------------------------------------------

export const bio = {
  image: "/about.jpg",
  badgeValue: "4",
  badgeSuffix: "",
  badgeLabel: "Months of Experience",
  paragraphs: [
    "I'm a B.Tech student at VIT Bhopal specialising in Cloud Computing & Automation, graduating in 2026. My work spans full-stack web development, machine learning and embedded systems, and I'm keen to apply systems-level thinking to cloud architecture, automation and scalable infrastructure design.",
    "From July to October 2026 I was a Trainee Software Engineer at Bacancy Technologies, working on ESP32-C6 embedded development with ESP-IDF. I developed and validated firmware for peripherals including I2C, UART, SPI, PWM and interrupts, integrated and tested LCD and RFID modules, and worked on ROPE charger systems.",
    "My projects include PlatePilot.AI, a food rescue platform with a reinforcement learning allocation model, Mintsem, an on-chain academic registry built on ERC-721, and ZCoder, a collaborative learning platform with real-time chat. I've also completed certifications in Machine Learning (Coursera), Generative AI (IBM Watsonx) and Data Analytics (Deloitte).",
  ],
};

export const stripWords = ["Services", "Services", "Services", "Services"];

// ---------------------------------------------------------------
// Services — the rounded pill rows on the dark half
// ---------------------------------------------------------------

export const services = [
  {
    name: "Full Stack Development",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Prisma"],
    image: IMG("1633356122544-f134324a6cee", 700),
  },
  {
    name: "ML & Data",
    tags: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
    image: IMG("1558494949-ef010cbdcc31", 700),
  },
  {
    name: "Blockchain & Web3",
    tags: ["Solidity", "ERC-721", "Ethers.js", "IPFS"],
    image: IMG("1451187580459-43490279c0fa", 700),
  },
  {
    name: "Embedded Systems",
    tags: ["ESP32-C6", "ESP-IDF", "C/C++", "I2C", "UART", "SPI"],
    image: IMG("1516116216624-53e697fedbea", 700),
  },
];

// ---------------------------------------------------------------
// Work — floating cards over the giant WORK wordmark
// ---------------------------------------------------------------

export const projects = [
  {
    title: "PlatePilot.AI",
    tags: ["Full Stack", "ML"],
    meta: "A food rescue web app with a responsive React front end, a secure Express REST API with Prisma ORM and JWT authentication, and an Epsilon-Greedy multi-armed bandit model in Python that learns from historical data to optimise food allocation and power an impact-driven recommendation system.",
    stack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Express.js",
      "Prisma ORM",
      "JWT",
      "Python",
    ],
    role: "Full Stack & ML Developer",
    year: "2024",
    href: "https://github.com/abhigyansingh1314/PlatePilot.AI",
    image: IMG("1498050108023-c5249f4df085"),
  },
  {
    title: "Mintsem",
    tags: ["Blockchain", "Full Stack"],
    meta: "A tamper-proof, on-chain academic registry. ERC-721 compliant smart contracts in Solidity, with a full-stack dApp built on React and Ethers.js that issues academic credentials as NFTs stored on IPFS, so third parties can verify them on-chain and document forgery is eliminated.",
    stack: ["Solidity", "ERC-721", "React", "Ethers.js", "IPFS"],
    role: "Smart Contract & Full Stack Developer",
    year: "2024",
    href: "https://github.com/abhigyansingh1314/defi",
    image: IMG("1605810230434-7631ac76ec81"),
  },
  {
    title: "ZCoder",
    tags: ["Full Stack", "Realtime"],
    meta: "A collaborative online learning platform with Google Sign-In and user profiles, real-time chat and community discussion over Socket.io, and a dynamic contest calendar powered by the Codeforces API with automated problem and progress tracking.",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Socket.io",
      "Codeforces API",
    ],
    role: "Full Stack Developer",
    year: "2023",
    href: "https://github.com/abhigyansingh1314/zcoder-platform",
    image: IMG("1487058792275-0ad4aaf24ca7"),
  },
];

// ---------------------------------------------------------------
// Recognition — hairline rows with a pointer-following preview
// ---------------------------------------------------------------

export const awards = [
  {
    org: "Deloitte",
    what: "Data Analytics",
    year: "2026",
    image: IMG("1550439062-609e1531270e", 600),
  },
  {
    org: "IBM",
    what: "Generative AI Using IBM Watsonx",
    year: "2024",
    image: IMG("1555066931-4365d14bab8c", 600),
  },
  {
    org: "Coursera",
    what: "Applied Machine Learning in Python",
    year: "2023",
    image: IMG("1461749280684-dccba630e2f6", 600),
  },
  {
    org: "VIT Bhopal",
    what: "B.Tech - Cloud Computing & Automation",
    year: "2026",
    image: IMG("1499951360447-b19be8fe80f5", 600),
  },
];

export const experienceHeading =
  "Trainee Software Engineer at Bacancy Technologies - wrote and validated firmware that talks to real hardware.";

export const experience = [
  {
    company: "Bacancy Technologies",
    role: "Trainee Software Engineer",
    period: "Jul 2026 — Oct 2026",
    place: "Ahmedabad, Gujarat",
    summary:
      "ESP32-C6 embedded development using ESP-IDF. Developed and validated firmware for microcontroller peripherals including I2C, UART, SPI, PWM and interrupts, integrated and tested LCD and RFID modules, and worked on ROPE charger systems - gaining hands-on experience in charger architecture, communication interfaces, hardware integration and debugging.",
    stack: ["ESP32-C6", "ESP-IDF", "C/C++", "I2C", "UART", "SPI", "PWM"],
    image: IMG("1551288049-bebda4e38f71", 700),
  },
];

// ---------------------------------------------------------------
// Tool grid — the staggered tiles near the bottom
// ---------------------------------------------------------------

export const toolsLabel = "The stack I build with";

// Add or remove a group and the section follows — Logos.jsx just maps over it.
// Each item: { name, icon } for a brand logo in public/icons, or
// { name, abbr } for a concept that has no logo. `brand` tints the hover glow.
// Items using `abbr` have no icon file yet; drop an SVG into public/icons and
// swap `abbr` for `icon: "<filename-without-extension>"` to upgrade any of them.
export const toolGroups = [
  {
    label: "Languages",
    items: [
      { name: "C", icon: "c", brand: "#A8B9CC" },
      { name: "C++", icon: "cplusplus", brand: "#00599C" },
      { name: "Python", icon: "python", brand: "#3776AB" },
      { name: "TypeScript", icon: "typescript", brand: "#3178C6" },
      { name: "JavaScript", icon: "javascript", brand: "#F7DF1E" },
    ],
  },
  {
    label: "Web Technologies",
    items: [
      { name: "HTML", abbr: "HTML", brand: "#E34F26" },
      { name: "CSS", abbr: "CSS", brand: "#1572B6" },
      { name: "React", icon: "react", brand: "#61DAFB" },
      { name: "Node.js", icon: "nodejs", brand: "#5FA04E" },
      { name: "Express.js", icon: "express", brand: "#0B0B0B" },
      { name: "Tailwind CSS", icon: "tailwindcss", brand: "#06B6D4" },
      { name: "Framer Motion", abbr: "FM", brand: "#0055FF" },
      { name: "Socket.io", abbr: "IO", brand: "#0B0B0B" },
      { name: "Flask", abbr: "FL", brand: "#0B0B0B" },
      { name: "Prisma ORM", icon: "prisma", brand: "#2D3748" },
      { name: "JWT", abbr: "JWT", brand: "#D63AFF" },
      { name: "RESTful APIs", abbr: "API", brand: "#0F9D58" },
    ],
  },
  {
    label: "ML & AI",
    items: [
      { name: "NumPy", abbr: "NP", brand: "#013243" },
      { name: "Pandas", abbr: "PD", brand: "#150458" },
      { name: "Matplotlib", abbr: "MPL", brand: "#11557C" },
      { name: "Scikit-learn", abbr: "SKL", brand: "#F7931E" },
      { name: "Reinforcement Learning", abbr: "RL", brand: "#6E56CF" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "MongoDB", abbr: "MDB", brand: "#47A248" },
      { name: "MySQL", icon: "mysql", brand: "#00758F" },
    ],
  },
  {
    label: "Blockchain",
    items: [
      { name: "Solidity", abbr: "SOL", brand: "#363636" },
      { name: "ERC-721", abbr: "721", brand: "#3C3C3D" },
      { name: "Ethers.js", abbr: "ETH", brand: "#3C3C3D" },
      { name: "IPFS", abbr: "IPFS", brand: "#65C2CB" },
    ],
  },
  {
    label: "Embedded Systems",
    items: [
      { name: "ESP32-C6", abbr: "ESP", brand: "#E7352C" },
      { name: "ESP-IDF", abbr: "IDF", brand: "#E7352C" },
      { name: "I2C", abbr: "I2C", brand: "#1971C2" },
      { name: "UART", abbr: "UART", brand: "#2B8A3E" },
      { name: "SPI", abbr: "SPI", brand: "#C2255C" },
      { name: "PWM", abbr: "PWM", brand: "#D9480F" },
    ],
  },
  {
    label: "Developer Tools",
    items: [
      { name: "Git", icon: "git", brand: "#F05032" },
      { name: "GitHub", abbr: "GH", brand: "#0B0B0B" },
      { name: "MATLAB", abbr: "MAT", brand: "#E16737" },
    ],
  },
  {
    label: "Coursework",
    items: [
      { name: "Data Structures & Algorithms", abbr: "DSA", brand: "#FF4A17" },
      { name: "Introduction to Computing", abbr: "ITC", brand: "#1971C2" },
      { name: "Applications of AI & ML", abbr: "AI", brand: "#6E56CF" },
      { name: "Cloud Computing & Automation", abbr: "CCA", brand: "#0078D4" },
    ],
  },
];

// ---------------------------------------------------------------
// Contact + navigation
// ---------------------------------------------------------------

export const contactDetails = [
  { icon: "◉", text: "Ahmedabad, India", href: null },
  {
    icon: "✉",
    text: "abhigyansingh1314@gmail.com",
    href: "mailto:abhigyansingh1314@gmail.com",
  },
  { icon: "☏", text: "+91 91424 02410", href: "tel:+919142402410" },
];

export const contactHeading = ["Let's build", "something", "that scales"];

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks = navLinks.slice(1);
