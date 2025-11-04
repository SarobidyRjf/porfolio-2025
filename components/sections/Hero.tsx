"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="min-h-[60vh] flex items-center justify-center pt-8 pb-8 px-6 sm:px-10 lg:px-14">
      <div className="max-w-4xl mx-auto w-full">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6"
        >
          {/* Profile Image - Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#444] dark:border-gray-200 shadow-lg">
                <Image
                  src="/nika.png"
                  alt="Precieux"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="96px"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content - Right */}
          <div className="flex-1 space-y-3 text-center sm:text-left">
            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-white dark:text-white mb-1" style={{ fontFamily: 'var(--font-signature)' }}>
                Precieux
              </h1>
              <h2 className="text-base sm:text-lg text-white dark:text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                AI Coder & Full Stack Dev
              </h2>
            </motion.div>

            {/* Bio Description */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Développeur junior polyvalent et autonome, je ne suis pas qu&apos;un simple codeur — je suis un AI Coder qui maîtrise l&apos;art de fusionner intelligence artificielle et développement moderne.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 justify-center sm:justify-start pt-2"
            >
              <a
                href="https://linkedin.com/in/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#444] dark:bg-gray-200 hover:bg-[#555] dark:hover:bg-gray-300 text-white dark:text-[#444] text-xs font-medium rounded-md transition-all duration-200"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/votre-username"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#444] dark:bg-gray-200 hover:bg-[#555] dark:hover:bg-gray-300 text-white dark:text-[#444] text-xs font-medium rounded-md transition-all duration-200"
              >
                GitHub
              </a>

              <a
                href="mailto:votre.email@example.com"
                className="px-3 py-1.5 bg-[#444] dark:bg-gray-200 hover:bg-[#555] dark:hover:bg-gray-300 text-white dark:text-[#444] text-xs font-medium rounded-md transition-all duration-200"
              >
                Email
              </a>

              <a
                href="https://wa.me/33612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#444] dark:bg-gray-200 hover:bg-[#555] dark:hover:bg-gray-300 text-white dark:text-[#444] text-xs font-medium rounded-md transition-all duration-200"
              >
                WhatsApp
              </a>

              <a
                href="https://discord.com/users/votre-id"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#444] dark:bg-gray-200 hover:bg-[#555] dark:hover:bg-gray-300 text-white dark:text-[#444] text-xs font-medium rounded-md transition-all duration-200"
              >
                Discord
              </a>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
