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
    <section id="about" className="py-16 px-6 sm:px-10 lg:px-14 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Qui suis-je <span className="gradient-text">vraiment</span> ?
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                Je suis un <strong className="text-primary-500">AI Coder</strong> et 
                <strong className="text-primary-500"> développeur Full Stack junior</strong> qui 
                ne se contente pas d'écrire du code — je conçois des expériences. 
                <span className="font-semibold"> Polyvalent</span>, je navigue aisément entre 
                React, Vue.js, Python, Django, PHP et Laravel.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                <span className="font-semibold">Autonome</span>, je prends en charge des projets 
                de bout en bout, de la conception à la mise en production. Dans cette ère où 
                les rôles se multiplient et se transforment, je m'adapte rapidement et 
                j'embrasse les nouvelles technologies avec enthousiasme.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
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
                className="p-4 vintage-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
