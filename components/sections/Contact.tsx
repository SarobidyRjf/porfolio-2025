"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MessageSquare } from "lucide-react";

export function Contact() {

  return (
    <section id="contact" className="py-8 px-6 sm:px-10 lg:px-14">
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
            <span className="gradient-text">Contact</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Restons connectés
          </p>
        </motion.div>

        {/* Contenu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <a 
            href="mailto:votre.email@example.com"
            className="text-base text-[#444] hover:text-[#555] dark:text-gray-200 dark:hover:text-gray-300 underline transition-colors"
          >
            votre.email@example.com
          </a>
        </motion.div>
      </div>
    </section>
  );  
}
