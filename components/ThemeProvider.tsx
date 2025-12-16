"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// ============= TRANSLATIONS =============
export const translations = {
  fr: {
    devPortfolio: "<DevPortfolio />",
    name: "Sarobidy",
    title: "AI Coder & Full Stack Dev",
    bio: "Développeur junior polyvalent et autonome, je ne suis pas qu'un simple codeur — je suis un AI Coder qui maîtrise l'art de fusionner intelligence artificielle et développement moderne.",
    linkedin: "LinkedIn",
    github: "GitHub",
    email: "Email",
    whatsapp: "WhatsApp",
    discord: "Discord",
    aboutTitle: "Qui suis-je",
    aboutTitleHighlight: "vraiment",
    aboutSubtitle: "Plus qu'un développeur, un créateur de solutions",
    aboutText1: "Je suis un AI Coder et développeur Full Stack junior qui ne se contente pas d'écrire du code — je conçois des expériences. Polyvalent, je navigue aisément entre React, Vue.js, Python, Django, PHP et Laravel.",
    aboutText2: "Autonome, je prends en charge des projets de bout en bout, de la conception à la mise en production. Dans cette ère où les rôles se multiplient et se transforment, je m'adapte rapidement et j'embrasse les nouvelles technologies avec enthousiasme.",
    aiPowered: "AI-Powered",
    aiPoweredDesc: "J'intègre l'IA dans mon workflow pour maximiser productivité et qualité du code.",
    versatile: "Polyvalent",
    versatileDesc: "Full Stack : Frontend, Backend, Databases. Je maîtrise toute la chaîne de développement.",
    autonomous: "Autonome",
    autonomousDesc: "Capable de gérer des projets de A à Z avec initiative et sens des responsabilités.",
    adaptable: "Adaptable",
    adaptableDesc: "Dans une ère de rôles multiples, je m'adapte rapidement aux nouvelles technologies.",
    skillsTitle: "Je",
    skillsTitleHighlight: "dev",
    skillsTitleEnd: "en :",
    skillsSubtitle: "Stack technique moderne pour des solutions web performantes",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    tools: "Tools",
    softSkills: "Compétences transversales",
    reactDesc: "Bibliothèque UI",
    vueDesc: "Framework progressif",
    nextDesc: "React framework",
    tsDesc: "JS typé",
    tailwindDesc: "CSS utility",
    nodeDesc: "Runtime JavaScript",
    expressDesc: "Framework Node.js",
    nestDesc: "Framework TypeScript",
    djangoDesc: "Framework Python",
    laravelDesc: "Framework PHP",
    postgresDesc: "SQL avancé",
    mysqlDesc: "Base relationnelle",
    mongoDesc: "NoSQL",
    prismaDesc: "ORM moderne",
    gitDesc: "Version control",
    githubDesc: "Plateforme Git",
    vercelDesc: "Déploiement",
    dockerDesc: "Conteneurisation",
    linuxDesc: "Système Unix",
    wordpressDesc: "CMS populaire",
    cursorDesc: "AI Code Editor",
    figmaDesc: "Design UI/UX",
    projectsTitle: "Ce que j'ai",
    projectsTitleHighlight: "créé",
    projectsSubtitle: "Projets qui illustrent ma maîtrise technique et ma créativité",
    ecommerceTitle: "E-Commerce Platform",
    ecommerceDesc: "Plateforme e-commerce complète avec panier, paiement Stripe, gestion des stocks et tableau de bord admin. Interface moderne et responsive.",
    taskTitle: "Task Management App",
    taskDesc: "Application de gestion de tâches collaborative avec drag & drop, notifications en temps réel, et système de permissions.",
    socialTitle: "Social Media Dashboard",
    socialDesc: "Tableau de bord analytique pour réseaux sociaux avec graphiques interactifs, statistiques en temps réel et export de données.",
    blogTitle: "Blog CMS",
    blogDesc: "Système de gestion de contenu pour blog avec éditeur WYSIWYG, SEO optimisé, commentaires et système de tags.",
    realEstateTitle: "Real Estate Platform",
    realEstateDesc: "Plateforme immobilière avec recherche avancée, carte interactive, visites virtuelles 360° et système de réservation.",
    fitnessTitle: "Fitness Tracker",
    fitnessDesc: "Application de suivi fitness avec plans d'entraînement personnalisés, suivi nutritionnel et graphiques de progression.",
    contactTitle: "Contact",
    contactSubtitle: "Restons connectés",
  },
  en: {
    devPortfolio: "<DevPortfolio />",
    name: "Precieux",
    title: "AI Coder & Full Stack Dev",
    bio: "Versatile and autonomous junior developer, I'm not just a simple coder — I'm an AI Coder who masters the art of merging artificial intelligence and modern development.",
    linkedin: "LinkedIn",
    github: "GitHub",
    email: "Email",
    whatsapp: "WhatsApp",
    discord: "Discord",
    aboutTitle: "Who am I",
    aboutTitleHighlight: "really",
    aboutSubtitle: "More than a developer, a solution creator",
    aboutText1: "I am an AI Coder and junior Full Stack developer who doesn't just write code — I design experiences. Versatile, I navigate easily between React, Vue.js, Python, Django, PHP and Laravel.",
    aboutText2: "Autonomous, I take charge of projects from start to finish, from design to production. In this era where roles multiply and transform, I adapt quickly and embrace new technologies with enthusiasm.",
    aiPowered: "AI-Powered",
    aiPoweredDesc: "I integrate AI into my workflow to maximize productivity and code quality.",
    versatile: "Versatile",
    versatileDesc: "Full Stack: Frontend, Backend, Databases. I master the entire development chain.",
    autonomous: "Autonomous",
    autonomousDesc: "Able to manage projects from A to Z with initiative and sense of responsibility.",
    adaptable: "Adaptable",
    adaptableDesc: "In an era of multiple roles, I quickly adapt to new technologies.",
    skillsTitle: "I",
    skillsTitleHighlight: "code",
    skillsTitleEnd: "in:",
    skillsSubtitle: "Modern tech stack for high-performance web solutions",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    tools: "Tools",
    softSkills: "Soft Skills",
    reactDesc: "UI Library",
    vueDesc: "Progressive framework",
    nextDesc: "React framework",
    tsDesc: "Typed JS",
    tailwindDesc: "CSS utility",
    nodeDesc: "JavaScript Runtime",
    expressDesc: "Node.js Framework",
    nestDesc: "TypeScript Framework",
    djangoDesc: "Python Framework",
    laravelDesc: "PHP Framework",
    postgresDesc: "Advanced SQL",
    mysqlDesc: "Relational DB",
    mongoDesc: "NoSQL",
    prismaDesc: "Modern ORM",
    gitDesc: "Version control",
    githubDesc: "Git Platform",
    vercelDesc: "Deployment",
    dockerDesc: "Containerization",
    linuxDesc: "Unix System",
    wordpressDesc: "Popular CMS",
    cursorDesc: "AI Code Editor",
    figmaDesc: "UI/UX Design",
    projectsTitle: "What I've",
    projectsTitleHighlight: "built",
    projectsSubtitle: "Projects that showcase my technical mastery and creativity",
    ecommerceTitle: "E-Commerce Platform",
    ecommerceDesc: "Complete e-commerce platform with cart, Stripe payment, inventory management and admin dashboard. Modern and responsive interface.",
    taskTitle: "Task Management App",
    taskDesc: "Collaborative task management application with drag & drop, real-time notifications, and permissions system.",
    socialTitle: "Social Media Dashboard",
    socialDesc: "Analytics dashboard for social networks with interactive charts, real-time statistics and data export.",
    blogTitle: "Blog CMS",
    blogDesc: "Content management system for blog with WYSIWYG editor, SEO optimized, comments and tag system.",
    realEstateTitle: "Real Estate Platform",
    realEstateDesc: "Real estate platform with advanced search, interactive map, 360° virtual tours and booking system.",
    fitnessTitle: "Fitness Tracker",
    fitnessDesc: "Fitness tracking application with personalized workout plans, nutrition tracking and progress charts.",
    contactTitle: "Contact",
    contactSubtitle: "Let's stay connected",
  },
};

export type Language = "fr" | "en";
export type TranslationKey = keyof typeof translations.fr;

// ============= LANGUAGE CONTEXT =============
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    
    // Démarrer l'animation de transition
    setIsTransitioning(true);
    
    // Changer la langue après un court délai pour l'effet de fade
    setTimeout(() => {
      setLanguageState(lang);
      localStorage.setItem("language", lang);
      
      // Terminer la transition
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 150);
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.fr[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isTransitioning }}>
      <div 
        style={{
          opacity: isTransitioning ? 0.5 : 1,
          transition: 'opacity 0.15s ease-in-out',
        }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// ============= THEME PROVIDER =============
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
