"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-3 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:rotate-12 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun className="absolute inset-0 w-6 h-6 text-white rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute inset-0 w-6 h-6 text-white rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
    </button>
  );
}
