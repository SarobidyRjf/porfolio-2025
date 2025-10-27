"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Lightbulb, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered",
    description: "J'intègre l'IA dans mon workflow pour maximiser productivité et qualité du code.",
  },
  {
    icon: Code2,
    title: "Polyvalent",
    description: "Full Stack : Frontend, Backend, Databases. Je maîtrise toute la chaîne de développement.",
  },
  {
    icon: Zap,
    title: "Autonome",
    description: "Capable de gérer des projets de A à Z avec initiative et sens des responsabilités.",
  },
  {
    icon: Lightbulb,
    title: "Adaptable",
    description: "Dans une ère de rôles multiples, je m'adapte rapidement aux nouvelles technologies.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-8 sm:px-12 lg:px-16 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Qui suis-je <span className="gradient-text">vraiment</span> ?
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Plus qu&apos;un développeur, un créateur de solutions
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
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                Je suis un <strong className="text-primary-500">AI Coder</strong> et 
                <strong className="text-primary-500"> développeur Full Stack junior</strong> qui 
                ne se contente pas d'écrire du code — je conçois des expériences. 
                <span className="font-semibold"> Polyvalent</span>, je navigue aisément entre 
                React, Vue.js, Python, Django, PHP et Laravel.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                <span className="font-semibold">Autonome</span>, je prends en charge des projets 
                de bout en bout, de la conception à la mise en production. Dans cette ère où 
                les rôles se multiplient et se transforment, je m'adapte rapidement et 
                j'embrasse les nouvelles technologies avec enthousiasme.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                Mon approche ? <span className="italic text-primary-500">
                &quot;Fusionner l'intelligence humaine avec la puissance de l'IA&quot;</span> pour 
                créer des solutions qui ne sont pas seulement fonctionnelles, mais 
                <strong> exceptionnelles</strong>. Je ne suis pas qu'un codeur — je suis un 
                <strong className="text-primary-500"> solutionneur de problèmes</strong> qui 
                transforme les défis en opportunités.
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
                className="p-5 bg-white dark:bg-dark-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-11 h-11 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold mb-2 text-gray-900 dark:text-white">
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
              className="text-center p-5 bg-white dark:bg-dark-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl font-bold gradient-text mb-2">
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
