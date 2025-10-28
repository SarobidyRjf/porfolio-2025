"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MessageSquare } from "lucide-react";

export function Contact() {

  return (
    <section id="contact" className="py-16 px-6 sm:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Parlons de votre <span className="gradient-text">projet</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Disponible pour collaborations et opportunités professionnelles
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
              Restons connectés
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Ouvert aux opportunités, collaborations et discussions techniques.
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Email */}
            <motion.a
              href="mailto:votre.email@example.com"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ delay: 0.1 }}
              className="group flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-500"
            >
              <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg mb-2 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Email</span>
            </motion.a>

            {/* Discord */}
            <motion.a
              href="https://discord.com/users/votre-id"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ delay: 0.2 }}
              className="group flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#5865F2]"
            >
              <div className="p-3 bg-[#5865F2] rounded-lg mb-2 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Discord</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/votre-profil"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ delay: 0.3 }}
              className="group flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#0A66C2]"
            >
              <div className="p-3 bg-[#0A66C2] rounded-lg mb-2 group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">LinkedIn</span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/votre-username"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ delay: 0.4 }}
              className="group flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gray-700 dark:hover:border-gray-400"
            >
              <div className="p-3 bg-gray-800 dark:bg-gray-700 rounded-lg mb-2 group-hover:scale-110 transition-transform">
                <Github className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">GitHub</span>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+33612345678"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ delay: 0.5 }}
              className="group flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500"
            >
              <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg mb-2 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Téléphone</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
