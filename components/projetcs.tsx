'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

import {

    ExternalLink,
    Github, Sparkles, Code, Smartphone
} from 'lucide-react';

import { LucideIcon } from "lucide-react";

type Category = 'all' | 'web' | 'mobile';

type Project = {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    gradient: string;
    images: string[];
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    category: 'web' | 'mobile';
};

type Props = {
    projects: Project[];
    scrollToSection: (sectionId: string) => void
};

const Projects = ({ projects, scrollToSection }: Props) => {
    // State pour le filtre de catégorie
    const [activeFilter, setActiveFilter] = useState<Category>('all');

    // State pour suivre l'index de l'image actuelle pour chaque projet
    const [currentImageIndexes, setCurrentImageIndexes] = useState<Record<number, number>>({});

    // Fonction pour obtenir l'index actuel de l'image pour un projet
    const getCurrentImageIndex = (projectId: number) => {
        return currentImageIndexes[projectId] || 0;
    };

    // Fonction pour naviguer à l'image suivante
    const nextImage = (projectId: number, imagesLength: number) => {
        setCurrentImageIndexes(prev => ({
            ...prev,
            [projectId]: (getCurrentImageIndex(projectId) + 1) % imagesLength
        }));
    };

    // Fonction pour naviguer à l'image précédente
    const prevImage = (projectId: number, imagesLength: number) => {
        setCurrentImageIndexes(prev => ({
            ...prev,
            [projectId]: (getCurrentImageIndex(projectId) - 1 + imagesLength) % imagesLength
        }));
    };
    return (
        <>
            {/* Section Réalisations */}
            <section id="realisations" className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
                {/* Grille de fond blanche visible */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

                {/* Grille neon subtile */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(132, 204, 22, .1) 25%, rgba(132, 204, 22, .1) 26%, transparent 27%, transparent 74%, rgba(132, 204, 22, .1) 75%, rgba(132, 204, 22, .1) 76%, transparent 77%, transparent),
                        linear-gradient(90deg, transparent 24%, rgba(132, 204, 22, .1) 25%, rgba(132, 204, 22, .1) 26%, transparent 27%, transparent 74%, rgba(132, 204, 22, .1) 75%, rgba(132, 204, 22, .1) 76%, transparent 77%, transparent)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Lignes neon diagonales dynamiques */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Ligne 1 */}
                    <div className="absolute top-1/4 -left-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#84cc16]/30 to-transparent rotate-45 animate-pulse" style={{
                        animation: 'float 8s ease-in-out infinite'
                    }}></div>
                    
                    {/* Ligne 2 */}
                    <div className="absolute top-1/2 -right-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#84cc16]/30 to-transparent -rotate-45 animate-pulse" style={{
                        animation: 'float 10s ease-in-out infinite 1s'
                    }}></div>

                    {/* Cercles de lumière */}
                    <div className="absolute top-1/3 left-20 w-40 h-40 border border-[#84cc16]/20 rounded-full animate-pulse" style={{
                        animation: 'pulse 3s ease-in-out infinite'
                    }}></div>
                    
                    <div className="absolute bottom-1/4 right-32 w-60 h-60 border border-[#84cc16]/15 rounded-full animate-pulse" style={{
                        animation: 'pulse 4s ease-in-out infinite 1.5s'
                    }}></div>
                </div>

                {/* Orbes flottantes */}
                <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-gradient-to-r from-[#84cc16]/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"
                    style={{
                        animation: 'float 12s ease-in-out infinite'
                    }}
                />
                <div className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-l from-[#84cc16]/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"
                    style={{
                        animation: 'float 10s ease-in-out infinite 2s'
                    }}
                />

                <style jsx>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(50px); }
                    }
                    @keyframes pulse {
                        0%, 100% { transform: scale(1); opacity: 0.3; }
                        50% { transform: scale(1.1); opacity: 0.6; }
                    }
                `}</style>

                <div className="container mx-auto relative z-10">
                    {/* En-tête */}
                    <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-[#84cc16] uppercase tracking-wider mb-4">
                            <div className="w-8 h-px bg-[#84cc16]/50"></div>
                            <span>04</span>
                            <div className="w-8 h-px bg-[#84cc16]/50"></div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                            Nos Réalisations
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-4">
                            Découvrez quelques-uns de mes projets récents et comment je transforme les idées en solutions concrètes.
                        </p>
                        <p className="text-base text-gray-400 italic flex items-center justify-center gap-2">
                            <Sparkles className="w-6 h-6 text-[#84cc16]" /> Vous avez une idée ? Nous pouvons la réaliser sur mesure pour votre entreprise !
                        </p>
                    </div>

                    {/* Filtres de projets */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                activeFilter === 'all'
                                    ? 'bg-[#84cc16] text-black shadow-lg shadow-[#84cc16]/50'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                            }`}
                        >
                            Tout
                        </button>
                        <button
                            onClick={() => setActiveFilter('web')}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                                activeFilter === 'web'
                                    ? 'bg-[#84cc16] text-black shadow-lg shadow-[#84cc16]/50'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                            }`}
                        >
                            <Code className="w-4 h-4" />
                            Web
                        </button>
                        <button
                            onClick={() => setActiveFilter('mobile')}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                                activeFilter === 'mobile'
                                    ? 'bg-[#84cc16] text-black shadow-lg shadow-[#84cc16]/50'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                            }`}
                        >
                            <Smartphone className="w-4 h-4" />
                            Mobile
                        </button>
                    </div>

                    {/* Grille de projets */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {projects
                            .filter(project => activeFilter === 'all' || project.category === activeFilter)
                            .map((project, index) => {
                            const IconComponent = project.icon;
                            const delayClass = `animation-delay-${(index + 2) * 100}`;

                            return (
                                <div
                                    key={project.id}
                                    className={`group relative animate-fade-in-up ${delayClass}`}
                                >
                                    {/* Card */}
                                    <div className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#84cc16] hover:shadow-2xl hover:shadow-[#84cc16]/20">

                                        {/* Image du projet */}
                                        <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                                            <div className="absolute inset-0">
                                                <img 
                                                    src={project.images[getCurrentImageIndex(project.id)]} 
                                                    alt={`${project.title} - Image ${getCurrentImageIndex(project.id) + 1}`}
                                                    className="w-full h-full object-cover transition-opacity duration-300"
                                                />
                                                {/* Overlay pour lisibilité */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
                                            </div>

                                            {/* Navigation images - Flèches */}
                                            {project.images.length > 1 && (
                                                <>
                                                    {/* Bouton précédent */}
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            prevImage(project.id, project.images.length);
                                                        }}
                                                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 md:opacity-100"
                                                        aria-label="Image précédente"
                                                    >
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    
                                                    {/* Bouton suivant */}
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            nextImage(project.id, project.images.length);
                                                        }}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 md:opacity-100"
                                                        aria-label="Image suivante"
                                                    >
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>

                                                    {/* Indicateurs de position */}
                                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                                                        {project.images.map((_, imgIndex) => (
                                                            <div
                                                                key={imgIndex}
                                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                                    imgIndex === getCurrentImageIndex(project.id)
                                                                        ? 'bg-white scale-110'
                                                                        : 'bg-white/40'
                                                                }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </>
                                            )}

                                            {/* Overlay neon au hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#84cc16]/0 to-[#84cc16]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Badge "Nouveau" optionnel */}
                                            {index === 0 && (
                                                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-black text-xs font-bold rounded-full shadow-lg shadow-[#84cc16]/50">
                                                    Nouveau
                                                </div>
                                            )}
                                        </div>

                                        {/* Contenu */}
                                        <div className="p-6">
                                            {/* Titre et description */}
                                            <div className="mb-4">
                                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#84cc16] transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-gray-300 leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-3 py-1 bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] text-xs font-medium rounded-full hover:bg-[#84cc16]/20 hover:border-[#84cc16] transition-all duration-300 cursor-default"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Séparateur */}
                                            <div className="h-px bg-gradient-to-r from-[#84cc16]/0 via-[#84cc16]/30 to-[#84cc16]/0 mb-6"></div>

                                            {/* Boutons d'action */}
                                            <div className="flex items-center justify-between gap-3">
                                                <Button
                                                    size="sm"
                                                    className="flex-1 bg-gradient-to-r from-[#84cc16] to-[#65a30d] hover:shadow-lg hover:shadow-[#84cc16]/50 text-black font-semibold group/btn transition-all duration-300 rounded-full"
                                                    onClick={() => window.open(project.liveUrl, '_blank')}
                                                >
                                                    <span>Voir le projet</span>
                                                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                </Button>

                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="w-10 h-10 p-0 border-2 border-[#84cc16]/50 hover:border-[#84cc16] hover:bg-[#84cc16]/10 group/github transition-all duration-300 rounded-full"
                                                    onClick={() => window.open(project.githubUrl, '_blank')}
                                                >
                                                    <Github className="h-4 w-4 text-[#84cc16] transition-colors duration-300" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Effet de lueur neon au hover */}
                                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#84cc16]/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA final */}
                    <div className="max-w-4xl mx-auto mt-20 text-center animate-fade-in animation-delay-600">
                        <div className="bg-gradient-to-r from-black/50 to-black/30 border border-[#84cc16]/30 rounded-3xl p-12 backdrop-blur-xl group hover:border-[#84cc16]/60 hover:shadow-lg hover:shadow-[#84cc16]/20 transition-all duration-300">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Prêt à créer votre propre projet ?
                            </h3>
                            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                                Chaque projet commence par une conversation. Partagez-moi votre vision et transformez-la ensemble en réalité digitale.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    onClick={() => scrollToSection('contact')}
                                    size="lg"
                                    className="bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-black hover:shadow-lg hover:shadow-[#84cc16]/50 px-10 py-6 text-lg font-semibold group rounded-full transition-all duration-300"
                                >
                                    Démarrer un projet
                                    <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Button>
                                <Button
                                    onClick={() => scrollToSection('services')}
                                    size="lg"
                                    className="border-2 border-[#84cc16]/50 bg-[#84cc16]/5 text-[#84cc16] hover:bg-[#84cc16]/15 hover:border-[#84cc16] px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300"
                                >
                                    Découvrir mes services
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
