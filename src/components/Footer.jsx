import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-6 mt-10">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Tagur Kethavath</h2>
          <p className="text-xs text-gray-400 mt-1 italic">
            "When something is important enough, you do it even if the odds are not in your favor."
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/tagur18" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/tagur-kethavath18/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/tagur_k/" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-400 transition duration-300" />
          </a>
          <a href="https://x.com/tagur_K" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-blue-300 transition duration-300" />
          </a>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-xs mt-3 border-t border-gray-800 pt-2">
        © {new Date().getFullYear()} Tagur. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;