'use client';

import { Button } from '@/components/ui/button';
import TechStack from '@/components/TechStack';
import {
    Code,
    Smartphone,
    Palette,
    Zap,

} from 'lucide-react';

type Props = {
    scrollToSection: (sectionId: string) => void
}

const Solutions = ({ scrollToSection }: Props) => {
    return (
        <>
            {/* Section Services */}
            <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
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

                {/* Orbes flottantes */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#84cc16]/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"
                    style={{
                        animation: 'float 10s ease-in-out infinite'
                    }}
                />
                <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-gradient-to-l from-[#84cc16]/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"
                    style={{
                        animation: 'float 12s ease-in-out infinite 2s'
                    }}
                />

                <style jsx>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(50px); }
                    }
                `}</style>

                <div className="container mx-auto relative z-10">
                    {/* En-tête */}
                    <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-[#84cc16] uppercase tracking-wider mb-4">
                            <div className="w-8 h-px bg-[#84cc16]/50"></div>
                            <span>02</span>
                            <div className="w-8 h-px bg-[#84cc16]/50"></div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                            Mes Services
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Des solutions complètes et sur mesure pour transformer vos idées en produits digitaux performants
                        </p>
                    </div>

                    {/* Grille de services */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

                        {/* Service 1 - Développement Web */}
                        <div className="group relative animate-fade-in-up animation-delay-200">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#84cc16]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative h-full p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-3xl hover:border-[#84cc16] transition-all duration-500 hover:shadow-2xl hover:shadow-[#84cc16]/20">
                                {/* Numéro */}
                                <div className="absolute top-6 right-6 text-7xl font-bold text-[#84cc16]/10 group-hover:text-[#84cc16]/30 transition-colors duration-500">
                                    01
                                </div>

                                {/* Icône */}
                                <div className="relative w-16 h-16 bg-gradient-to-br from-[#84cc16] to-[#65a30d] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#84cc16]/50">
                                    <Code className="h-8 w-8 text-black" />
                                </div>

                                {/* Contenu */}
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                    Développement Web
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Création de sites web et applications web sur mesure avec React, Next.js et les technologies les plus récentes pour une performance optimale.
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] text-xs font-medium rounded-full">React</span>
                                    <span className="px-3 py-1 bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] text-xs font-medium rounded-full">Next.js</span>
                                </div>

                                {/* Flèche hover */}
                                <div className="mt-6 flex items-center gap-2 text-[#84cc16] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="text-sm">En savoir plus</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Service 2 - Applications Mobile */}
                        <div className="group relative animate-fade-in-up animation-delay-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#84cc16]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative h-full p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-3xl hover:border-[#84cc16] transition-all duration-500 hover:shadow-2xl hover:shadow-[#84cc16]/20">
                                <div className="absolute top-6 right-6 text-7xl font-bold text-[#84cc16]/10 group-hover:text-[#84cc16]/30 transition-colors duration-500">
                                    02
                                </div>

                                <div className="relative w-16 h-16 bg-gradient-to-br from-[#84cc16] to-[#65a30d] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#84cc16]/50">
                                    <Smartphone className="h-8 w-8 text-black" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                    Applications Mobile
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Développement d&apos;applications mobiles natives et cross-platform avec React Native et Flutter pour iOS et Android.
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] text-xs font-medium rounded-full">React Native</span>
                                    <span className="px-3 py-1 bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] text-xs font-medium rounded-full">Flutter</span>
                                </div>

                                <div className="mt-6 flex items-center gap-2 text-[#84cc16] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="text-sm">En savoir plus</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Service 3 - UI/UX Design */}
                        <div className="group relative animate-fade-in-up animation-delay-400">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#84cc16]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative h-full p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-3xl hover:border-[#84cc16] transition-all duration-500 hover:shadow-2xl hover:shadow-[#84cc16]/20">
                                <div className="absolute top-6 right-6 text-7xl font-bold text-[#84cc16]/10 group-hover:text-[#84cc16]/30 transition-colors duration-500">
                                    03
                                </div>

                                <div className="relative w-16 h-16 bg-gradient-to-br from-[#84cc16] to-[#65a30d] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#84cc16]/50">
                                    <Palette className="h-8 w-8 text-black" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                    UI/UX Design
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Conception d&apos;interfaces utilisateur modernes et intuitives avec un focus sur l&apos;expérience utilisateur et l&apos;accessibilité.
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] text-xs font-medium rounded-full">Figma</span>
                                    <span className="px-3 py-1 bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] text-xs font-medium rounded-full">Design System</span>
                                </div>

                                <div className="mt-6 flex items-center gap-2 text-[#84cc16] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="text-sm">En savoir plus</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Service 4 - Optimisation */}
                        <div className="group relative animate-fade-in-up animation-delay-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#84cc16]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative h-full p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-3xl hover:border-[#84cc16] transition-all duration-500 hover:shadow-2xl hover:shadow-[#84cc16]/20">
                                <div className="absolute top-6 right-6 text-7xl font-bold text-[#84cc16]/10 group-hover:text-[#84cc16]/30 transition-colors duration-500">
                                    04
                                </div>

                                <div className="relative w-16 h-16 bg-gradient-to-br from-[#84cc16] to-[#65a30d] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#84cc16]/50">
                                    <Zap className="h-8 w-8 text-black" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                    Optimisation
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Amélioration des performances, SEO et accessibilité de vos applications existantes pour une meilleure visibilité et expérience.
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] text-xs font-medium rounded-full">SEO</span>
                                    <span className="px-3 py-1 bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] text-xs font-medium rounded-full">Performance</span>
                                </div>

                                <div className="mt-6 flex items-center gap-2 text-[#84cc16] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="text-sm">En savoir plus</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Section Technologies - Scroll Infini */}
                    <div className="mt-20">
                        <TechStack />
                    </div>

                    {/* Section CTA bas */}
                    <div className="max-w-4xl mx-auto mt-20 p-10 bg-gradient-to-r from-black/50 to-black/30 border border-[#84cc16]/30 rounded-3xl text-white text-center animate-fade-in animation-delay-600 backdrop-blur-xl group hover:border-[#84cc16]/60 hover:shadow-lg hover:shadow-[#84cc16]/20 transition-all duration-300">
                        <h3 className="text-3xl font-bold mb-4">Besoin d&apos;un service personnalisé ?</h3>
                        <p className="text-gray-300 text-lg mb-8">
                            Chaque projet est unique. Discutons ensemble de vos besoins spécifiques.
                        </p>
                        <Button
                            onClick={() => scrollToSection('contact')}
                            size="lg"
                            className="bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-black hover:shadow-lg hover:shadow-[#84cc16]/50 px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300"
                        >
                            Parlons de votre projet
                        </Button>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Solutions;