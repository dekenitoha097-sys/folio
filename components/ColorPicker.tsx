'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { useThemeColor } from '@/lib/ColorContext';

const PRESET_COLORS = [
    { name: 'Vert', hex: '#84cc16' },
    { name: 'Rouge', hex: '#ef4444' },
    { name: 'Jaune', hex: '#eab308' },
    { name: 'Bleu', hex: '#3b82f6' },
    { name: 'Orange', hex: '#f97316' },
    { name: 'Violet', hex: '#8b5cf6' },
    { name: 'Rose', hex: '#ec4899' },
    { name: 'Cyan', hex: '#06b6d4' },
    { name: 'Émeraude', hex: '#10b981' },
    { name: 'Ambre', hex: '#f59e0b' },
    { name: 'Indigo', hex: '#6366f1' },
    { name: 'Fuchsia', hex: '#d946ef' },
];

export default function ColorPicker() {
    const { themeColor, setThemeColor } = useThemeColor();
    const [isOpen, setIsOpen] = useState(false);
    const [customColor, setCustomColor] = useState(themeColor);
    const pickerRef = useRef<HTMLDivElement>(null);

    // Close picker when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handlePresetClick = (hex: string) => {
        setThemeColor(hex);
        setCustomColor(hex);
    };

    const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const color = e.target.value;
        setCustomColor(color);
        setThemeColor(color);
    };

    const getCurrentColorName = () => {
        const preset = PRESET_COLORS.find(c => c.hex.toLowerCase() === themeColor.toLowerCase());
        return preset ? preset.name : 'Personnalisé';
    };

    return (
        <div className="relative" ref={pickerRef}>
            {/* Bouton déclencheur */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/40 border border-[var(--theme-color-medium)] hover:border-[var(--theme-color)] transition-all duration-200 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <div 
                    className="w-5 h-5 rounded-full border-2 border-white/30 shadow-lg"
                    style={{ backgroundColor: themeColor }}
                />
                <span className="text-sm text-gray-300 group-hover:text-white hidden sm:inline">
                    {getCurrentColorName()}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </motion.span>
            </motion.button>

            {/* Menu déroulant */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-72 p-4 bg-black/90 backdrop-blur-xl rounded-2xl border border-[var(--theme-color-medium)] shadow-2xl z-50"
                    >
                        <h3 className="text-sm font-semibold text-gray-300 mb-3">
                            Choisir une couleur
                        </h3>

                        {/* Couleurs prédéfinies */}
                        <div className="grid grid-cols-4 gap-2 mb-4">
                            {PRESET_COLORS.map((color) => (
                                <motion.button
                                    key={color.hex}
                                    onClick={() => handlePresetClick(color.hex)}
                                    className="relative group p-1 rounded-xl transition-all"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    title={color.name}
                                >
                                    <div
                                        className="w-10 h-10 rounded-lg shadow-lg"
                                        style={{ backgroundColor: color.hex }}
                                    />
                                    {themeColor.toLowerCase() === color.hex.toLowerCase() && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute inset-0 flex items-center justify-center"
                                        >
                                            <Check className="w-5 h-5 text-white drop-shadow-lg" />
                                        </motion.div>
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Séparateur */}
                        <div className="h-px bg-gradient-to-r from-transparent via-[var(--theme-color-medium)] to-transparent my-3" />

                        {/* Sélecteur de couleur personnalisé */}
                        <div className="space-y-3">
                            <label className="text-xs text-gray-400 font-medium">
                                Couleur personnalisée
                            </label>
                            
                            {/* Cercle chromatique */}
                            <div className="relative flex items-center justify-center">
                                <input
                                    type="color"
                                    value={customColor}
                                    onChange={handleCustomColorChange}
                                    className="w-full h-12 rounded-xl cursor-pointer opacity-0 absolute z-10"
                                />
                                <div 
                                    className="w-full h-12 rounded-xl border-2 border-[var(--theme-color-medium)]"
                                    style={{ 
                                        background: `conic-gradient(red, yellow, lime, aqua, blue, magenta, red)`,
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div 
                                        className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
                                        style={{ backgroundColor: customColor }}
                                    />
                                </div>
                            </div>

                            {/* Input hexadécimal */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={customColor.toUpperCase()}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) {
                                            setCustomColor(val);
                                            if (val.length === 7) {
                                                setThemeColor(val);
                                            }
                                        }
                                    }}
                                    className="flex-1 px-3 py-2 bg-black/50 border border-[var(--theme-color-medium)] rounded-lg text-sm text-white font-mono focus:border-[var(--theme-color)] focus:outline-none"
                                    placeholder="#84CC16"
                                />
                                <div 
                                    className="w-10 h-10 rounded-lg border-2 border-[var(--theme-color-medium)]"
                                    style={{ backgroundColor: customColor }}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
