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
  const projects: { id: number; title: string; description: string; icon: any; gradient: string; images: string[]; technologies: string[]; liveUrl: string; githubUrl: string; category: 'web' | 'mobile' }[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plateforme e-commerce moderne avec Next.js et Stripe",
      icon: Code,
      gradient: "from-gray-900 to-gray-800",
      images: [
        "e1.png",
        "e2.png",
        "e3.png",
        "e4.png"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      liveUrl: "https://store-peach-ten-85.vercel.app/",
      githubUrl: "https://github.com/dekenitoha097-sys/store",
      category: 'web'
    },
    {
      id: 2,
      title: "Application Mobile Fitness",
      description: "App de suivi sportif avec React Native et Firebase",
      icon: Smartphone,
      gradient: "from-gray-800 to-gray-700",
      images: [
        "q1.png",
        "q2.png",
        "q3.png",
      ],
      technologies: ["React Native", "Firebase", "Expo"],
      liveUrl: "https://quizhub-kappa.vercel.app/quiz",
      githubUrl: "https://github.com/dekenitoha097-sys/quizhub",
      category: 'web'
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Tableau de bord avec visualisations de données en temps réel",
      icon: Palette,
      gradient: "from-gray-800 to-gray-600",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
      ],
      technologies: ["React", "D3.js", "Node.js"],
      liveUrl: "https://analytics-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/votre-username/analytics-dashboard",
      category: 'mobile'
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
      <Testimonials scrollToSection={scrollToSection}></Testimonials>
      <Contacts formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} formStatus={formStatus} loading={loading}></Contacts>
      <Footer scrollToSection={scrollToSection} setIsMenuOpen={setIsMenuOpen}></Footer>
    </>
  );
}
