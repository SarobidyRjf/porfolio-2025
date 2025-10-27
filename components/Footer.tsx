"use client";

import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-600 dark:text-gray-400 text-center flex items-center gap-2">
            Créé avec <Heart className="w-4 h-4 text-primary-500 fill-primary-500 animate-pulse" /> par un développeur passionné
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {currentYear} Portfolio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
