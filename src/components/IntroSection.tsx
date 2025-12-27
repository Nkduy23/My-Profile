"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Facebook, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";

export const IntroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center min-h-screen flex flex-col justify-center items-center gap-4"
    >
      <h1 className="text-6xl font-bold">
        {personalInfo.name}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.5 }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      </h1>
      <p className="text-xl text-gray-500 mt-4">{personalInfo.bio}</p>

      {/* Social icons */}
      <div className="flex justify-center space-x-6 mt-6">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href={personalInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-pink-600 transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a>
        <a
          href={personalInfo.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Facebook"
        >
          <Facebook size={24} />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-700 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </motion.section>
  );
};
