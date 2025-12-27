"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/personalInfo";
import Image from "next/image";

export const AboutHeader = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-beige rounded-full text-center flex flex-col gap-4 max-w-4xl mx-auto"
    >
      <Image
        src="/images/avatar.png"
        alt="Nguyen Khanh Duy Avatar"
        width={140}
        height={140}
        priority
        className="rounded-full mx-auto object-cover"
      />
      <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
      <p className="text-lg">{personalInfo.title}</p>
      <p>{personalInfo.bio}</p> {/* Sáng tạo thêm: Thêm interests từ CV */}
      <p>Interests: Learning new technologies, Running & walking, Music.</p>
      {/* Social icons */}
    </motion.section>
  );
};
