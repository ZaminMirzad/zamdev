export const navList = [
  {
    id: "1lsjkf",
    toLink: "about",
    text: "About",
  },
  {
    id: "1lsjsfdfekf",
    toLink: "experience",
    text: "Experience",
  },
  {
    id: "1lsjsdfsdffdfekf",
    toLink: "skills",
    text: "Skills",
  },
  {
    id: "1lfdgdrtesjkf",
    toLink: "projects",
    text: "Projects",
  },
  {
    id: "sdfseg",
    toLink: "contact",
    text: "Contact",
  },
];

export const skillList = [
  {
    id: "sdfsdfasdf",
    skill: "html",
    level: "experienced",
  },
  {
    id: "sdfsdfaersdf",
    skill: "css",
    level: "experienced",
  },
  {
    id: "sdfsdfaghgsdf",
    skill: "sass",
    level: "experienced",
  },
  {
    id: "sdfsdfsfasdf",
    skill: "javascript",
    level: "experienced",
  },
  {
    id: "hjkkl",
    skill: "TypeScript",
    level: "experienced",
  },
  {
    id: "sdf",
    skill: "MaterialUI",
    level: "experienced",
  },
  {
    id: "sdfsdfsfa;'lsdf",
    skill: "React",
    level: "experienced",
  },
  {
    id: "sdfsdfklksfasdf",
    skill: "Vue",
    level: "experienced",
  },
];

// Define the Project interface
interface Project {
  imageLink: string;
  githubLink: string;
  liveDemoLink: string;
  title: string;
  id: string;
}

// Create an array of projects
export const projects: Project[] = [
  {
    imageLink:
      "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/user/project1",
    liveDemoLink: "https://project1.demo.com",
    title: "Project One Project Project Project Project",
    id: "a1b2c3d4",
  },
  {
    imageLink:
      "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/user/project2",
    liveDemoLink: "https://project2.demo.com",
    title: "Project Two",
    id: "e5f6g7h8",
  },
  {
    imageLink:
      "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/user/project3",
    liveDemoLink: "https://project3.demo.com",
    title: "Project Three",
    id: "i9j0k1l2",
  },
  {
    imageLink:
      "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/user/project4",
    liveDemoLink: "https://project4.demo.com",
    title: "Project Four",
    id: "m3n4o5p6",
  },
  {
    imageLink:
      "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/user/project5",
    liveDemoLink: "https://project5.demo.com",
    title: "Project Five",
    id: "q7r8s9t0",
  },
];

interface IExperience {
  id: string;
  company: string;
  date: string;
  type: "success" | "error" | "info";
  keySkills: {
    id: string;
    skill: string;
  }[];
}

export const experiences: IExperience[] = [
  {
    id: "f7a3d2c1-5b9e-4f58-bb23-1b5a04c4b3d9",
    company: "Tech Innovators Inc.",
    date: "June 2022 - Present",
    type: "success",
    keySkills: [
      { id: "a1b2c3d4", skill: "React" },
      { id: "e5f6g7h8", skill: "JavaScript" },
      { id: "i9j0k1l2", skill: "CSS" },
      { id: "m3n4o5p6", skill: "Team Collaboration" },
      { id: "q7r8s9t0", skill: "Agile Methodologies" },
    ],
  },
  {
    id: "a24f6c79-3b9f-4dbe-b56d-9c79b5e3a8b4",
    company: "CodeCraft Solutions",
    date: "January 2021 - May 2022",
    type: "error",
    keySkills: [
      { id: "u1v2w3x4", skill: "Node.js" },
      { id: "y5z6a7b8", skill: "Express" },
      { id: "c9d0e1f2", skill: "RESTful APIs" },
      { id: "g3h4i5j6", skill: "Problem-Solving" },
      { id: "k7l8m9n0", skill: "Time Management" },
    ],
  },
  {
    id: "9e59a1b4-d75c-4d08-ae12-14d5d3e67466",
    company: "Creative Tech Labs",
    date: "August 2020 - December 2020",
    type: "info",
    keySkills: [
      { id: "o1p2q3r4", skill: "HTML" },
      { id: "s5t6u7v8", skill: "CSS" },
      { id: "w9x0y1z2", skill: "JavaScript" },
      { id: "a3b4c5d6", skill: "User Experience Design" },
      { id: "e7f8g9h0", skill: "Effective Communication" },
    ],
  },
  {
    id: "d2b08d90-c76d-4f76-bbd1-6c2e45bc1b65",
    company: "Innovative Software Co.",
    date: "March 2019 - July 2020",
    type: "success",
    keySkills: [
      { id: "i1j2k3l4", skill: "Python" },
      { id: "m5n6o7p8", skill: "Django" },
      { id: "q9r0s1t2", skill: "Database Management" },
      { id: "u3v4w5x6", skill: "Adaptability" },
      { id: "y7z8a9b0", skill: "Critical Thinking" },
    ],
  },
  {
    id: "b4d0ec7c-fc4b-42b5-b54f-66d38a2b3cde",
    company: "Future Tech Solutions",
    date: "January 2018 - February 2019",
    type: "info",
    keySkills: [
      { id: "c1d2e3f4", skill: "Vue.js" },
      { id: "g5h6i7j8", skill: "SASS" },
      { id: "k9l0m1n2", skill: "Git" },
      { id: "o3p4q5r6", skill: "Collaboration" },
      { id: "s7t8u9v0", skill: "Creative Problem-Solving" },
    ],
  },
];
