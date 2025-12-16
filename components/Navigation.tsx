"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Languages } from "lucide-react";
import { useLanguage } from "./ThemeProvider";

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "en" : "fr";
    setLanguage(newLanguage);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-4 pb-2 px-6 sm:px-10 lg:px-14"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-lg font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("devPortfolio")}
          </motion.a>

          {/* Language & Theme Toggles */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="relative w-14 h-9 bg-gray-200 dark:bg-gray-700 rounded-lg p-1 transition-colors duration-300 flex items-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle language"
            >
              <motion.div
                className="w-7 h-7 bg-[#444] dark:bg-gray-200 rounded-md flex items-center justify-center shadow-md"
                animate={{
                  x: language === "fr" ? 0 : 22,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <Languages className="w-3.5 h-3.5 text-white dark:text-[#444]" />
              </motion.div>
              
              {/* Labels FR/EN */}
              <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                <span className={`text-[10px] font-bold transition-opacity ${
                  language === "fr" ? "opacity-0" : "opacity-70 text-gray-600 dark:text-gray-300"
                }`}>
                  FR
                </span>
                <span className={`text-[10px] font-bold transition-opacity ${
                  language === "en" ? "opacity-0" : "opacity-70 text-gray-600 dark:text-gray-300"
                }`}>
                  EN
                </span>
              </div>
            </motion.button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
