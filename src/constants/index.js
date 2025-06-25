import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a final-year undergraduate student with 183 credits completed out of 240 in my degree program, actively seeking a practical training opportunity to fulfill my course requirements and gain real-world industry experience. I am enthusiastic about software development and have completed coursework in Full Stack Programming, Mobile Application Development, Android App Development, Web Server Programming, Web Visualization, Data Structures and Algorithms with python, IT service platforms and Object Oriented Programming.`;

export const ABOUT_TEXT = {
  description: `Through the above courses, I’ve gained strong hands-on skills in modern web technologies, particularly React.js, Node.js, MongoDB, Python, C#.NET, Docker and REST API integration. I have built several projects using these technologies and am confident in my ability to contribute to both front-end and back-end development tasks.

I am eager to apply my knowledge in a professional setting, learn from experienced developers, and grow into a capable full-stack developer. I am motivated, quick to learn, and excited to start my journey in the tech industry.`,

  sections: [
    {
      title: "Frontend Technologies",
      items: ["ReactJS", "JavaScript", "HTML", "CSS", "TailwindCSS", "VueJS", "Angular"],
    },
    {
      title: "Backend Technologies",
      items: ["Node.js", "Express.js", "REST APIs", "Web Tokens (JWT)", "WebSockets"],
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
    year: "2024 - Present",
    role: "Data Network Assistant",
    company: "JAMK University of Applied Sciences",
    description: `Material Management and Assistant to the lecturer`,
  },
  {
    year: "2019 - 2023",
    role: "Business Development Executive",
    company: "Hayleys Aventura (PVT) Ltd.",
    description: `- Achieving new projects for innovative products and technologies and target revenue and GP./
- Introducing new innovations/technologies/products/trends to the market.
- Supporting the collaboration between the clients and the overseas supplier.
- Procuring new clients through direct contact and word-of-mouth.
- Negotiating with suppliers to secure the most attractive prices.
- Reviewing clients' feedback and implementing necessary change.
- Engaging with overseas suppliers to retain continuous support for the clients.
- Obtaining technical trainings with overseas suppliers.
- Arranging & presenting the technical & sales presentations for internal parties as well as for outbound customers.`,

  },
  {
    year: "2015 - 2019",
    role: "Sales Assistant",
    company: "Queens Mobile",
    description: `Gain new orders for mobile phones and achieve the target revenue.`,
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
];

export const EDUCATION = [
  {
    title: "Bachelor of Engineering in Information and Communication Technology",
    description:
      "JAMK University of Applied Sciences",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Bachelor of Science in Biological Science",
    description:
      "University of Sri Jayewardenepura, Sri Lanka",
    technologies: ["Zoology","Chemistry","Microbiology"],
  }
]
