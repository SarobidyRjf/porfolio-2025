"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle, MessageSquare } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6 sm:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-sm sm:text-base text-primary-500 font-semibold mb-2">
                👋 Salut, moi c&apos;est
              </h2>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                <span className="gradient-text">AI Coder</span>
                <span className="text-gray-900 dark:text-white"> & </span>
                <span className="text-gray-900 dark:text-white">Full Stack Dev</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                &quot;Le code est ma langue, l&apos;IA mon co-pilote.&quot;
              </span>
              <br /><br />
              Développeur junior polyvalent et autonome, je ne suis pas qu&apos;un simple codeur — 
              je suis un <span className="text-primary-500 font-semibold">AI Coder</span> qui maîtrise 
              l&apos;art de fusionner intelligence artificielle et développement moderne. 
              Dans cette ère où les rôles évoluent, je m&apos;adapte, j&apos;innove et je crée 
              des solutions qui font la différence.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://github.com/votre-username"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Github className="w-4 h-4" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </a>

              <a
                href="https://linkedin.com/in/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Linkedin className="w-4 h-4" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://discord.com/users/votre-id"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Discord
                </span>
              </a>

              <a
                href="mailto:votre.email@example.com"
                className="group relative p-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Mail className="w-4 h-4" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Email
                </span>
              </a>

              <a
                href="https://wa.me/33612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-400 hover:to-gray-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  WhatsApp
                </span>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#projects"
                className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 border-2 border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-400 hover:text-white text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Me contacter
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-xs mx-auto">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full animate-gradient blur-2xl opacity-30"></div>
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-dark-800 shadow-xl animate-float">
                <Image
                  src="/nika.png"
                  alt="Profile - Luffy Gear 5 Nika"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600 rounded-full blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
            <span className="text-xs font-medium">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
