"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plateforme e-commerce complète avec panier, paiement Stripe, gestion des stocks et tableau de bord admin. Interface moderne et responsive.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com/votre-username/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Task Management App",
    description: "Application de gestion de tâches collaborative avec drag & drop, notifications en temps réel, et système de permissions.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Django", "WebSocket", "MongoDB"],
    github: "https://github.com/votre-username/task-manager",
    demo: "https://task-manager-demo.vercel.app",
  },
  {
    title: "Social Media Dashboard",
    description: "Tableau de bord analytique pour réseaux sociaux avec graphiques interactifs, statistiques en temps réel et export de données.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "Python", "FastAPI", "Redis"],
    github: "https://github.com/votre-username/social-dashboard",
    demo: "https://social-dashboard-demo.vercel.app",
  },
  {
    title: "Blog CMS",
    description: "Système de gestion de contenu pour blog avec éditeur WYSIWYG, SEO optimisé, commentaires et système de tags.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    tags: ["Next.js", "Laravel", "MySQL", "TailwindCSS"],
    github: "https://github.com/votre-username/blog-cms",
    demo: "https://blog-cms-demo.vercel.app",
  },
  {
    title: "Real Estate Platform",
    description: "Plateforme immobilière avec recherche avancée, carte interactive, visites virtuelles 360° et système de réservation.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["React", "Django", "PostgreSQL", "Mapbox", "AWS"],
    github: "https://github.com/votre-username/real-estate",
    demo: "https://real-estate-demo.vercel.app",
  },
  {
    title: "Fitness Tracker",
    description: "Application de suivi fitness avec plans d'entraînement personnalisés, suivi nutritionnel et graphiques de progression.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    tags: ["Vue.js", "PHP", "Laravel", "Chart.js", "MySQL"],
    github: "https://github.com/votre-username/fitness-tracker",
    demo: "https://fitness-tracker-demo.vercel.app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 px-6 sm:px-10 lg:px-14 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Ce que j&apos;ai <span className="gradient-text">créé</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Projets qui illustrent ma maîtrise technique et ma créativité
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white dark:bg-dark-800 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white dark:bg-dark-800 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-bold mb-1.5 text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/votre-username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/30"
          >
            <Github className="w-4 h-4" />
            Voir plus sur GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
