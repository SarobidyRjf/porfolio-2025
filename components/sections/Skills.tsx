"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 85, color: "from-blue-400 to-blue-600" },
      { name: "Vue.js", level: 80, color: "from-green-400 to-green-600" },
      { name: "Next.js", level: 75, color: "from-gray-700 to-gray-900" },
      { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
      { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-cyan-600" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", level: 85, color: "from-blue-500 to-yellow-500" },
      { name: "Django", level: 80, color: "from-green-600 to-green-800" },
      { name: "PHP", level: 75, color: "from-purple-500 to-purple-700" },
      { name: "Laravel", level: 75, color: "from-red-500 to-red-700" },
    ],
  },
  {
    category: "Bases de données",
    skills: [
      { name: "PostgreSQL", level: 80, color: "from-blue-600 to-blue-800" },
      { name: "MySQL", level: 85, color: "from-orange-500 to-orange-700" },
      { name: "MongoDB", level: 75, color: "from-green-500 to-green-700" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions web complètes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-primary-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Autres compétences
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Git & GitHub",
              "REST APIs",
              "Responsive Design",
              "Agile/Scrum",
              "Testing",
              "CI/CD",
              "Docker",
              "Linux",
              "VS Code",
              "Figma",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-medium rounded-full shadow-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 cursor-default"
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
