"use client";

import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/40 backdrop-blur-sm border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center flex items-center gap-2">
            Créé avec <Heart className="w-3 h-3 text-primary-500 fill-primary-500 animate-pulse" /> par un développeur passionné
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {currentYear} Portfolio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
