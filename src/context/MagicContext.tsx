import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MagicContextValue {
    isWizardMode: boolean;
    lumosActive: boolean;
    isFlashActive: boolean;
    isSplashActive: boolean;
    isExitSplashActive: boolean;
    castLumos: () => void;
    castRevelio: () => void;
    castNox: () => void;
}

const MagicContext = createContext<MagicContextValue | undefined>(undefined);

export const MagicProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isWizardMode, setIsWizardMode] = useState(false);
    const [lumosActive, setLumosActive] = useState(false);
    const [isFlashActive, setIsFlashActive] = useState(false);
    const [isSplashActive, setIsSplashActive] = useState(false);
    const [isExitSplashActive, setIsExitSplashActive] = useState(false);

    const castLumos = () => {
        setLumosActive(true);
        setIsFlashActive(true);
        setTimeout(() => setIsFlashActive(false), 500); // Flash duration
    };

    const castRevelio = () => {
        if (lumosActive) {
            setIsSplashActive(true);
            // Wait for splash to finish before setting active mode? 
            // Or set active mode immediately but veil hides it?
            // Let's set active mode AFTER splash enters to ensure smooth transition
            setTimeout(() => {
                setIsWizardMode(true);
            }, 100);

            // Turn off splash after animation ends
            setTimeout(() => {
                setIsSplashActive(false);
            }, 3500); // 3.5s splash
        }
    };

    const castNox = () => {
        // Trigger Exit Splash (Mischief Managed)
        setIsExitSplashActive(true);

        // Reset wizard mode behind the splash screen after a brief delay
        setTimeout(() => {
            setIsWizardMode(false);
            setLumosActive(false);
        }, 100);

        // Turn off splash after animation ends
        setTimeout(() => {
            setIsExitSplashActive(false);
        }, 3500); // 3.5s splash
    };

    return (
        <MagicContext.Provider value={{ isWizardMode, lumosActive, isFlashActive, isSplashActive, isExitSplashActive, castLumos, castRevelio, castNox }}>
            {children}
        </MagicContext.Provider>
    );
};

export const useMagic = () => {
    const context = useContext(MagicContext);
    if (!context) {
        throw new Error('useMagic must be used within a MagicProvider');
    }
    return context;
};
