"use client";

import { Moon, Sun, Monitor, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.theme-toggle-wrapper')) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  if (!mounted) {
    return null;
  }

  const themeOptions = [
    { value: 'light', label: 'Clair', icon: Sun },
    { value: 'dark', label: 'Sombre', icon: Moon },
    { value: 'system', label: 'Système', icon: Monitor },
  ];

  const currentTheme = themeOptions.find(opt => opt.value === theme) || themeOptions[2];
  const CurrentIcon = currentTheme.icon;

  return (
    <div className="relative theme-toggle-wrapper">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2.5 rounded-lg bg-[#444] dark:bg-gray-200 hover:bg-[#555] dark:hover:bg-gray-300 transition-all duration-300 hover:scale-105 group flex items-center gap-1.5 shadow-lg"
        aria-label="Toggle theme menu"
      >
        <CurrentIcon className="w-4 h-4 text-white dark:text-[#444]" />
        <ChevronDown className={`w-3 h-3 text-white dark:text-[#444] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-36 bg-white dark:bg-dark-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            {themeOptions.map((option) => {
              const Icon = option.icon;
              const isActive = theme === option.value;
              
              return (
                <button
                  key={option.value}
                  onClick={() => {
                    setTheme(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? 'bg-gray-100 dark:bg-gray-700 text-[#444] dark:text-gray-200'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{option.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-theme"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-[#444] dark:bg-gray-200"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
