'use client';

import { Button } from '@/components/ui/button';
import {

    Smartphone,
    CreditCard, Users, BarChart2, ShoppingCart, Database, Edit, Monitor,

} from 'lucide-react';

type Props = {
    scrollToSection : (sectionId: string) => void
}


const AppExemples = ({scrollToSection}:Props) => {
    return (
        <>
            {/* */}
            {/* Section Exemples d'applications */}
            <section id="exemples" className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
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
                <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-[#84cc16]/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"
                    style={{
                        animation: 'float 12s ease-in-out infinite'
                    }}
                />
                <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-r from-[#84cc16]/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"
                    style={{
                        animation: 'float 10s ease-in-out infinite 2s'
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
                    <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-[#84cc16] uppercase tracking-wider mb-4">
                            <div className="w-8 h-px bg-[#84cc16]/50"></div>
                            <span>03</span>
                            <div className="w-8 h-px bg-[#84cc16]/50"></div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                            Exemples de projets
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-4">
                            Voici quelques types d&apos;applications que nous pouvons développer pour répondre aux besoins de votre entreprise.
                        </p>
                        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                            Ce ne sont que des exemples : nous pouvons créer presque tout type de solution digitale selon vos besoins spécifiques.
                        </p>
                    </div>

                    {/* Grille d'exemples */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">

                        {/* Exemple 1 - Gestion de stock */}
                        <div className="group relative animate-fade-in-up animation-delay-200">
                            <div className="relative h-full p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-2xl group-hover:border-[#84cc16] group-hover:shadow-2xl group-hover:shadow-[#84cc16]/20 transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#84cc16] to-[#65a30d] group-hover:scale-110 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 shadow-lg shadow-[#84cc16]/50">
                                    <Database className="h-7 w-7 text-black" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">
                                    Gestion de stock
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                                    Suivi et gestion complète de vos stocks avec alertes automatiques, historiques et reporting.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-[#84cc16] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Exemple 2 - E-commerce */}
                        <div className="group relative animate-fade-in-up animation-delay-300">
                            <div className="relative h-full p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-2xl group-hover:border-[#84cc16] group-hover:shadow-2xl group-hover:shadow-[#84cc16]/20 transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#84cc16] to-[#65a30d] group-hover:scale-110 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 shadow-lg shadow-[#84cc16]/50">
                                    <ShoppingCart className="h-7 w-7 text-black" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">
                                    E-commerce
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                                    Boutiques en ligne responsives et sécurisées, avec paiement intégré et gestion des produits.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-[#84cc16] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Exemple 3 - Dashboard */}
                        <div className="group relative animate-fade-in-up animation-delay-400">
                            <div className="relative h-full p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-2xl group-hover:border-[#84cc16] group-hover:shadow-2xl group-hover:shadow-[#84cc16]/20 transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#84cc16] to-[#65a30d] group-hover:scale-110 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 shadow-lg shadow-[#84cc16]/50">
                                    <BarChart2 className="h-7 w-7 text-black" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">
                                    Dashboard analytique
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                                    Tableaux de bord interactifs pour suivre vos KPI et prendre des décisions basées sur les données.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-[#84cc16] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Exemple 4 - CRM */}
                        <div className="group relative animate-fade-in-up animation-delay-500">
                            <div className="relative h-full p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-2xl group-hover:border-[#84cc16] group-hover:shadow-2xl group-hover:shadow-[#84cc16]/20 transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#84cc16] to-[#65a30d] group-hover:scale-110 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 shadow-lg shadow-[#84cc16]/50">
                                    <Users className="h-7 w-7 text-black" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">
                                    Gestion de clients (CRM)
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                                    Suivi des clients, historique des interactions et gestion des ventes pour améliorer vos relations.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-[#84cc16] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Exemple 5 - Paiement */}
                        <div className="group relative animate-fade-in-up animation-delay-600">
                            <div className="relative h-full p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-2xl group-hover:border-[#84cc16] group-hover:shadow-2xl group-hover:shadow-[#84cc16]/20 transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#84cc16] to-[#65a30d] group-hover:scale-110 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 shadow-lg shadow-[#84cc16]/50">
                                    <CreditCard className="h-7 w-7 text-black" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">
                                    Solution de paiement
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                                    Systèmes de paiement sécurisés pour vos services et produits, intégrables à vos applications.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-[#84cc16] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Exemple 6 - App Mobile */}
                        <div className="group relative animate-fade-in-up animation-delay-700">
                            <div className="relative h-full p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-2xl group-hover:border-[#84cc16] group-hover:shadow-2xl group-hover:shadow-[#84cc16]/20 transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#84cc16] to-[#65a30d] group-hover:scale-110 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 shadow-lg shadow-[#84cc16]/50">
                                    <Smartphone className="h-7 w-7 text-black" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">
                                    App Mobile sur mesure
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                                    Applications natives ou cross-platform avec React Native ou Flutter, adaptées à vos besoins.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-[#84cc16] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Exemple 7 - Site vitrine */}
                        <div className="group relative animate-fade-in-up animation-delay-800">
                            <div className="relative h-full p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-2xl group-hover:border-[#84cc16] group-hover:shadow-2xl group-hover:shadow-[#84cc16]/20 transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#84cc16] to-[#65a30d] group-hover:scale-110 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 shadow-lg shadow-[#84cc16]/50">
                                    <Monitor className="h-7 w-7 text-black" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">
                                    Site vitrine
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                                    Présentation simple et élégante de votre entreprise ou projet sur le web avec design moderne.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-[#84cc16] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Exemple 8 - Blog/Portfolio */}
                        <div className="group relative animate-fade-in-up animation-delay-900">
                            <div className="relative h-full p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-2xl group-hover:border-[#84cc16] group-hover:shadow-2xl group-hover:shadow-[#84cc16]/20 transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#84cc16] to-[#65a30d] group-hover:scale-110 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 shadow-lg shadow-[#84cc16]/50">
                                    <Edit className="h-7 w-7 text-black" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">
                                    Blog / Portfolio
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                                    Blogs ou portfolios professionnels pour partager votre contenu et valoriser vos projets.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-[#84cc16] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span>Découvrir</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bannière finale */}
                    <div className="max-w-5xl mx-auto bg-gradient-to-r from-black/50 to-black/30 border border-[#84cc16]/30 rounded-3xl p-12 text-center text-white animate-fade-in animation-delay-1000 backdrop-blur-xl group hover:border-[#84cc16]/60 hover:shadow-lg hover:shadow-[#84cc16]/20 transition-all duration-300">
                        <h3 className="text-3xl font-bold mb-4">Vous avez un projet spécifique en tête ?</h3>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Ces exemples ne sont qu&apos;un aperçu de ce que nous pouvons créer. Chaque projet est unique et nous adaptons nos solutions à vos besoins précis.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => scrollToSection('contact')}
                                size="lg"
                                className="bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-black hover:shadow-lg hover:shadow-[#84cc16]/50 px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300"
                            >
                                Parlez-nous de votre idée
                            </Button>
                            <Button
                                onClick={() => scrollToSection('services')}
                                size="lg"
                                className="border-2 border-[#84cc16]/50 bg-[#84cc16]/5 text-[#84cc16] hover:bg-[#84cc16]/15 hover:border-[#84cc16] px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300"
                            >
                                Voir nos services
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AppExemples;