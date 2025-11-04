"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiReact, 
  SiVuedotjs, 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript,
  SiTailwindcss,
  SiPython, 
  SiDjango, 
  SiPhp, 
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiWordpress,
  SiPostgresql, 
  SiMysql, 
  SiMongodb,
  SiPrisma,
  SiGit, 
  SiGithub,
  SiVercel,
  SiDocker, 
  SiLinux, 
  SiFigma
} from "react-icons/si";
import { Code2, ChevronDown } from "lucide-react";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
  description: string;
  url: string;
}

const skillCategories: { category: string; skills: Skill[] }[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB", description: "Bibliothèque UI", url: "https://react.dev" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D", description: "Framework progressif", url: "https://vuejs.org" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", description: "React framework", url: "https://nextjs.org" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "JS typé", url: "https://www.typescriptlang.org" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", description: "CSS utility", url: "https://tailwindcss.com" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", description: "Runtime JavaScript", url: "https://nodejs.org" },
      { name: "Express.js", icon: SiExpress, color: "#000000", description: "Framework Node.js", url: "https://expressjs.com" },
      { name: "Nest.js", icon: SiNestjs, color: "#E0234E", description: "Framework TypeScript", url: "https://nestjs.com" },
      { name: "Django", icon: SiDjango, color: "#092E20", description: "Framework Python", url: "https://www.djangoproject.com" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20", description: "Framework PHP", url: "https://laravel.com" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", description: "SQL avancé", url: "https://www.postgresql.org" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", description: "Base relationnelle", url: "https://www.mysql.com" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", description: "NoSQL", url: "https://www.mongodb.com" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748", description: "ORM moderne", url: "https://www.prisma.io" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032", description: "Version control", url: "https://git-scm.com" },
      { name: "GitHub", icon: SiGithub, color: "currentColor", description: "Plateforme Git", url: "https://github.com" },
      { name: "Vercel", icon: SiVercel, color: "#000000", description: "Déploiement", url: "https://vercel.com" },
      { name: "Docker", icon: SiDocker, color: "#2496ED", description: "Conténeurisation", url: "https://www.docker.com" },
      { name: "Linux", icon: SiLinux, color: "#FCC624", description: "Système Unix", url: "https://www.linux.org" },
      { name: "WordPress", icon: SiWordpress, color: "#21759B", description: "CMS populaire", url: "https://wordpress.org" },
      { name: "Cursor", icon: Code2 as any, color: "#000000", description: "AI Code Editor", url: "https://cursor.sh" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E", description: "Design UI/UX", url: "https://www.figma.com" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-8 px-6 sm:px-10 lg:px-14">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-signature)' }}>
            Je <span className="gradient-text">dev</span> en :
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stack technique moderne pour des solutions web performantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.15 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {category.category}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group relative flex items-center gap-2 px-3 py-2 vintage-card rounded-lg hover:border-[#444] dark:hover:border-gray-200 transition-all duration-300 cursor-pointer w-full"
                  >
                    <skill.icon 
                      className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: skill.color }}
                    />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-base font-bold text-center mb-4 text-gray-900 dark:text-white">
            Compétences transversales
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "REST APIs",
              "Responsive Design",
              "Agile/Scrum",
              "Testing",
              "CI/CD",
              "Clean Code",
              "Problem Solving",
              "Team Work",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 text-xs bg-[#444] dark:bg-gray-200 text-white dark:text-[#444] font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
