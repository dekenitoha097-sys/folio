'use client'
import Hero from "@/components/hero";
import { useState } from "react";
import Header from "@/components/header"
import About from "@/components/about";
import Solutions from "@/components/solution";
import AppExemples from "@/components/appExemple";
import Contacts from "@/components/contacts";
import Projects from "@/components/projetcs";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import FloatingChat from "@/components/floatingChat";
import {
  Code,
  Smartphone,
  Palette,
  Zap,
} from 'lucide-react';

type Category = 'all' | 'web' | 'mobile';

type FormData = {
  name: string,
  email: string,
  message: string
}


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message }),
      });

      const data = await res.json();

      if (res.ok) {
        setFormStatus('success');
        setTimeout(() => {
          setFormStatus('idle');
          setFormData({ name: '', email: '', message: '' });
        }, 8000);
      } else {
        setFormStatus('error');
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      }

    } catch (error) {
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } finally {
      setLoading(false);
    }
  }

  // Liste des projets
  const projects: {
    id: number;
    title: string;
    description: string;
    icon: any;
    gradient: string;
    images: string[];
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    category: 'web' | 'mobile';
  }[] = [
      {
        id: 1,
        title: "Plateforme E-Commerce Full Stack",
        description:
          "Application e-commerce moderne développée avec Next.js, intégrant un système de paiement sécurisé, une gestion dynamique des produits, un panier interactif et une expérience utilisateur optimisée. Architecture performante avec rendu hybride (SSR/CSR) et interface responsive.",
        icon: Code,
        gradient: "from-gray-900 to-gray-800",
        images: ["e1.png", "e2.png", "e3.png", "e4.png"],
        technologies: ["Next.js", "TypeScript", "Tailwind"],
        liveUrl: "https://store-peach-ten-85.vercel.app/",
        githubUrl: "https://github.com/dekenitoha097-sys/store",
        category: "web",
      },

      {
        id: 2,
        title: "QuizHub – Application Interactive",
        description:
          "Application web interactive permettant aux utilisateurs de répondre à des quiz dynamiques avec sauvegarde des scores en temps réel. Intégration Firebase pour l’authentification et la gestion des données, interface moderne et expérience fluide optimisée pour mobile et desktop.",
        icon: Smartphone,
        gradient: "from-gray-800 to-gray-700",
        images: ["q1.png", "q2.png", "q3.png"],
        technologies: ["React", "Firebase", "Expo"],
        liveUrl: "https://quizhub-kappa.vercel.app/quiz",
        githubUrl: "https://github.com/dekenitoha097-sys/quizhub",
        category: "web",
      },

      {
        id: 3,
        title: "Application Mobile de Gestion Financière",
        description:
          "Application mobile conçue pour le suivi des revenus et dépenses avec visualisation claire des transactions. Tableau de bord interactif affichant statistiques et graphiques en temps réel, permettant aux utilisateurs de mieux analyser et contrôler leurs finances personnelles.",
        icon: Palette,
        gradient: "from-gray-800 to-gray-600",
        images: [
          "m1.png",
          
        ],
        technologies: ["React Native", "Node.js", "D3.js"],
        liveUrl: "https://analytics-dashboard-demo.vercel.app",
        githubUrl: "https://github.com/votre-username/analytics-dashboard",
        category: "mobile",
      },

      {
        id: 4,
        title: "Dashboard Analytics Professionnel",
        description:
          "Tableau de bord analytique avec visualisation avancée des données, graphiques interactifs et mise à jour en temps réel. Conçu pour fournir des insights clairs grâce à une architecture front-end performante et une gestion efficace des flux de données côté serveur.",
        icon: Palette,
        gradient: "from-gray-800 to-gray-600",
        images: ["d1.png", "d2.png", "d3.png"],
        technologies: ["React", "D3.js", "Node.js"],
        liveUrl: "https://deke-dashboard-com.vercel.app/",
        githubUrl: "https://github.com/dekenitoha097-sys/deke.dashboard.com",
        category: "web",
      },
    ];

  return (
    <>
      <Header scrollToSection={scrollToSection} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}></Header>
      <Hero scrollToSection={scrollToSection}></Hero>
      <About scrollToSection={scrollToSection}></About>
      <Solutions scrollToSection={scrollToSection}></Solutions>
      <AppExemples scrollToSection={scrollToSection}></AppExemples>
      <Projects scrollToSection={scrollToSection} projects={projects}></Projects>
      <Contacts formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} formStatus={formStatus} loading={loading}></Contacts>
      <Footer scrollToSection={scrollToSection} setIsMenuOpen={setIsMenuOpen}></Footer>
      <FloatingChat></FloatingChat>
    </>
  );
}
