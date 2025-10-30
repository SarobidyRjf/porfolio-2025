"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
import { Code2 } from "lucide-react";
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
  const [openCategories, setOpenCategories] = useState<number[]>([0, 1, 2, 3]);

  const toggleCategory = (index: number) => {
    setOpenCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="skills" className="py-16 px-6 sm:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Je <span className="gradient-text">dev</span> en :
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stack technique moderne pour des solutions web performantes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const isOpen = openCategories.includes(categoryIndex);
            
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.15 }}
                className="vintage-card rounded-xl p-4 hover:border-primary-500 transition-all duration-300 relative"
                style={{ zIndex: 1 }}
              >
                <button
                  onClick={() => toggleCategory(categoryIndex)}
                  className="w-full flex items-center justify-between mb-4 text-left group"
                >
                  <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                    {category.category}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`category-${categoryIndex}`}
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 0 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ 
                        duration: 0.25,
                        ease: [0.4, 0.0, 0.2, 1]
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.05 }}
                    className="group relative flex flex-col items-center justify-center p-3 vintage-card rounded-lg hover:border-primary-500 transition-all duration-300 cursor-pointer hover:z-[10000]"
                  >
                    <skill.icon 
                      className="w-5 h-5 mb-1 transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: skill.color }}
                    />
                    <span className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-800 text-white px-3 py-1.5 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[10001] shadow-xl">
                      {skill.description}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </motion.a>
                ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
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
                className="px-3 py-1.5 text-xs bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-default"
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
