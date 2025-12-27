"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
  date: string;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  github,
  image,
  date,
}: ProjectCardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-4 rounded-lg shadow-md">
      <Image
        width={400}
        height={400}
        src={image}
        alt={title}
        className="w-full h-36 object-cover rounded"
      />
      <p className="text-sm text-gray-500">{date}</p>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="flex flex-wrap mt-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-gray-200 text-gray-600 px-2 py-1 rounded mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
      <a href={github} target="_blank" className="text-blue-500">
        GitHub
      </a>
    </motion.div>
  );
};
