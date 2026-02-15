'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
    Palette,
    Zap,
    Home,
    User,
    Lightbulb,
    Mail,
    ArrowRight,
    Quote
} from 'lucide-react';


type Props = {
    scrollToSection: (sectionId: string) => void;
    setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    isMenuOpen?: boolean;
}

const Header = ({ scrollToSection, setIsMenuOpen, isMenuOpen }: Props) => {
    return (
        <>
            {/* Header fixe avec glassmorphism neon */}
            <motion.header 
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div 
                    className="bg-black/40 backdrop-blur-2xl border-b border-[#84cc16]/30 shadow-2xl shadow-[#84cc16]/10"
                    whileHover={{ boxShadow: "0 0 40px rgba(132, 204, 22, 0.2)" }}
                    transition={{ duration: 0.3 }}
                >
                    <nav className="container mx-auto px-6">
                        <div className="flex items-center justify-between h-20">
                            {/* Logo avec effet neon pulsing */}
                            <motion.button
                                onClick={() => scrollToSection('accueil')}
                                className="flex-shrink-0 leading-tight group cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="relative">
                                    <motion.span 
                                        className="block text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#84cc16] via-[#a3e635] to-[#84cc16] bg-clip-text text-transparent"
                                        animate={{ textShadow: ['0 0 10px rgba(132, 204, 22, 0)', '0 0 20px rgba(132, 204, 22, 0.5)', '0 0 10px rgba(132, 204, 22, 0)'] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        DEKORA
                                    </motion.span>
                                    <motion.span 
                                        className="block text-xs font-semibold text-[#84cc16]/70 uppercase tracking-[0.2em] group-hover:text-[#84cc16] transition-colors"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        Web & Mobile Solutions
                                    </motion.span>
                                </div>
                            </motion.button>

                            {/* Navigation desktop */}
                            <div className="hidden md:block">
                                <div className="flex items-center space-x-1">
                                    {[
                                        { id: 'accueil', label: 'Accueil' },
                                        { id: 'a-propos', label: 'À propos' },
                                        { id: 'services', label: 'Services' },
                                        { id: 'exemples', label: 'Exemples' },
                                        { id: 'realisations', label: 'Réalisations' },
                                        { id: 'testimonials', label: 'Témoignages' }
                                    ].map((item) => (
                                        <motion.button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="relative px-4 py-2 text-sm text-gray-300 hover:text-[#84cc16] transition-all duration-200 font-semibold group"
                                            whileHover={{ y: -2 }}
                                        >
                                            <span className="relative z-10">{item.label}</span>
                                            
                                            {/* Fond hover avec gradient neon */}
                                            <motion.div 
                                                className="absolute inset-0 bg-gradient-to-r from-[#84cc16]/10 to-[#84cc16]/5 rounded-lg"
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileHover={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            
                                            {/* Underline neon */}
                                            <motion.div 
                                                className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#84cc16] to-transparent"
                                                initial={{ width: 0, x: '-50%' }}
                                                whileHover={{ width: '75%', x: '-50%' }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            
                                            {/* Glow effect */}
                                            <motion.div 
                                                className="absolute inset-0 rounded-lg border border-[#84cc16]/0"
                                                whileHover={{ borderColor: 'rgba(132, 204, 22, 0.5)' }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.button>
                                    ))}

                                    <motion.button
                                        onClick={() => scrollToSection('contact')}
                                        className="ml-3 px-6 py-2.5 bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-black rounded-full font-semibold shadow-lg shadow-[#84cc16]/40 relative overflow-hidden group flex items-center gap-2"
                                        whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(132, 204, 22, 0.6)' }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Contact
                                            <motion.span
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.span>
                                        </span>
                                        
                                        {/* Overlay gradient on hover */}
                                        <motion.div 
                                            className="absolute inset-0 bg-gradient-to-r from-[#a3e635] to-[#84cc16] opacity-0"
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Bouton menu mobile */}
                            <div className="md:hidden">
                                <motion.button
                                    onClick={() => setIsMenuOpen?.(!isMenuOpen)}
                                    className="relative w-11 h-11 hover:bg-[#84cc16]/10 rounded-xl transition-all duration-300 border border-[#84cc16]/20"
                                    whileHover={{ borderColor: 'rgba(132, 204, 22, 0.5)' }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label="Menu"
                                >
                                    <div className="relative w-6 h-6 flex items-center justify-center">
                                        <motion.span 
                                            className="absolute h-0.5 w-6 bg-[#84cc16] rounded-full"
                                            animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <motion.span 
                                            className="absolute h-0.5 w-6 bg-[#84cc16] rounded-full"
                                            animate={isMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <motion.span 
                                            className="absolute h-0.5 w-6 bg-[#84cc16] rounded-full"
                                            animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </motion.button>
                            </div>
                        </div>

                        {/* Menu mobile avec style neon */}
                        <motion.div
                            className="md:hidden overflow-hidden"
                            animate={{ height: isMenuOpen ? 'auto' : 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <motion.div 
                                className="pb-6 pt-2 space-y-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isMenuOpen ? 1 : 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                {[
                                    { id: 'accueil', label: 'Accueil', icon: Home },
                                    { id: 'a-propos', label: 'À propos', icon: User },
                                    { id: 'services', label: 'Services', icon: Zap },
                                    { id: 'exemples', label: 'Exemples', icon: Lightbulb },
                                    { id: 'realisations', label: 'Réalisations', icon: Palette },
                                    { id: 'testimonials', label: 'Témoignages', icon: Quote }

                                ].map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => {
                                            scrollToSection(item.id);
                                            setIsMenuOpen?.(false);
                                        }}
                                        className="w-full text-left px-4 py-3 text-gray-300 hover:text-[#84cc16] hover:bg-[#84cc16]/10 transition-all duration-200 font-semibold rounded-xl flex items-center gap-3 group border border-[#84cc16]/0 hover:border-[#84cc16]/30"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                        whileHover={{ x: 5, paddingLeft: '1.25rem' }}
                                    >
                                        <motion.span 
                                            className="group-hover:text-[#84cc16]"
                                            whileHover={{ scale: 1.3, rotate: 15 }}
                                        >
                                            <item.icon className="w-5 h-5" />
                                        </motion.span>
                                        <span>{item.label}</span>
                                        <motion.svg 
                                            className="ml-auto w-5 h-5 text-[#84cc16]/30 group-hover:text-[#84cc16]"
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileHover={{ opacity: 1, x: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </motion.svg>
                                    </motion.button>
                                ))}

                                <motion.button
                                    onClick={() => {
                                        scrollToSection('contact');
                                        setIsMenuOpen?.(false);
                                    }}
                                    className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-black rounded-full font-semibold shadow-lg shadow-[#84cc16]/40 flex items-center justify-center gap-2 group"
                                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(132, 204, 22, 0.5)' }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ delay: 0.25, duration: 0.3 }}
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>Contact</span>
                                    <motion.span
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.span>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </nav>
                </motion.div>
            </motion.header>

        </>
    );
}

export default Header;