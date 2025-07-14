// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';



// Education Section Logo's
import glaLogo from './assets/education_logo/UniLogo.jpg';
import bsaLogo from './assets/education_logo/tenLogo.png';
import vpsLogo from './assets/education_logo/Rbselogo.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/hospital.png';
import csprepLogo from './assets/work_logo/chatbot.png';
import movierecLogo from './assets/work_logo/healthquest.png';
// import taskremLogo from './assets/work_logo/.png';
import npmLogo from './assets/work_logo/tictac.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
       
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
   
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
  
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


  
  export const education = [
   {
  id: 0,
  img: glaLogo, // replace with actual logo variable if available
  school: "Chitkara University, Punjab",
  date: "Sept 2023 - July 2027 (Expected)",
  grade: "9.21 CGPA (till now)",
  desc: "I am currently pursuing my Bachelor's degree (B.E.) in Computer Science Engineering from Chitkara University, Punjab. My coursework covers subjects like Data Structures, Algorithms, Object-Oriented Programming, Database Systems, Operating Systems, Web Development, and Computer Networks. With a current CGPA of 9.21, I’ve consistently performed well academically. I have been actively involved in hands-on projects, technical workshops, and hackathons, which have enhanced my practical understanding and professional skills. My time at Chitkara University continues to contribute significantly to my growth as a developer and engineer.",
  degree: "Bachelor of Engineering (B.E.) in Computer Science",
},
    
    {
  id: 1,
  img: vpsLogo, // replace with actual image/logo variable if available
  school: "R.M. Memorial Public School, Gajsinghpur",
  date: "April 2019 - August 25, 2020",
  grade: "86.33%",
  desc: "I completed my Class 10 education from R.M. Memorial Public School, Gajsinghpur, affiliated with the Rajasthan Board of Secondary Education (RBSE). My curriculum included Science, Mathematics, Social Studies, and Computer Applications.",
  degree: "RBSE (X), Science with Computer Applications",
},
{
  id: 2,
  img: vpsLogo,
  school: "R.M. Memorial Public School, Gajsinghpur",
  date: "April 2021 - July 20, 2022",
  grade: "85%",
  desc: "I completed my Class 12 education with Physics, Chemistry, and Mathematics (PCM) from R.M. Memorial Public School, Gajsinghpur, under the Rajasthan Board of Secondary Education (RBSE). The course helped me build a strong foundation in science and analytical reasoning.",
  degree: "RBSE (XII), PCM (Physics, Chemistry, Mathematics)",
}

  ];
  
  export const projects = [
    {
      id: 0,
      title: "Doctery-Hospital",
      description:
        "Doctery is your one-stop digital healthcare platform, offering seamless online appointment booking, real-time doctor availability, and personalized patient care—ensuring that quality medical support is always just a click away, anytime and anywhere",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Dikshant0083/Hospital-management-express.git",
      webapp: "https://hospital-management-express.vercel.app/",
    },
    {
      id: 1,
      title: "Chat-Bot",
      description:
        "Smart conversational AI chatbot integrated using external AI API – crafted with Node.js and Express.js for seamless real-time interaction and dynamic responses.",
      image: csprepLogo,
      tags: [ "Node.js",  "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Dikshant0083/ChatBot-Ai.git",
      webapp: " https://dikshant0083.github.io/ChatBot-Ai/",
    },
    {
      id: 2,
      title: "Health-Quest",
      description:
        "HealthQuest: A wellness-focused web app that tracks your calories and meals in real time, designed with a clean UI and interactive features for better health management",
      image: movierecLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Dikshant0083/Health_quest.git",
      webapp: " https://dikshant0083.github.io/Health_quest/",
    },
    {
      id: 3,
      title: "TIC-TAC-TOE",
      description:
        "Classic Tic Tac Toe built from scratch using HTML, CSS, and JavaScript – responsive design with interactive gameplay logic for two players.",
      image: npmLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Dikshant0083/TIC-TAC-TOE.git",
      webapp: "https://dikshant0083.github.io/TIC-TAC-TOE/",
    },
    
  ];  