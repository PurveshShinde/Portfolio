import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useMagic } from '../context/MagicContext';

const MagicOverlay = () => {
    const { isFlashActive, isSplashActive, isExitSplashActive } = useMagic();

    return (
        <AnimatePresence>
            {/* 1. LUMOS FLASH */}
            {isFlashActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="fixed inset-0 z-[100] bg-white mix-blend-overlay pointer-events-none"
                />
            )}

            {/* 2. REVELIO SPLASH SCREEN */}
            {isSplashActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background Aura */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 0.5 }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px]"
                    />
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 0.3 }}
                        transition={{ duration: 3, delay: 0.2, ease: "easeOut" }}
                        className="absolute w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[80px]"
                    />

                    {/* Cinematic Text */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative z-10 text-center"
                    >
                        <div className="flex justify-center mb-6">
                            <Sparkles className="w-12 h-12 text-amber-400 animate-pulse" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif text-amber-100 tracking-widest uppercase mb-4 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                            The Veil Has Been Lifted
                        </h1>
                        <p className="text-purple-200/60 font-mono tracking-widest text-sm uppercase">
                            Welcome to the Wizarding World
                        </p>
                    </motion.div>
                </motion.div>
            )}

            {/* 3. DIAGON ALLEY WALLS (NOX/RESET) */}
            {/* 3. EXIT SPLASH (MISCHIEF MANAGED) */}
            {isExitSplashActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Cinematic Text */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="text-center relative z-10"
                    >
                        <h1 className="text-4xl md:text-7xl font-serif text-slate-300 tracking-[0.2em] uppercase mb-4 opacity-80 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                            Mischief Managed
                        </h1>
                        <p className="text-purple-400/50 font-mono tracking-widest text-sm uppercase">
                            The Veil Closes
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MagicOverlay;
