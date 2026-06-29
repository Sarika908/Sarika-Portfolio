import { Project, Experience, Education, Certification, Award } from './types';

export const personalInfo = {
  name: "Sarika S",
  title: "Python & Backend Developer",
  subTitle: "Software Developer",
  email: "sarikasaravanan908@gmail.com",
  phone: "9087834633",
  linkedin: "https://linkedin.com/in/sarika-s-464b39290",
  github: "https://github.com/Sarika908",
  location: "Pallipalayam, Tamil Nadu, 638006",
  summary: "Entry-level Python Developer and Software Developer with strong knowledge of Python programming, Django-based backend development, and database management. Hands-on experience in building real-world applications, implementing RESTful logic, and developing scalable software solutions through academic and internship projects. Seeking a fresher role to contribute to software development, backend systems, and problem-solving driven environments."
};

export const skillsGrouped = {
  languages: {
    title: "Programming",
    skills: [
      { name: "Python", level: 90, icon: "Terminal" },
      { name: "HTML5", level: 85, icon: "FileCode" },
      { name: "CSS3", level: 80, icon: "Paintbrush" }
    ]
  },
  backend: {
    title: "Backend Development",
    skills: [
      { name: "Django", level: 88, icon: "Cpu" },
      { name: "Django REST Framework", level: 85, icon: "Globe" },
      { name: "Flask", level: 80, icon: "Zap" }
    ]
  },
  databases: {
    title: "Databases & Storage",
    skills: [
      { name: "MySQL", level: 85, icon: "Database" }
    ]
  },
  devops: {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 75, icon: "Cloud" },
      { name: "Docker", level: 78, icon: "Layers" },
      { name: "GitHub / Git", level: 85, icon: "Github" },
      { name: "CI/CD Pipelines", level: 70, icon: "GitBranch" }
    ]
  },
  tools: {
    title: "Tools & Core Skills",
    skills: [
      { name: "VS Code", level: 90, icon: "Code" },
      { name: "PyCharm", level: 85, icon: "PenTool" },
      { name: "Debugging & QA", level: 88, icon: "Wrench" },
      { name: "Team Collaboration", level: 90, icon: "Users" }
    ]
  }
};

export const experiences: Experience[] = [
  {
    id: "exp_1",
    role: "Python Developer Intern",
    company: "Yale IT Skill Hub",
    period: "May 2025 - Jun 2025",
    location: "Coimbatore, Tamil Nadu",
    highlights: [
      "Developed Python applications following modular and reusable coding practices.",
      "Implemented robust backend features using the Django framework.",
      "Connected Django applications with MySQL for secure data storage and retrieval.",
      "Debugged application errors and optimized query execution for 25%+ improved API performance."
    ]
  }
];

export const education: Education = {
  school: "KSR College of Arts and Science for Women",
  degree: "Bachelor of Science in Computer Science (Periyar University)",
  cgpa: "8.71 / 10",
  period: "May 2026 Graduation",
  location: "Tiruchengode, Tamil Nadu",
  description: "Achieved a CGPA of 8.71 at Periyar University, demonstrating consistent academic excellence and mastery in core subjects. Completed rigorous coursework in computer science, software engineering, and database systems. Collaborated on interdisciplinary projects, applying scientific principles to real-world software engineering challenges."
};

export const projects: Project[] = [
  {
    id: "project_election",
    title: "Online Election System",
    period: "Aug 2025 - Sep 2025",
    location: "Tiruchengode, India",
    description: "A highly secure, robust online voting platform featuring advanced dual-factor voter authentication, strict backend query validation to prevent injection attacks, and real-time ledger auditing.",
    stats: [
      { label: "Security Uplift", value: "+40%" },
      { label: "Invalid/Duplicate Votes Prevented", value: "99%" },
      { label: "Database System Uptime", value: "99.9%" }
    ],
    highlights: [
      "Spearheaded development of a secure online voting platform with advanced multi-layer authentication, safeguarding election integrity.",
      "Implemented strict back-end validation protocols and transactional middleware, eliminating duplicate voting records during concurrent high-traffic polling periods.",
      "Optimized data schema, index keys, and connection pooling in MySQL to achieve 99.9% uptime and prevent tampering."
    ],
    tags: ["Python", "Django", "MySQL", "Cryptography", "Security Auditing"],
    type: "backend"
  },
  {
    id: "project_voice",
    title: "Smart Voice Assistant",
    period: "Feb 2025 - Mar 2025",
    location: "Tiruchengode, India",
    description: "An AI-powered smart voice assistant using advanced natural language processing (NLP) algorithms to convert unstructured spoken audio into structured backend task execution calls.",
    stats: [
      { label: "User Engagement Boost", value: "+40%" },
      { label: "Voice Recognition Accuracy", value: "30%" },
      { label: "Rollout Cycle Reduced", value: "25%" }
    ],
    highlights: [
      "Led development of a desktop smart voice assistant, enhancing hands-free workflows and achieving a 40% increase in prototype engagement.",
      "Engineered text-tokenization and basic intent-mapping pipelines, improving voice-command execution accuracy by 30% across accent profiles.",
      "Directed cross-functional integration of serverless APIs with Python services on AWS, shortening deployment cycle times by 25%."
    ],
    tags: ["Python", "Flask", "NLP", "AWS Lambda", "Docker"],
    type: "ai"
  }
];

export const certifications: Certification[] = [
  {
    id: "cert_python",
    title: "Python Programming & Django",
    issuer: "KSR College Certification",
    desc: "Validates advanced Python programming applied to backend development using Django, Django REST Framework, and Flask. Covered building and optimizing data-driven applications with MySQL, improving API response times by 25% and reducing critical bugs by 30% through systematic unit testing.",
    tags: ["Python", "Django", "Flask", "MySQL", "REST APIs"]
  },
  {
    id: "cert_ai",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM Certified",
    desc: "Validates comprehensive knowledge in AI frameworks, machine learning lifecycle (supervised and unsupervised learning), model evaluation metrics, and cloud-native model deployments using Python on AWS.",
    tags: ["AI", "Machine Learning", "IBM", "AWS"]
  },
  {
    id: "cert_genai",
    title: "Introduction to Generative AI",
    issuer: "AWS Partner Program",
    desc: "Validates practical knowledge of Generative AI fundamentals on AWS. Focuses on orchestrating foundation models via AWS SDKs, Docker-based containerized deployments, and optimization strategies that boosted prototype delivery speed by 25%.",
    tags: ["Generative AI", "AWS Cloud", "Docker", "Prompt Design"]
  },
  {
    id: "cert_devops",
    title: "Getting Started with DevOps on AWS",
    issuer: "AWS Partner Academy",
    desc: "Demonstrates foundational DevOps methodologies on AWS including configuring secure CI/CD build pipelines, containerizing services using Docker, and automated deployment architectures on ECS/Elastic Beanstalk.",
    tags: ["DevOps", "CI/CD Pipelines", "Docker", "AWS Cloud"]
  }
];

export const awards: Award[] = [
  {
    title: "Best Outgoing Student Award",
    issuer: "KSR College of Arts and Science for Women",
    date: "March 2026",
    highlights: [
      "Recognized for outstanding academic achievement (CGPA 8.71) and active leadership in department tech clubs and academic initiatives.",
      "Coordinated student workshops on Python and Django, mentoring 30+ juniors in debugging and backend programming to increase project completion rates by 30%."
    ]
  }
];
