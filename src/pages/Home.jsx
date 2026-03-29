// import React from "react";
// import { useTheme } from "../context/Theme/ThemeContext";
// import {
//   FaCode,
//   FaDatabase,
//   FaPython,
//   FaGraduationCap,
//   FaShieldAlt,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   const containerBg = isDark ? "bg-black" : "bg-white";
//   const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
//   const textSecondary = isDark ? "text-blue-400" : "text-blue-600";

//   const roles = [
//     {
//       icon: FaCode,
//       title: "Full Stack Developer",
//       desc: "Building complete web solutions",
//     },
//     {
//       icon: FaDatabase,
//       title: "MERN Stack Developer",
//       desc: "MongoDB, Express, React, Node.js",
//     },
//     {
//       icon: FaGraduationCap,
//       title: "DSA Problem Solver",
//       desc: "Solving complex algorithms",
//     },
//     {
//       icon: FaShieldAlt,
//       title: "Continuous Learner",
//       desc: "Improving through practice & projects",
//     },
//   ];

//   return (
//     <div
//       className={`${containerBg} min-h-screen transition-colors duration-300`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start pt-14">
//           <div className="flex flex-col justify-center text-center md:text-left">
//             <h1
//               className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight ${
//                 isDark ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Hi, I'm{" "}
//               <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
//                 Tagur Kethavath
//               </span>
//             </h1>

//             <p
//               className={`text-lg sm:text-xl md:text-2xl font-semibold mb-6 ${textSecondary}`}
//             >
//               Full Stack Developer | MERN Specialist
//             </p>

//             <p
//               className={`text-base sm:text-lg leading-relaxed mb-8 ${textPrimary}`}
//             >
//               I'm a passionate{" "}
//               <span className="font-semibold">Full Stack Developer</span>{" "}
//               specializing in the{" "}
//               <span className="font-semibold">MERN Stack</span>, focused on
//               building responsive, scalable, and high-performance web
//               applications. With a strong foundation in{" "}
//               <span className="font-semibold">
//                 Data Structures & Algorithms (C++)
//               </span>
//               , I enjoy solving complex problems and writing optimized code.{" "}
//                 and
//               continuously improve my skills through real-world development and
//               consistent practice.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <Link to="/work">
//                 <button
//                   className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer ${
//                     isDark
//                       ? "bg-blue-600 hover:bg-blue-700 text-white"
//                       : "bg-blue-600 hover:bg-blue-700 text-white"
//                   }`}
//                 >
//                   View My Work
//                 </button>
//               </Link>

//               <Link to="/connect">
//                 <button
//                   className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 text-sm sm:text-base cursor-pointer ${
//                     isDark
//                       ? "border-blue-400 text-blue-400 hover:bg-blue-950"
//                       : "border-blue-600 text-blue-600 hover:bg-blue-50"
//                   }`}
//                 >
//                   Get in Touch
//                 </button>
//               </Link>
//             </div>
//           </div>

//           <div className="flex flex-col items-center gap-8">
//             <div
//               className={`relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 ${
//                 isDark ? "border-blue-900/40" : "border-blue-200"
//               } shadow-2xl`}
//             >
//               <img
//                 src="./pro.jpg"
//                 alt="Tagur Kethavath"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {roles.map((role, idx) => {
//                 const Icon = role.icon;
//                 return (
//                   <div
//                     key={idx}
//                     className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
//                       isDark
//                         ? "bg-blue-950 hover:bg-blue-900/80"
//                         : "bg-blue-100 hover:bg-blue-200"
//                     }`}
//                   >
//                     <Icon className={`text-xl sm:text-2xl ${textSecondary}`} />
//                     <div>
//                       <h4
//                         className={`font-bold text-base sm:text-lg ${
//                           isDark ? "text-white" : "text-gray-900"
//                         }`}
//                       >
//                         {role.title}
//                       </h4>
//                       <p
//                         className={`text-sm sm:text-base ${textPrimary} leading-snug`}
//                       >
//                         {role.desc}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;

//new


import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  FaCode,
  FaDatabase,
  FaGraduationCap,
  FaShieldAlt,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";

  const roles = [
    {
      icon: FaCode,
      title: "Full Stack Developer",
      desc: "Building complete web solutions",
    },
    {
      icon: FaDatabase,
      title: "MERN Stack Developer",
      desc: "MongoDB, Express, React, Node.js",
    },
    {
      icon: FaGraduationCap,
      title: "DSA Problem Solver",
      desc: "Solving complex algorithms",
    },
    {
      icon: FaShieldAlt,
      title: "Continuous Learner",
      desc: "Improving through practice & projects",
    },
  ];

  return (
    <div className={`${containerBg} transition-colors duration-300 scroll-mt-28 md:scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start pt-10">

          {/* LEFT */}
          <div className="flex flex-col justify-center text-center md:text-left">

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Tagur Kethavath
              </span>
            </h1>

            <p className={`text-xl font-semibold mb-6 ${textSecondary}`}>
              Full Stack Developer | MERN Specialist
            </p>

            <p className={`text-base leading-relaxed mb-8 ${textPrimary}`}>
              Passionate Full Stack Developer specializing in MERN stack,
              building scalable and high-performance applications with strong
              problem-solving skills in DSA.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4 w-full max-w-md mx-auto md:mx-0">

              {/* ROW 1 */}
              <div className="grid grid-cols-2 gap-3">
                <a href="/My_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="w-full px-4 py-2.5 text-sm rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
                    <FaExternalLinkAlt className="text-xs" />
                    View Resume
                  </button>
                </a>

                <a href="/My_Resume.pdf" download>
                  <button className="w-full px-4 py-2.5 text-sm rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2">
                    <FaDownload className="text-xs" />
                    Download
                  </button>
                </a>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-2 gap-3">

                <Link to="/work">
                  <button className="w-full px-4 py-2.5 text-sm rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                    View My Work
                  </button>
                </Link>

                <Link to="/connect">
                  <button className={`w-full px-4 py-2.5 text-sm rounded-lg border-2 font-semibold transition ${
                    isDark
                      ? "border-blue-400 text-blue-400 hover:bg-blue-950"
                      : "border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}>
                    Get in Touch
                  </button>
                </Link>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center gap-8">

            <div className={`w-60 h-60 rounded-2xl overflow-hidden border-4 ${
              isDark ? "border-blue-900/40" : "border-blue-200"
            } shadow-2xl`}>
              <img
                src="./pro.jpg"
                alt="Tagur"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ROLES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {roles.map((role, idx) => {
                const Icon = role.icon;
                return (
                  <div key={idx}
                    className={`${isDark ? "bg-blue-950 hover:bg-blue-900/80" : "bg-blue-100 hover:bg-blue-200"} flex items-center gap-3 p-4 rounded-lg`}
                  >
                    <Icon className={`text-xl ${textSecondary}`} />
                    <div>
                      <h4 className="font-bold">{role.title}</h4>
                      <p className={`text-sm ${textPrimary}`}>{role.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;

