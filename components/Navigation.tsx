"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
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
            &lt;DevPortfolio /&gt;
          </motion.a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
