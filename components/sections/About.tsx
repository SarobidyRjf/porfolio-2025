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
    <section id="about" className="py-8 px-6 sm:px-10 lg:px-14">
      <div className="max-w-4xl mx-auto">
        {/* Titre en haut */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-signature)' }}>
            Qui suis-je <span className="gradient-text">vraiment</span> ?
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Plus qu&apos;un développeur, un créateur de solutions
          </p>
        </motion.div>

        {/* Contenu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Je suis un <strong className="text-[#444] dark:text-gray-200">AI Coder</strong> et 
              <strong className="text-[#444] dark:text-gray-200"> développeur Full Stack junior</strong> qui 
              ne se contente pas d'écrire du code — je conçois des expériences. 
              <span className="font-semibold"> Polyvalent</span>, je navigue aisément entre 
              React, Vue.js, Python, Django, PHP et Laravel.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              <span className="font-semibold">Autonome</span>, je prends en charge des projets 
              de bout en bout, de la conception à la mise en production. Dans cette ère où 
              les rôles se multiplient et se transforment, je m'adapte rapidement et 
              j'embrasse les nouvelles technologies avec enthousiasme.
            </p>
            
            {/* Features en grille compacte */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 vintage-card rounded-lg hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-7 h-7 bg-[#444] dark:bg-gray-200 rounded-lg flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-3.5 h-3.5 text-white dark:text-[#444]" />
                  </div>
                  <h3 className="text-xs font-semibold mb-1 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] text-gray-600 dark:text-gray-400 leading-tight">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}
