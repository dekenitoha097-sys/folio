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
import {
  Code,
  Smartphone,
  Palette,
  Zap,
} from 'lucide-react';

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
      const res = await fetch("https://my-portfolio-n94a.vercel.app/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message }),
      });

      const data = await res.json();
      //toast(data.message);
      setFormStatus('success');

      setTimeout(() => {
        setFormStatus('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 8000);

    } catch (error) {
      //toast("Une erreur est survenue !");
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }
  }

  // Liste des projets
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plateforme e-commerce moderne avec Next.js et Stripe",
      icon: Code,
      gradient: "from-gray-900 to-gray-800",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Stripe"],
      liveUrl: "https://ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/votre-username/ecommerce-platform"
    },
    {
      id: 2,
      title: "Application Mobile Fitness",
      description: "App de suivi sportif avec React Native et Firebase",
      icon: Smartphone,
      gradient: "from-gray-800 to-gray-700",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Expo"],
      liveUrl: "https://expo.dev/@votre-username/fitness-app",
      githubUrl: "https://github.com/votre-username/fitness-mobile-app"
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Tableau de bord avec visualisations de données en temps réel",
      icon: Palette,
      gradient: "from-gray-800 to-gray-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      technologies: ["React", "D3.js", "Node.js"],
      liveUrl: "https://analytics-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/votre-username/analytics-dashboard"
    },
    {
      id: 4,
      title: "SaaS Gestion de Projet",
      description: "Outil de gestion collaborative pour équipes agiles",
      icon: Zap,
      gradient: "from-gray-700 to-gray-600",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=400&fit=crop",
      technologies: ["Next.js", "PostgreSQL", "Prisma"],
      liveUrl: "https://project-manager-saas.vercel.app",
      githubUrl: "https://github.com/votre-username/project-management-saas"
    },
    {
      id: 5,
      title: "Portfolio Architecte",
      description: "Site vitrine élégant avec galerie et animations",
      icon: Code,
      gradient: "from-gray-700 to-gray-500",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=400&fit=crop",
      technologies: ["Next.js", "Framer Motion", "Sanity"],
      liveUrl: "https://architect-portfolio-demo.vercel.app",
      githubUrl: "https://github.com/votre-username/architect-portfolio"
    },
    {
      id: 6,
      title: "App Livraison",
      description: "Application de livraison avec tracking en temps réel",
      icon: Smartphone,
      gradient: "from-gray-900 to-gray-800",
      image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=800&h=400&fit=crop",
      technologies: ["React Native", "Maps API", "Socket.io"],
      liveUrl: "https://expo.dev/@votre-username/delivery-app",
      githubUrl: "https://github.com/votre-username/delivery-tracking-app"
    }
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
    </>
  );
}
