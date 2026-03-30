import React, { useState } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const cardBg = isDark
    ? "bg-blue-950 hover:bg-blue-900/50"
    : "bg-blue-50 hover:bg-blue-100";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";

  const projects = [
    {
      title: "Nestify ",
      desc: "A full-stack Airbnb-like platform built with the MERN stack, allowing users to list, explore, and book properties with authentication.",
      img: "./nestify.png",
      live: "https://nestify-fdnw.onrender.com/listings",
      git: "https://github.com/tagur18/Nestify-Where-Comfort-Meets-Home",
      tech: ["React", "MongoDB", "Cloudinary"],
    },
    {
      title: "BiteBuddy",
      desc: "A responsive food delivery web application built using HTML, CSS, and JavaScript. Features dynamic product interactive, and UI for seamless user experience.",
      img: "./bite.png",
      live: "https://bite-buddy-food-delivery-web-app-gules.vercel.app/",
      git: "https://github.com/tagur18/Bite-Buddy-Food-Delivery-Web-App",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  
     {
      title: "My Portfolio",
      desc: "My Portfolio — A personal website showcasing my skills, projects, and journey as a developer with smooth animations and dark/light mode.",
      img: "./33.png",
      live: "https://personal-portfolio-website-5w7d.onrender.com",
      git: "https://github.com/tagur18/Personal-Portfolio-Website",
      tech: ["React", "Framer Motion", "Tailwind"],
    },
    {
      title: "Amazon Clone",
      desc: "Amazon Clone — A front-end project recreating Amazon’s homepage using HTML and CSS, focusing on layout design, styling, and responsive UI fundamentals.",
      img: "./amazon.png",
      live: "/",
      git: "https://github.com/tagur18/Amazon-website-clone",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Spotify UI Clone",
      desc: "Spotify UI Clone — A modern music streaming interface built using HTML and CSS. Features a responsive layout and custom-designed player bar.",
      img: "./spotify.png",
      git: "https://github.com/tagur18/Spotify-Clone/tree/main/Spotify-Clone",
      tech: ["HTML", "CSS"],
    },
    {
        title:"Parallax Website",
       desc:"Parallax Website — A visually engaging front-end project-implementing smooth parallax scrolling effects to create an immersive user experience.",
      img: "./para.png",
      git: "https://github.com/tagur18/HTML-CSS-PROJECTS/tree/main/Project-4",
      tech:["HTML", "CSS", "Parallax"],
    },
    {
      title:"YouTube UI Clone",
           desc : "YouTube UI Clone — A responsive front-end application built with HTML and CSS, featuring a structured video and for desktop devices.",
           img : "./youtube.png",
          git : "https://github.com/tagur18/HTML-CSS-PROJECTS",
          tech:["HTML", "CSS"],
    },
    {
      title:"Simon Says Game",
     desc  : "A fun and interactive memory game  where players repeat an increasing sequence of colors, testing their memory and focus with each level.",

      img: "./simon.png",
      git: "https://github.com/tagur18/Simon-Says-Game",
     tech :["HTML", "CSS", "JavaScript"]
    },
   
  ];

  return (
    <div
      className={`${containerBg} min-h-screen pt-40 md:pt-44 px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 transition-colors duration-300`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-gradient-to-br from-blue-950/10 via-transparent to-black/30"
            : "bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/20"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`rounded-2xl border ${borderColor} shadow-xl overflow-hidden transition-all duration-500 transform ${
                hoveredIndex === index
                  ? "scale-105 -translate-y-3 shadow-2xl"
                  : "hover:-translate-y-2"
              } ${cardBg} group relative`}
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-b from-blue-500/10 to-transparent">
                <img
                  src={project.img}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredIndex === index
                      ? "bg-black/40 opacity-100"
                      : "bg-black/0 opacity-0"
                  }`}
                ></div>
              </div>

              <div className="p-6 flex flex-col justify-between h-[280px]">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${textPrimary}`}>
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-300 ${
                        isDark
                          ? "bg-blue-900/50 text-blue-300 border border-blue-700/50"
                          : "bg-blue-100 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-4 justify-center">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.git ? "flex-1" : "w-full"
                      } flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 transform ${
                        hoveredIndex === index ? "scale-105" : "scale-100"
                      } ${
                        isDark
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50"
                          : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
                      }`}
                    >
                      <FaExternalLinkAlt className="text-sm" /> Live
                    </a>
                  )}

                  {project.git && (
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.live ? "flex-1" : "w-full"
                      } flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold border-2 transition-all duration-300 transform ${
                        hoveredIndex === index ? "scale-105" : "scale-100"
                      } ${
                        isDark
                          ? "border-blue-400 text-blue-400 hover:bg-blue-950/50 hover:border-blue-300"
                          : "border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700"
                      }`}
                    >
                      <FaGithub className="text-sm" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;





