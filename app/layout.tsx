import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ColorProvider } from "@/lib/ColorContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEKORA – Développement Web & Applications Mobile à Casablanca",
  description:
    "DEKORA conçoit des sites web, applications mobiles et solutions digitales sur mesure avec React, Next.js, React Native et Flutter. 20+ projets réalisés, 98% de satisfaction client. Basé à Casablanca, Maroc.",
  keywords: [
    "Développement web",
    "Application mobile",
    "React",
    "Next.js",
    "React Native",
    "Flutter",
    "SEO",
    "UI UX Design",
    "Casablanca",
    "Agence digitale Maroc"
  ],
  authors: [{ name: "DEKORA" }],
  creator: "DEKORA",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "DEKORA – Solutions Web & Mobile Premium",
    description:
      "Transformez vos idées en solutions digitales performantes. Développement web, mobile, UI/UX et optimisation SEO.",
    url: "https://folio-zeta-ten.vercel.app", // remplace par ton vrai domaine
    siteName: "DEKORA",
    locale: "fr_FR",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <ColorProvider>
          {children}
        </ColorProvider>
      </body>
    </html>
  );
}
