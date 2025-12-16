"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Lightbulb, Zap } from "lucide-react";
import { useLanguage } from "../ThemeProvider";

const features = [
  {
    icon: Brain,
    titleKey: "aiPowered" as const,
    descKey: "aiPoweredDesc" as const,
  },
  {
    icon: Code2,
    titleKey: "versatile" as const,
    descKey: "versatileDesc" as const,
  },
  {
    icon: Zap,
    titleKey: "autonomous" as const,
    descKey: "autonomousDesc" as const,
  },
  {
    icon: Lightbulb,
    titleKey: "adaptable" as const,
    descKey: "adaptableDesc" as const,
  },
];

export function About() {
  const { t } = useLanguage();
  
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
            {t("aboutTitle")} <span className="gradient-text">{t("aboutTitleHighlight")}</span> ?
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("aboutSubtitle")}
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
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'var(--font-quicksand)' }}>
              {t("aboutText1")}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'var(--font-quicksand)' }}>
              {t("aboutText2")}
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
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-[10px] text-gray-600 dark:text-gray-400 leading-tight">
                    {t(feature.descKey)}
                  </p>
                </motion.div>
              ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}
