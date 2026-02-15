'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ColorContextType = {
    themeColor: string;
    setThemeColor: (color: string) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

const DEFAULT_COLOR = '#84cc16'; // Default green

export function ColorProvider({ children }: { children: ReactNode }) {
    const [themeColor, setThemeColorState] = useState(DEFAULT_COLOR);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load color from localStorage on mount
    useEffect(() => {
        const savedColor = localStorage.getItem('dekora-theme-color');
        if (savedColor) {
            setThemeColorState(savedColor);
        }
        setIsLoaded(true);
    }, []);

    // Update CSS variables when color changes
    useEffect(() => {
        if (!isLoaded) return;

        // Convert hex to RGB for transparency variations
        const hex = themeColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        // Create a darker version for gradients
        const darkR = Math.max(0, r - 40);
        const darkG = Math.max(0, g - 40);
        const darkB = Math.max(0, b - 40);

        // Create lighter versions
        const lightR = Math.min(255, r + 60);
        const lightG = Math.min(255, g + 60);
        const lightB = Math.min(255, b + 60);

        // Set CSS variables
        document.documentElement.style.setProperty('--theme-color', themeColor);
        document.documentElement.style.setProperty('--theme-color-rgb', `${r}, ${g}, ${b}`);
        document.documentElement.style.setProperty('--theme-color-light', `rgba(${r}, ${g}, ${b}, 0.1)`);
        document.documentElement.style.setProperty('--theme-color-medium', `rgba(${r}, ${g}, ${b}, 0.3)`);
        document.documentElement.style.setProperty('--theme-color-glow', `rgba(${r}, ${g}, ${b}, 0.5)`);
        document.documentElement.style.setProperty('--theme-color-dark', `rgb(${darkR}, ${darkG}, ${darkB})`);
        document.documentElement.style.setProperty('--theme-color-lighten', `rgb(${lightR}, ${lightG}, ${lightB})`);
    }, [themeColor, isLoaded]);

    const setThemeColor = (color: string) => {
        setThemeColorState(color);
        localStorage.setItem('dekora-theme-color', color);
    };

    return (
        <ColorContext.Provider value={{ themeColor, setThemeColor }}>
            {children}
        </ColorContext.Provider>
    );
}

export function useThemeColor() {
    const context = useContext(ColorContext);
    if (!context) {
        throw new Error('useThemeColor must be used within a ColorProvider');
    }
    return context;
}
