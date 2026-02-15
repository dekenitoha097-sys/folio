'use client';
import { Button } from '@/components/ui/button';

type Props = {
    scrollToSection: (sectionId: string) => void;
}

const About = ({ scrollToSection }: Props) => {
    return (
        <>
            {/* Section À propos */}
            <section id="a-propos" className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Colonne gauche - Titre sticky */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="w-8 h-px bg-gray-300"></div>
                                    <span>01</span>
                                </div>
                                <h2 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                                    À propos<br />
                                    <span className="text-green-500">de nous</span>
                                </h2>
                                <p className="text-gray-400 text-lg">
                                    Votre partenaire digital pour des solutions innovantes et performantes.
                                </p>

                                {/* Ligne décorative */}
                                <div className="pt-8">
                                    <div className="w-full h-px bg-gradient-to-r from-green-500 via-gray-700 to-transparent"></div>
                                </div>
                            </div>
                        </div>

                        {/* Colonne droite - Contenu */}
                        <div className="lg:col-span-8 space-y-12">

                            {/* Block 1 */}
                            <div className="group">
                                <div className="relative pl-8 border-l-2 border-gray-800 hover:border-green-500 transition-colors duration-500">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-6xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">3+</span>
                                            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Années d'expérience</span>
                                        </div>
                                        <p className="text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                            Avec plus de 3 ans d'expertise en développement web et mobile, nous accompagnons nos clients dans la conception de solutions digitales modernes, performantes et fiables, répondant à leurs besoins spécifiques.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Block 2 */}
                            <div className="group">
                                <div className="relative pl-8 border-l-2 border-gray-800 hover:border-green-500 transition-colors duration-500">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold text-white">Technologies de pointe</h3>
                                        <p className="text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                            Notre passion pour les technologies de pointe telles que Python, React, Next.js, React Native, Flutter et TypeScript nous permet de livrer des solutions innovantes et évolutives.
                                        </p>

                                        {/* Tags technos */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {['Python', 'React', 'Next.js', 'React Native', 'Flutter', 'TypeScript'].map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-4 py-2 bg-gray-900 hover:bg-green-600 hover:text-white text-gray-300 text-sm font-medium rounded-full transition-all duration-300 cursor-default"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Block 3 */}
                            <div className="group">
                                <div className="relative pl-8 border-l-2 border-gray-800 hover:border-green-500 transition-colors duration-500">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold text-white">Notre approche</h3>
                                        <p className="text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                            Notre approche combine excellence technique, design élégant et focus sur l'expérience utilisateur, afin de créer des produits digitaux qui font réellement la différence.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Metrics en bas */}
                            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-800">
                                <div className="text-center group cursor-default">
                                    <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">Projets réalisés</div>
                                </div>
                                <div className="text-center group cursor-default">
                                    <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">Satisfaction</div>
                                </div>
                                <div className="text-center group cursor-default">
                                    <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">Support</div>
                                </div>
                            </div>

                            {/* CTA minimaliste */}
                            <div className="flex items-center justify-between p-8 bg-black rounded-2xl border border-gray-800">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Un projet en tête ?</h3>
                                    <p className="text-gray-400">Parlons-en autour d'un café (virtuel)</p>
                                </div>
                                <Button
                                    onClick={() => scrollToSection('contact')}
                                    className="bg-white text-black hover:bg-gray-100 px-8 py-6 font-semibold group"
                                >
                                    Contactez-nous
                                    <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default About;
