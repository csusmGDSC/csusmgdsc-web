import { GDSCProject } from "@/types/gdsc-project";
import { Room } from "@/types/room";

export const socials = {
  github: "https://github.com/csusmGDSC",
  teams:
    "https://teams.microsoft.com/l/team/19%3A7u6FOYbIkk7NLclaCv9ucmdDrPBkvXReZm2ixYlEe601%40thread.tacv2/conversations?groupId=8ca48579-37f4-4060-9bf3-cfca2a74f25e&tenantId=128753ab-cb28-4f82-9733-2b9b91d2aca9",
  instagram: "https://www.instagram.com/gdsc.csusm/",
  twitter: "https://twitter.com/dsccsusm?lang=en",
};

// Convert the object to an array of objects
export const socialsList = Object.entries(socials).map(([social, link]) => ({
  social,
  link,
}));

export const buildings = [
  { name: "Academic Hall", id: "ACD" },
  { name: "University Hall", id: "UNIV" },
  { name: "Unversity Student Union", id: "USU" },
  { name: "Library", id: "LIB" },
  { name: "Viasat Engineering Pavilion", id: "VEP" },
  { name: "Science Hall", id: "SCI" },
  { name: "Science Hall 2", id: "SCI2" },
];

export const rooms: Room[] = [
  {
    building: "ACD",
    room: 201,
    type: 1,
    capacity: 30,
  },
  {
    building: "ACD",
    room: 202,
    type: 1,
    capacity: 30,
  },
  {
    building: "ACD",
    room: 203,
    type: 1,
    capacity: 30,
  },
  {
    building: "ACD",
    room: 204,
    type: 1,
    capacity: 30,
  },
  {
    building: "UNIV",
    room: 201,
    type: 1,
    capacity: 30,
  },
  {
    building: "UNIV",
    room: 202,
    type: 1,
    capacity: 30,
  },
  {
    building: "UNIV",
    room: 203,
    type: 1,
    capacity: 30,
  },
  {
    building: "UNIV",
    room: 204,
    type: 1,
    capacity: 30,
  },
  {
    building: "USU",
    room: 201,
    type: 1,
    capacity: 30,
  },
  {
    building: "USU",
    room: 202,
    type: 1,
    capacity: 30,
  },
];

export const projects: GDSCProject[] = [
  {
    title: "Routify",
    description:
      "City pathfinding visualizer. Used to learn fundamental graph traversal algorithms such as BFS, DFS, or A* Search.",
    websiteUrl: "https://www.routify.cc",
    githubUrl: "https://www.github.com/jaedonspurlock01/routify",
    imageSrc: "/images/projects/routify.gif",
    tags: ["JavaScript", "ReactJS", "ThreeJS"],
    date: "Jan 2024 - Mar 2024",
  },
  {
    title: "Melo",
    description:
      "Music player app inspired by Youtube Music and Spotify. Focuses on scalabilty and performance.",
    websiteUrl: "https://www.melosong.netlify.app",
    githubUrl: "",
    imageSrc: "/images/projects/melo.png",
    tags: ["TypeScript", "Golang", "AWS", "Docker"],
    date: "Jan 2024 - Mar 2024",
  },
  {
    title: "NASA JPL Rover",
    description:
      "Mechanical assembly of rover sourced from the NASA JPL website. Used to build foundational skills for URC rover challenge.",
    websiteUrl: "https://github.com/nasa-jpl/open-source-rover",
    githubUrl: "https://github.com/nasa-jpl/open-source-rover",
    imageSrc: "/images/projects/rover.jpeg",
    tags: ["ROS2", "Python", "C++"],
    date: "Sep 2024 - December 2024",
  },
  {
    title: "Mapping Drone",
    description:
      "Industry-grade drone that maps the campus to build a simulation and train our AI model for our autonomous golf cart.",
    websiteUrl: "https://github.com/nasa-jpl/open-source-rover",
    githubUrl: "https://github.com/nasa-jpl/open-source-rover",
    imageSrc: "/images/projects/drone.jpg",
    tags: ["ROS2", "Python", "C++"],
    date: "April 2025",
  },
  // {
  //   title: "Micromouse",
  //   description:
  //     "Small robot that navigates a maze. Used to build foundational skills for autonomous navigation.",
  //   websiteUrl: "https://github.com/nasa-jpl/open-source-rover",
  //   githubUrl: "https://github.com/nasa-jpl/open-source-rover",
  //   imageSrc: "/images/projects/placeholder.svg",
  //   tags: ["ROS2", "Python", "C++"],
  //   date: "March 2025",
  // },
  // {
  //   title: "Autonomous Golf Cart",
  //   description:
  //     "Large scale transporation service inspired by Waymo to help enhance accessibility of student commuting across the campus.",
  //   websiteUrl: "https://github.com/nasa-jpl/open-source-rover",
  //   githubUrl: "https://github.com/nasa-jpl/open-source-rover",
  //   imageSrc: "/images/projects/placeholder.svg",
  //   tags: ["ROS2", "Python", "C++"],
  //   date: "April 2025",
  // },
] as const;
