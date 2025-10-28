"use client";

import { motion } from "framer-motion";
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
  SiPostgresql, 
  SiMysql, 
  SiMongodb,
  SiGit, 
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
}

const skillCategories: { category: string; skills: Skill[] }[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB", description: "Bibliothèque UI" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D", description: "Framework progressif" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", description: "React framework" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", description: "Langage web" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "JS typé" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", description: "CSS utility" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB", description: "Langage polyvalent" },
      { name: "Django", icon: SiDjango, color: "#092E20", description: "Framework Python" },
      { name: "PHP", icon: SiPhp, color: "#777BB4", description: "Langage serveur" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20", description: "Framework PHP" },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", description: "SQL avancé" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", description: "Base relationnelle" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", description: "NoSQL" },
      { name: "Git", icon: SiGit, color: "#F05032", description: "Version control" },
      { name: "Docker", icon: SiDocker, color: "#2496ED", description: "Conteneurisation" },
      { name: "Linux", icon: SiLinux, color: "#FCC624", description: "Système Unix" },
      { name: "Cursor", icon: Code2 as any, color: "#000000", description: "AI Code Editor" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E", description: "Design UI/UX" },
    ],
  },
];

export function Skills() {
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

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.15 }}
              className="bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300"
            >
              <h3 className="text-base font-bold mb-4 text-gray-900 dark:text-white">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.05 }}
                    className="group relative flex flex-col items-center justify-center p-3 bg-white dark:bg-dark-900 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 cursor-pointer"
                  >
                    <skill.icon 
                      className="w-7 h-7 mb-1.5 transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: skill.color }}
                    />
                    <span className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                      {skill.description}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </motion.div>
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
                className="px-3 py-1.5 text-xs bg-gradient-to-r from-primary-500 to-purple-500 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 cursor-default"
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
