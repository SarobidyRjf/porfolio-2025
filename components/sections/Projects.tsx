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
    <section id="projects" className="py-8 px-6 sm:px-10 lg:px-14">
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
            Ce que j&apos;ai <span className="gradient-text">créé</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Projets qui illustrent ma maîtrise technique et ma créativité
          </p>
        </motion.div>

        {/* Liste de projets */}
        <div className="space-y-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block vintage-card rounded-lg p-3 hover:shadow-md transition-all duration-300 hover:border-[#444] dark:hover:border-gray-200"
            >
              <div className="flex items-start gap-3">
                {/* Image miniature */}
                <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-[#444] dark:group-hover:text-gray-200 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-1.5 flex-shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 hover:text-[#444] dark:hover:text-gray-200 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 hover:text-[#444] dark:hover:text-gray-200 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 text-[9px] font-medium bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
