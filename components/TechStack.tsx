'use client';

import { useThemeColor } from '@/lib/ColorContext';

const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#ffffff' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg', color: '#61DAFB' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: '#F24E1E' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
];

const TechStack = () => {
    const { themeColor } = useThemeColor();
    
    return (
        <div className="relative overflow-hidden py-16">
            {/* Titre de la section */}
            <div className="text-center mb-12">
                <h3 
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ color: themeColor }}
                >
                    Technologies que j'utilise
                </h3>
            </div>

            {/* Container du scroll infini */}
            <div className="relative w-full">
                {/* Dégradé de masque à gauche */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                
                {/* Dégradé de masque à droite */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                {/* Animation de défilement */}
                <div className="flex animate-scroll md:animate-scroll">
                    {/* Premier ensemble de logos */}
                    {technologies.map((tech, index) => (
                        <div
                            key={`first-${index}`}
                            className="flex-shrink-0 mx-6 md:mx-8 group"
                        >
                            <div 
                                className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                style={{
                                    border: `1px solid ${themeColor}30`,
                                    boxShadow: `0 0 20px ${themeColor}10`
                                }}
                            >
                                {/* Effet de surbrillance au survol */}
                                <div 
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: `linear-gradient(135deg, ${themeColor}20, transparent)`,
                                        border: `1px solid ${themeColor}60`
                                    }}
                                />
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain transition-all duration-300 relative z-10"
                                    style={{
                                        filter: `drop-shadow(0 0 6px ${tech.color}80)`
                                    }}
                                />
                            </div>
                            <p 
                                className="text-center mt-2 text-xs md:text-sm font-medium transition-opacity duration-300"
                                style={{ color: themeColor }}
                            >
                                {tech.name}
                            </p>
                        </div>
                    ))}

                    {/* Deuxième ensemble de logos (pour le boucle infinie) */}
                    {technologies.map((tech, index) => (
                        <div
                            key={`second-${index}`}
                            className="flex-shrink-0 mx-6 md:mx-8 group"
                        >
                            <div 
                                className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                style={{
                                    border: `1px solid ${themeColor}30`,
                                    boxShadow: `0 0 20px ${themeColor}10`
                                }}
                            >
                                {/* Effet de surbrillance au survol */}
                                <div 
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: `linear-gradient(135deg, ${themeColor}20, transparent)`,
                                        border: `1px solid ${themeColor}60`
                                    }}
                                />
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain transition-all duration-300 relative z-10"
                                    style={{
                                        filter: `drop-shadow(0 0 6px ${tech.color}80)`
                                    }}
                                />
                            </div>
                            <p 
                                className="text-center mt-2 text-xs md:text-sm font-medium transition-opacity duration-300"
                                style={{ color: themeColor }}
                            >
                                {tech.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Styles CSS pour l'animation */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
                
                @media (min-width: 768px) {
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                    }
                }
                
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default TechStack;
