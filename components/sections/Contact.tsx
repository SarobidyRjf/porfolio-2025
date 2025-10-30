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
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
              Restons connectés
            </h3>
            <a 
              href="mailto:votre.email@example.com"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline transition-colors"
            >
              votre.email@example.com
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
