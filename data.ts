import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express,GraphQL </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop and fix robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "Finding the <b>Bugs</b> and <b>Fixing </b> them is my favorite part of coding ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "More Services",
    about:
      "I have also a Professional <b>Logo designer</b> , <b>Video Editor</b>  and <b>Architecture</b>.  ",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Html5",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "Css3",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "Redux",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "Next js",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "Node js",
    level: "100",
  },
   {
    Icon: BsCircleFill,
    name: "Express",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "GraphQL",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDb",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "Firebase",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Mysql",
    level: "100",
  },
  
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
   {
    Icon: BsCircleFill,
    name: "Framer",
    level: "70",
  },
   {
    Icon: BsCircleFill,
    name: "Postman",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "Material UI",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "100",
  },
   {
    Icon: BsCircleFill,
    name: "Tailwind css",
    level: "100",
  },
   {
    Icon: BsCircleFill,
    name: "Materialize CSS",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "Socket.io",
    level: "70",
  },
 
  
];

export const projects: IProject[] = [
  { 
    name: "Socail Network App",
    description:
      "This is a socail network app same like facebook,twitter and Instagram",
    image_path: "/images/s.jpg",
    deployed_url: "https://v-network-devat.herokuapp.com",
    github_url: "https://github.com/devat-youtuber/MERN-Stack-Build-a-social-media-app",
    category: ["react"],
    key_techs: ["React", "Redux","Node js","MongoDB","JWT","socket.io","Material UI"],
  },
  {
    name: "Algorithm Visualizer",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "/permission",
    category: ["react"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "/permission",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "/permission",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  { 
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "/permission",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "/permission",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    name: "Football App",
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "/permission",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
