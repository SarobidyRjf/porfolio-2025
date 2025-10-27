"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Code de qualité",
    description: "J'écris du code propre, maintenable et optimisé en suivant les meilleures pratiques de l'industrie.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Création d'applications rapides et performantes avec une attention particulière à l'expérience utilisateur.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Travail d'équipe efficace avec une communication claire et une approche agile du développement.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Toujours à l'affût des dernières technologies pour proposer des solutions modernes et innovantes.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            À propos de <span className="gradient-text">moi</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Développeur passionné avec une soif d&apos;apprendre et de créer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                En tant que <strong className="text-primary-500">développeur Full Stack junior</strong>, 
                je suis passionné par la création d&apos;applications web modernes et performantes. 
                Mon parcours m&apos;a permis de maîtriser un large éventail de technologies, 
                du front-end au back-end, en passant par la gestion de bases de données.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Je me spécialise dans le développement d&apos;interfaces utilisateur réactives avec 
                <strong className="text-primary-500"> React</strong> et 
                <strong className="text-primary-500"> Vue.js</strong>, 
                et dans la création d&apos;APIs robustes avec 
                <strong className="text-primary-500"> Python/Django</strong> et 
                <strong className="text-primary-500"> PHP/Laravel</strong>.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Mon objectif est de continuer à développer mes compétences tout en contribuant 
                à des projets innovants qui ont un impact réel. Je suis constamment à la recherche 
                de nouveaux défis et d&apos;opportunités d&apos;apprentissage.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "10+", label: "Technologies" },
            { number: "15+", label: "Projets" },
            { number: "100%", label: "Engagement" },
            { number: "24/7", label: "Disponibilité" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
