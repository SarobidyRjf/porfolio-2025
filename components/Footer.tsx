"use client";

import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800 py-3 px-6 sm:px-10 lg:px-14">
      <div className="max-w-4xl mx-auto">
        <p className="text-[10px] text-center text-gray-500 dark:text-gray-500">
          © {currentYear} Portfolio. Créé avec <Heart className="w-2.5 h-2.5 inline text-primary-500 fill-primary-500" /> par un développeur passionné
        </p>
      </div>
    </footer>
  );
}
