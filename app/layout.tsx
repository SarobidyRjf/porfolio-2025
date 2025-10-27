import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Coder | Full Stack Developer Portfolio",
  description: "Portfolio d'un AI Coder et développeur Full Stack junior polyvalent. Maîtrise de React, Next.js, Vue.js, Python, Django, PHP, Laravel. Fusion de l'IA et du développement moderne.",
  keywords: ["ai coder", "développeur", "full stack", "react", "nextjs", "vue", "python", "django", "php", "laravel", "intelligence artificielle"],
  authors: [{ name: "Votre Nom" }],
  openGraph: {
    title: "AI Coder | Full Stack Developer",
    description: "Portfolio professionnel - Fusion de l'IA et du développement web moderne",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
