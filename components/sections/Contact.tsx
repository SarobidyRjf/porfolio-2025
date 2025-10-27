"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log("Form submitted:", formData);
    alert("Message envoyé ! Je vous répondrai bientôt.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-8 sm:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Parlons de votre <span className="gradient-text">projet</span>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Disponible pour collaborations et opportunités professionnelles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Restons connectés
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Ouvert aux opportunités, collaborations et discussions techniques.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-4 bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="p-2.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                  <a
                    href="mailto:votre.email@example.com"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    votre.email@example.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-4 bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="p-2.5 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Téléphone</h4>
                  <a
                    href="tel:+33612345678"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    +33 6 12 34 56 78
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4 p-4 bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="p-2.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Localisation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Paris, France
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl text-white"
            >
              <h4 className="font-bold text-lg mb-2">Disponibilité</h4>
              <p className="text-sm text-white/90">
                Actuellement disponible pour des missions freelance et des opportunités d&apos;emploi en CDI.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm bg-white dark:bg-dark-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm bg-white dark:bg-dark-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="votre.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm bg-white dark:bg-dark-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2.5 text-sm bg-white dark:bg-dark-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
