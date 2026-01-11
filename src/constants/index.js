import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";  

export const HERO_CONTENT = `I am a final-year undergraduate student with 217 credits completed out of 240 in my degree program, actively seeking a training opportunity to gain real-world industry experience. I am enthusiastic about software development and Data Analytics and Artificial Intelligence and have completed coursework in Full Stack Programming, Mobile Application Development, Android App Development, Web Server Programming, Web Visualization, Data Structures and Algorithms with python, Object Oriented Programming, Data Analytics and Machine Learning, Deep Learning, Data Preprocessing, Data Visulization, AI/DA project, IT service Platforms (Docker and GCP Technologies)`;

export const ABOUT_TEXT = {
  description: `Through the above courses, I’ve gained strong hands-on skills in modern web technologies, particularly React.js, Node.js, MongoDB, Python, C#.NET, Docker and REST API integration. I have built several projects using these technologies and am confident in my ability to contribute to both front-end and back-end development tasks.

I am eager to apply my knowledge in a professional setting, learn from experienced developers, and grow into a capable full-stack developer. I am motivated, quick to learn, and excited to start my journey in the tech industry.`,

  sections: [
    {
      title: "Frontend Technologies",
      items: [
        "ReactJS",
        "JavaScript",
        "HTML",
        "CSS",
        "TailwindCSS",
        "VueJS",
        "Angular",
      ],
    },
    {
      title: "Backend Technologies",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Web Tokens (JWT)",
        "WebSockets",
      ],
    },
    {
      title: "Database Management",
      items: ["MongoDB", "MySQL"],
    },
    {
      title: "Version Control & CI/CD Integration",
      items: ["GitHub", "Jenkins"],
    },
    {
      title: "Programming Concepts",
      items: ["Object-Oriented Programming (OOP)"],
    },
    {
      title: "Testing",
      items: ["Jest"],
    },
    {
      title: "Cloud Platforms & Integration",
      items: ["Google Firebase", "Heroku"],
    },
  ],
};

export const EXPERIENCES = [
  {
    year: "Sep 2025-  Present ",
    role: "Full Stack Developer - Internship",
    company: "Katch",
    description: [
  "Identified, analyzed, and fixed bugs in web and mobile applications",
  "Debugged front-end and back-end issues to improve application performance and stability",
  "Assisted in resolving UI/UX issues and functional errors reported by users and QA teams",
  "Wrote clean, maintainable code while following best practices",
  "Designed and implemented user interface components based on design guidelines and mockups",
  "Improved existing UI elements to enhance usability and responsiveness",
  "Ensured cross-browser and cross-device compatibility",
  "Supported the development and maintenance of server-side logic and APIs",
  "Helped optimize application performance and application security",
  "Implemented new features according to project requirements",
  "Wrote and executed basic unit and integration tests",
  "Ensured that fixes and new features met functional and technical requirements",
  "Collaborated with the development team using version control tools such as Git"
],
  },
  {
    year: "May 2024- Oct 2025 ",
    role: "Data Network Assistant",
    company: "JAMK University of Applied Sciences",
    description: [
      "Material management and assisting lecturers during lab sessions",
      "Testing and configuring network setups",
      "Maintaining user access permissions and supporting VPN and firewall configurations",
      "Conducting basic tests of network hardware and software",
      "Monitoring network traffic to identify bottlenecks and performance issues",
      "Assisting in deployment of new subnets and network expansions",
      "Testing DHCP, DNS, TCP/IP protocols and HTTP traffic using Wireshark",
      "Shell scripting and working with VMware and Linux (Ubuntu)"
    ],
  },
  {
    year: "Dec 2019  - Aug 2023",
    role: "Business Development Executive",
    company: "Hayleys Aventura (PVT) Ltd.",
    description: [
      "Achieving new projects for innovative products and technologies while meeting revenue targets",
      "Introducing new innovations, technologies, and market trends",
      "Coordinating between clients and overseas suppliers",
      "Procuring new clients through direct engagement and referrals",
      "Negotiating with suppliers to secure competitive pricing",
      "Reviewing client feedback and implementing improvements",
      "Maintaining long-term relationships with overseas suppliers",
      "Participating in technical training sessions with international suppliers",
      "Preparing and delivering technical and sales presentations for internal teams and customers"
    ],
  },
  {
    year: "Jan 2015 - Dec 2019",
    role: "Sales Assistant",
    company: "Queens Mobile",
    description: ['Gain new orders for mobile phones and achieve the target revenue.'],
  },
];
/* export const Technologies =[
  {
    technologies : ["HTML", "CSS","Python","mySQL","React","Node.js","Next.js","Flutter","Docker","Javascript","MongoDB"]
  }
] */
export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Future Factory Project",
    image: project2,
    description:
      "A Group project for implementation of the PrestaShop features and training of Project Management",
    technologies: ["PrestaShop", "GitLab", "React", "Docker", "PHP"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, education and contact information.",
    technologies: ["React", "Tailwind", "Framer-motion"],
  },
  {
    title: "Flutter Application",
    image: project4,
    description:
      "Developed and deployed a cross-platform mobile application using Flutter. Ensured performance optimization and followed best practices for scalable code architecture.",
    technologies: ["React", "Tailwind", "Framer-motion"],
  },
  {
    title: "Kyky-React Application",
    image: project5,
    description:
      "Bug-fixing and feature development in a React-based web and mobile application. Collaborated with the development team to enhance user experience for responsiveness and ensure code quality.Supported the development and maintenance of server-side logic and APIs",
    technologies: ["React", "SCSS","Firebase", "Github",],
  },
  {
    title: "My Thesis",
    image: project6,
    description:
      "Data collection and analysis of an Autonomous robotic system to optimize its performance and the behavior",
    technologies: ["Python"],
  },
];

export const EDUCATION = [
  {
    title:
      "Bachelor of Engineering in Information and Communication Technology",
    description: "JAMK University of Applied Sciences",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "MongoDB",
      "Data Networks",
      "Python",
      ".NET",
      "Networking",
      "OOP",
      "Data Analysis",
      "Troubleshooting",
      "Bug fixing",
      "Mobile application Development",
      "Android Application Development",
      "Software Development",
      "Kotlin",
      "Flutter",
      "Android studio",
      "Linux", "Shell Scripting","Ubuntu", "VMware", "Docker", "GCP", "Virtual machines"
    ],
  },
  {
    title: "Bachelor of Science in Biological Science",
    description: "University of Sri Jayewardenepura, Sri Lanka",
    technologies: ["Zoology", "Chemistry", "Microbiology"],
  },
];
