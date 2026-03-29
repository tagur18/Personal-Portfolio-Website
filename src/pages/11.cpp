// import React from "react";
// import {
//   Mail,
//   Phone,
//   GraduationCap,
//   GitHub,
//   Linkedin,
//   Instagram,
//   MessageCircle,
//   Twitter,
//   User,
// } from "lucide-react";
// import { useTheme } from "../context/Theme/ThemeContext";

// const Connect = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   const contacts = [
//     {
//       icon: <Mail className="w-5 h-5" />,
//       label: "Email",
//       value: "aadarshshrivastav01@gmail.com",
//     },
//     {
//       icon: <Mail className="w-5 h-5" />,
//       label: "Alternate Email",
//       value: "adarshrivastav.4545@gmail.com",
//     },
//     {
//       icon: <Phone className="w-5 h-5" />,
//       label: "Phone",
//       value: "7620457148",
//     },
//     {
//       icon: <GraduationCap className="w-5 h-5" />,
//       label: "Education",
//       value: "B.Tech in Computer Engineering",
//     },
//   ];

//   const socials = [
//     {
//       icon: <GitHub className="w-5 h-5" />,
//       label: "GitHub",
//       link: "https://github.com/Aadarsh-max",
//     },
//     {
//       icon: <Linkedin className="w-5 h-5" />,
//       label: "LinkedIn",
//       link: "https://www.linkedin.com/in/aadarsh-shrivastav-686722325",
//     },
//     {
//       icon: <Instagram className="w-5 h-5" />,
//       label: "Instagram",
//       link: "https://instagram.com/hii_aadarshhh",
//     },
//     {
//       icon: <MessageCircle className="w-5 h-5" />,
//       label: "WhatsApp",
//       link: "https://wa.me/7620457148",
//     },
//     {
//       icon: <Twitter className="w-5 h-5" />,
//       label: "X",
//       link: "https://x.com/aaddyshrivastav",
//     },
   
//   ];

//   return (
//     <div
//       className={`min-h-screen flex items-center justify-center px-6 py-12 pt-24 transition-colors duration-500 ${
//         isDark
//           ? "bg-black text-gray-300"
//           : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-700"
//       }`}
//     >
//       <div
//         className={`max-w-4xl w-full rounded-3xl p-8 backdrop-blur-sm shadow-2xl border transition-all duration-500 ${
//           isDark
//             ? "bg-blue-950/40 border-blue-900/40"
//             : "bg-white/90 border-blue-100"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex flex-col items-center mb-8">
//           <div className="relative mb-4">
//             <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-1">
//               <div
//                 className={`w-full h-full rounded-2xl flex items-center justify-center overflow-hidden ${
//                   isDark ? "bg-black" : "bg-white"
//                 }`}
//               >
//                 {/* Default icon */}
//                 <User className="w-16 h-16 text-blue-600" />

//                 {/* ✅ FIXED IMAGE PATH */}
//                 <img
//                   src="/pro1.jpg"
//                   alt="Profile"
//                   className="absolute inset-0 object-cover w-full h-full rounded-2xl opacity-90"
//                   onError={(e) => (e.target.style.display = "none")}
//                 />
//               </div>
//             </div>
//           </div>

//           <h1
//             className={`text-4xl font-bold mb-3 text-center ${
//               isDark ? "text-gray-200" : "text-gray-800"
//             }`}
//           >
//             Connect with{" "}
//             <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
//               Aadarsh Shrivastav
//             </span>
//           </h1>

//           <p
//             className={`text-lg ${
//               isDark ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             Age: 19 Years
//           </p>
//         </div>

//         {/* Contact Info */}
//         <div className="grid gap-4 mb-8">
//           {contacts.map((item, i) => (
//             <div
//               key={i}
//               className={`flex items-center gap-4 rounded-xl px-5 py-4 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
//                 isDark
//                   ? "bg-blue-950/40 border-blue-900/40"
//                   : "bg-white/80 border-blue-100"
//               }`}
//             >
//               <div className="text-blue-600">{item.icon}</div>
//               <div>
//                 <p className="text-sm text-gray-500">{item.label}</p>
//                 <p className="font-semibold">{item.value}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Social Links */}
//         <h2 className="text-2xl font-semibold mb-6 text-center">
//           Find Me On
//         </h2>

//         <div className="grid sm:grid-cols-2 gap-4">
//           {socials.map((social, i) => (
//             <a
//               key={i}
//               href={social.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`flex items-center gap-4 rounded-xl px-5 py-4 border transition-all duration-300 hover:-translate-y-1 ${
//                 isDark
//                   ? "bg-blue-950/40 border-blue-900/40 hover:bg-blue-950"
//                   : "bg-white/80 border-blue-100 hover:bg-blue-50"
//               }`}
//             >
//               {social.icon}
//               <span>{social.label}</span>
//             </a>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
//           <a
//             href="mailto:aadarshshrivastav01@gmail.com"
//             className="px-8 py-4 rounded-xl bg-blue-600 text-white text-center hover:scale-105 transition"
//           >
//             <Mail className="inline w-5 h-5 mr-2" />
//             Send Email
//           </a>

//           <a
//             href="https://wa.me/7620457148"
//             className="px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 text-center hover:bg-green-500 hover:text-white transition"
//           >
//             <MessageCircle className="inline w-5 h-5 mr-2" />
//             WhatsApp
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Connect;