"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-8 sm:px-12 lg:px-16">
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
              <h2 className="text-base sm:text-lg text-primary-500 font-semibold mb-2">
                👋 Salut, moi c&apos;est
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text">AI Coder</span>
                <span className="text-gray-900 dark:text-white"> & </span>
                <span className="text-gray-900 dark:text-white">Full Stack Dev</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
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
                className="group relative p-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Github className="w-5 h-5" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </a>

              <a
                href="https://linkedin.com/in/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
              </a>

              <a
                href="mailto:votre.email@example.com"
                className="group relative p-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Email
                </span>
              </a>

              <a
                href="https://wa.me/33612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
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
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/30"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white dark:bg-dark-800 border-2 border-primary-500 text-primary-500 dark:text-primary-400 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-primary-50 dark:hover:bg-dark-700"
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
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full animate-gradient blur-2xl opacity-30"></div>
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-dark-800 shadow-xl animate-float">
                <Image
                  src="/luffy.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
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
          <a href="#about" className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
            <span className="text-sm font-medium">Scroll</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
