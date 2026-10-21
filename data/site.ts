export const socials = [
  { label: "GitHub", href: "https://github.com/TheImperialOne" },
  { label: "LinkedIn", href: "https://linkedin.com/in/theimperialone" },
  { label: "Instagram", href: "https://instagram.com/aniket_d_kale" },
  { label: "Email", href: "mailto:aniketkale2003d@gmail.com" },
];
export const roles = ["Data Engineer", "Full Stack Developer", "SAP Basis Consultant", "MERN Stack Developer", "Android Developer"];
export const intro = [
  "I am a tech enthusiast who loves creating impactful digital solutions.",
  "My work centres on data engineering and distributed systems, building high-volume ETL/ELT pipelines with PySpark, Apache Airflow, Hive and SQL, with hands-on experience in enterprise data architecture.",
  "Alongside data work, I build scalable full stack applications using Node.js, React, Spring Boot, Flutter and Android.",
  "I currently also work as an SAP Basis Consultant at LTIMindtree, administering enterprise landscapes and keeping critical systems available.",
  "I am especially interested in AI/ML systems and how they can be wired into real data platforms to build intelligent, enterprise-grade products.",
];
export const about = [
  "Hi everyone, I am Aniket Kale based in Mumbai, India.",
  "I currently work as a Data Engineer, building distributed ETL/ELT pipelines and enterprise data systems with PySpark, Airflow and Hive. Alongside that I take on SAP Basis administration at LTIMindtree, where I support a three-instance landscape for a global FMCG client.",
  "I previously worked as a Quality Assurance Intern at Yoliday, validating APIs with Postman and Charles Proxy, and as an Android Developer Intern at CareLink building healthcare apps in Java and Firebase.",
  "I hold a Bachelor of Engineering in Information Technology from Vasantdada Patil Pratishthan's College of Engineering, Mumbai, with a CGPA of 8.41.",
  "Apart from work, I love playing games, reading novels, watching anime and athletics.",
];
export const quote = "Strive to build things that make a difference!";
export const stack = [
  { group: "Data Engineering & Big Data", items: ["Apache Spark", "Apache Airflow", "Apache Hadoop", "Hive", "Databricks", "dbt"] },
  { group: "Programming Languages", items: ["Python", "Java", "JavaScript", "Dart"] },
  { group: "Cloud Platforms", items: ["Microsoft Azure", "AWS", "Apple", "Google Cloud"] },
  { group: "Backend & Mobile", items: ["Spring Boot", "Express", "Node.js", "React", "Firebase", "Mobile"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { group: "DevOps", items: ["Docker"] },
];
export const tools = ["Android Studio", "VS Code", "JetBrains", "Postman", "Git", "Docker", "Jenkins", "Figma", "Slack", "Linux"];
export const projects = [
  { title: "AyurSage", tagline: "Ayurvedic Healthcare Platform", desc: "NLP/ML to interpret Ayurvedic texts, with a Flutter + Firebase mobile app and real-time user feedback.", meta: "Team of 4 · Team Lead · April 2025", links: [{ label: "App", href: "#" }, { label: "ML Model", href: "#" }] },
  { title: "HireBuddy", tagline: "Smart Competency Diagnostics Platform", desc: "Adaptive assessment built with Python, GenAI and MERN, with cloud dashboards.", meta: "Team of 4 · Developer · March 2025", demo: "https://hirebuddy-candidate.vercel.app", links: [{ label: "Backend", href: "#" }, { label: "Candidate", href: "#" }, { label: "HR", href: "#" }] },
  { title: "Setu X", tagline: "Decentralised Healthcare dApp", desc: "Java, Android Studio and Firebase/Filebase with role-based access, giving roughly 40% faster record retrieval.", meta: "Team of 4 · Technical Lead · March 2024", demo: "https://setu-x.vercel.app", links: [{ label: "dApp", href: "#" }, { label: "Hyperledger", href: "#" }, { label: "Web App", href: "#" }] },
  { title: "College Management System", tagline: "Academic administration platform", desc: "Academic admin platform built with Java, JSP and MySQL.", meta: "Team of 4 · Full Stack Developer · February 2022", links: [] as { label: string; href: string }[] },
];
export const timeline = [
  { section: "Work experience", entries: [
    { title: "SAP Basis Consultant", org: "LTIMindtree, Mumbai · Onsite", when: "Dec 2025 – Present", points: ["Three-instance SAP landscape, 1,000+ users", "99.5%+ availability, 150+ monthly background jobs", "Cut L1/L2 incident turnaround by 25%"] },
    { title: "Data Engineer", org: "Swayambhu Academy, Mumbai · Remote contract", when: "Nov 2024 – Nov 2025", points: ["ETL/ELT with PySpark, Python, SQL, Airflow, Hive", "Data integrity across HDFS, Hive, PostgreSQL", "Airflow DAGs saving ~15 hours/week"] },
  ] },
  { section: "Internships", entries: [
    { title: "QA Intern", org: "Yoliday, Mumbai · Remote", when: "Dec 2024 – Feb 2025", points: [] },
    { title: "Android Developer Intern", org: "CareLink Pvt. Ltd., Mumbai · Remote", when: "Jun 2023 – Aug 2023", points: [] },
    { title: "Web Developer Intern", org: "MakeMyHolidayz Pvt. Ltd., Mumbai · Remote", when: "Mar 2022 – Jul 2022", points: [] },
  ] },
  { section: "Education", entries: [
    { title: "BE, Information Technology", org: "Vasantdada Patil Pratishthan's College of Engineering, Mumbai University", when: "Nov 2022 – May 2025", points: ["CGPA 8.41"] },
    { title: "Diploma in IT", org: "Government Polytechnic, Mumbai", when: "Aug 2019 – Sept 2022", points: ["88.17%"] },
  ] },
  { section: "Certifications (2025)", entries: [
    { title: "Oracle Cloud Infrastructure", org: "Foundations, Architect, DevOps", when: "2025", points: [] },
    { title: "AWS Cloud Practitioner Essentials", org: "Amazon Web Services", when: "2025", points: [] },
    { title: "Google Cloud", org: "Cloud Computing Foundations, Foundations of Cybersecurity", when: "2025", points: [] },
  ] },
];
export const stats = [
  { value: 1000, suffix: "+", decimals: 0, label: "SAP users supported" },
  { value: 99.5, suffix: "%", decimals: 1, label: "SAP availability" },
  { value: 15, suffix: " h", decimals: 0, label: "saved weekly with Airflow DAGs" },
  { value: 8.41, suffix: "", decimals: 2, label: "BE CGPA" },
];
export const marquee = ["PySpark","Airflow","Hive","Hadoop","Databricks","dbt","Python","Java","SQL","Spring Boot","Node.js","React","Flutter","Firebase","PostgreSQL","MongoDB","Docker","Azure","AWS"];
export const terminal = [
  ["name", "Aniket Kale"], ["role", "Data Engineer · Full Stack Developer"], ["now", "SAP Basis Consultant @ LTIMindtree"],
  ["location", "Mumbai, India"], ["stack", "PySpark, Airflow, Hive, React, Spring Boot"], ["interest", "AI/ML on real data platforms"],
];
