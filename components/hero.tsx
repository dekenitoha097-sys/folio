'use client';

import { Button } from '@/components/ui/button';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

type Props = {
    scrollToSection: (sectionId: string) => void
}

type Props1 = {
    number: number,
    suffix: string,
    label: string
};

const Hero = ({ scrollToSection }: Props) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            {/* Section Hero */}
            <section
                id="accueil"
                className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-24"
            >
                {/* Grille de fond */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div 
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(132, 204, 22, .1) 25%, rgba(132, 204, 22, .1) 26%, transparent 27%, transparent 74%, rgba(132, 204, 22, .1) 75%, rgba(132, 204, 22, .1) 76%, transparent 77%, transparent),
                            linear-gradient(90deg, transparent 24%, rgba(132, 204, 22, .1) 25%, rgba(132, 204, 22, .1) 26%, transparent 27%, transparent 74%, rgba(132, 204, 22, .1) 75%, rgba(132, 204, 22, .1) 76%, transparent 77%, transparent)`,
                            backgroundSize: '50px 50px'
                        }}
                    />
                </div>

                {/* Lignes d'énergie courbes - SVG dynamique */}
                <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                    viewBox="0 0 1200 800"
                    preserveAspectRatio="xMidYMid slice"
                >
                    {/* Courbe principale gauche */}
                    <motion.path
                        d="M 100 200 Q 300 100 500 200 T 900 200"
                        stroke="url(#gradientGreen)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                        strokeLinecap="round"
                    />

                    {/* Courbe ondulée centrale */}
                    <motion.path
                        d="M 50 400 Q 150 350 250 400 T 550 400 T 850 400 T 1150 400"
                        stroke="url(#gradientGreenReverse)"
                        strokeWidth="1.5"
                        fill="none"
                        animate={{ d: ["M 50 400 Q 150 350 250 400 T 550 400 T 850 400 T 1150 400", "M 50 420 Q 150 370 250 420 T 550 420 T 850 420 T 1150 420", "M 50 400 Q 150 350 250 400 T 550 400 T 850 400 T 1150 400"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        strokeLinecap="round"
                    />

                    {/* Courbe de tendance en bas */}
                    <motion.path
                        d="M 0 650 Q 200 600 400 650 T 800 700 T 1200 650"
                        stroke="url(#gradientGreen)"
                        strokeWidth="2"
                        fill="none"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        strokeLinecap="round"
                    />

                    {/* Lignes d'énergie latérales */}
                    <motion.circle
                        cx="150"
                        cy="250"
                        r="3"
                        fill="url(#gradientGreen)"
                        animate={{ r: [3, 8, 3], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.circle
                        cx="1050"
                        cy="250"
                        r="3"
                        fill="url(#gradientGreen)"
                        animate={{ r: [3, 8, 3], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />

                    {/* Gradients */}
                    <defs>
                        <linearGradient id="gradientGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(132, 204, 22, 0)" />
                            <stop offset="50%" stopColor="rgba(132, 204, 22, 1)" />
                            <stop offset="100%" stopColor="rgba(132, 204, 22, 0)" />
                        </linearGradient>
                        <linearGradient id="gradientGreenReverse" x1="100%" y1="0%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="rgba(132, 204, 22, 0)" />
                            <stop offset="50%" stopColor="rgba(132, 204, 22, 0.8)" />
                            <stop offset="100%" stopColor="rgba(132, 204, 22, 0)" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Orbes de lumière animées */}
                <motion.div
                    className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-r from-[#84cc16]/20 to-transparent rounded-full blur-3xl"
                    animate={{
                        y: [0, 50, 0],
                        x: [0, 30, 0],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{ pointerEvents: 'none' }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-10 w-96 h-96 bg-gradient-to-l from-[#84cc16]/20 to-transparent rounded-full blur-3xl"
                    animate={{
                        y: [0, -50, 0],
                        x: [0, -30, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    style={{ pointerEvents: 'none' }}
                />

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* Texte - Gauche */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                            className="space-y-8"
                        >
                            {/* Badge avec effet neon */}
                            <motion.div 
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#84cc16]/20 to-[#84cc16]/10 border border-[#84cc16]/50 rounded-full w-fit backdrop-blur-md shadow-lg shadow-[#84cc16]/20"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ boxShadow: "0 0 30px rgba(132, 204, 22, 0.4)" }}
                            >
                                <Zap className="w-4 h-4 text-[#84cc16]" />
                                <span className="text-sm text-[#84cc16] font-medium">Solutions Digitales Premium</span>
                            </motion.div>

                            <motion.h1 
                                className="text-6xl lg:text-7xl font-bold leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <span className="text-white">Transformez vos</span>
                                <br />
                                <span className="bg-gradient-to-r from-[#84cc16] via-[#a3e635] to-[#84cc16] bg-clip-text text-transparent">
                                    idées en solutions
                                </span>
                            </motion.h1>

                            <motion.p 
                                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Nous transformons vos idées en applications web et mobiles performantes,
                                conçues pour soutenir la croissance de votre activité.
                            </motion.p>

                            <motion.div 
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        onClick={() => scrollToSection('contact')}
                                        size="lg"
                                        className="bg-gradient-to-r from-[#84cc16] to-[#65a30d] hover:from-[#a3e635] hover:to-[#84cc16] cursor-pointer text-black px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-xl shadow-[#84cc16]/50 hover:shadow-2xl hover:shadow-[#84cc16]/60 rounded-full flex items-center gap-2"
                                    >
                                        Discutons de votre projet
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        onClick={() => scrollToSection('services')}
                                        size="lg"
                                        className="border-2 border-[#84cc16]/50 bg-[#84cc16]/5 backdrop-blur-md text-[#84cc16] hover:bg-[#84cc16]/15 hover:border-[#84cc16] hover:shadow-lg hover:shadow-[#84cc16]/30 cursor-pointer px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-full"
                                    >
                                        Découvrir nos services
                                    </Button>
                                </motion.div>
                            </motion.div>

                            {/* Stats avec style neon */}
                            <motion.div 
                                className="flex gap-12 pt-8 border-t border-[#84cc16]/20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                <StatCard number={50} suffix="+" label="Projets réalisés" />
                                <StatCard number={98} suffix="%" label="Clients satisfaits" />
                                <StatCard number={3} suffix="+" label="Années d'expérience" />
                            </motion.div>
                        </motion.div>

                        {/* Image - Droite */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex justify-center lg:justify-end"
                        >
                            <div className="relative">
                                {/* Conteneur avec effet glassmorphism et neon */}
                                <motion.div 
                                    className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl rounded-[40px] p-8 border border-[#84cc16]/20 shadow-2xl shadow-[#84cc16]/10"
                                    whileHover={{ y: -12, boxShadow: "0 40px 80px rgba(132, 204, 22, 0.15)" }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {/* Courbe décoration intérieure */}
                                    <svg 
                                        className="absolute -top-2 -right-2 w-20 h-20 opacity-30"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                    >
                                        <motion.path
                                            d="M 10 80 Q 50 20 90 10"
                                            stroke="#84cc16"
                                            strokeWidth="1"
                                            fill="none"
                                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        />
                                    </svg>

                                    <div className="aspect-[4/3] relative overflow-hidden rounded-[30px] bg-gradient-to-br from-black/50 to-black/20 border border-[#84cc16]/10">
                                        {/* Cercle décoratif de fond avec effet neon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div 
                                                className="absolute w-80 h-80 bg-gradient-to-r from-[#84cc16]/30 to-transparent rounded-full blur-3xl"
                                                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                                                transition={{ duration: 4, repeat: Infinity }}
                                            />
                                            <motion.svg 
                                                className="absolute w-64 h-64"
                                                viewBox="0 0 200 200"
                                            >
                                                <motion.circle
                                                    cx="100"
                                                    cy="100"
                                                    r="80"
                                                    fill="none"
                                                    stroke="#84cc16"
                                                    strokeWidth="1"
                                                    opacity="0.3"
                                                    animate={{ r: [80, 100, 80] }}
                                                    transition={{ duration: 3, repeat: Infinity }}
                                                />
                                                <motion.circle
                                                    cx="100"
                                                    cy="100"
                                                    r="100"
                                                    fill="none"
                                                    stroke="#84cc16"
                                                    strokeWidth="0.5"
                                                    opacity="0.2"
                                                    animate={{ r: [100, 130, 100] }}
                                                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                                />
                                            </motion.svg>
                                        </div>

                                        {/* Image */}
                                        <img
                                            src="/pca.png"
                                            alt="Solutions digitales"
                                            className="relative w-full h-full object-contain drop-shadow-2xl"
                                        />
                                    </div>
                                </motion.div>

                                {/* Décoration coins avec style neon */}
                                <motion.div
                                    className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#84cc16]/30 to-transparent backdrop-blur-xl rounded-[20px] border border-[#84cc16]/40 flex items-center justify-center shadow-lg shadow-[#84cc16]/20"
                                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#84cc16]/40 to-[#84cc16]/20 rounded-lg shadow-lg shadow-[#84cc16]/30"></div>
                                </motion.div>

                                <motion.div
                                    className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#84cc16]/20 to-transparent backdrop-blur-xl rounded-[15px] border border-[#84cc16]/30 flex items-center justify-center shadow-lg shadow-[#84cc16]/15"
                                    animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                >
                                    <div className="w-8 h-8 bg-gradient-to-br from-[#84cc16]/30 to-transparent rounded-lg"></div>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Indicateur de scroll avec neon */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                >
                    <svg
                        className="w-6 h-6 text-[#84cc16]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </motion.div>
            </section>
        </>
    );
}

export default Hero;


// Composant StatCard avec style neon
const StatCard = ({ number, suffix, label }: Props1) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <motion.div 
            ref={ref} 
            className="text-left"
            whileHover={{ y: -8, x: 5 }}
        >
            <div className="text-4xl font-bold bg-gradient-to-r from-[#84cc16] to-[#a3e635] bg-clip-text text-transparent">
                {inView && (
                    <CountUp
                        end={number}
                        duration={2.5}
                        suffix={suffix}
                        enableScrollSpy={false}
                    />
                )}
                {!inView && `0${suffix}`}
            </div>
            <div className="text-sm text-gray-400 mt-1 group-hover:text-[#84cc16]/80 transition-colors">{label}</div>
        </motion.div>
    );
};