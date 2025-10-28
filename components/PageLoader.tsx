"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className={`fixed inset-0 z-[9999] flex items-center justify-center transition-colors duration-300 ${
            mounted && (resolvedTheme === 'dark' || (!resolvedTheme && theme === 'dark'))
              ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-black'
              : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
          }`}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full ${
                  mounted && (resolvedTheme === 'dark' || (!resolvedTheme && theme === 'dark'))
                    ? 'bg-primary-500'
                    : 'bg-primary-400'
                }`}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0,
                }}
                animate={{
                  y: [null, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main loader content */}
          <div className="relative z-10 text-center space-y-8">
            {/* Logo/Icon animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative mx-auto w-24 h-24"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className={`absolute inset-0 rounded-full border-4 border-transparent ${
                  mounted && (resolvedTheme === 'dark' || (!resolvedTheme && theme === 'dark'))
                    ? 'border-t-primary-500 border-r-purple-500'
                    : 'border-t-primary-600 border-r-purple-600'
                }`}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className={`absolute inset-2 rounded-full border-4 border-transparent ${
                  mounted && (resolvedTheme === 'dark' || (!resolvedTheme && theme === 'dark'))
                    ? 'border-b-pink-500 border-l-primary-400'
                    : 'border-b-pink-600 border-l-primary-500'
                }`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl font-bold gradient-text"
                >
                  &lt;/&gt;
                </motion.span>
              </div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <h2 className={`text-xl font-bold ${
                mounted && (resolvedTheme === 'dark' || (!resolvedTheme && theme === 'dark'))
                  ? 'text-white'
                  : 'text-gray-900'
              }`}>
                Chargement de l&apos;expérience
              </h2>
              <p className={`text-xs ${
                mounted && (resolvedTheme === 'dark' || (!resolvedTheme && theme === 'dark'))
                  ? 'text-gray-400'
                  : 'text-gray-600'
              }`}>
                Préparation du portfolio...
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 mx-auto space-y-2">
              <div className={`h-1.5 rounded-full overflow-hidden ${
                mounted && (resolvedTheme === 'dark' || (!resolvedTheme && theme === 'dark'))
                  ? 'bg-gray-800'
                  : 'bg-gray-300'
              }`}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500"
                />
              </div>
              <motion.p
                key={progress}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-xs text-right ${
                  mounted && (resolvedTheme === 'dark' || (!resolvedTheme && theme === 'dark'))
                    ? 'text-gray-500'
                    : 'text-gray-600'
                }`}
              >
                {progress}%
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
