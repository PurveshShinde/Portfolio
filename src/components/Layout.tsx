import React, { Suspense, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Terminal from './Terminal';
import { MagicProvider, useMagic } from '../context/MagicContext';
import MagicOverlay from './MagicOverlay';

// Global 3D background
const HeroScene = React.lazy(() => import('./three/HeroScene'));

interface LayoutProps {
  children: React.ReactNode;
}

// Inner component to handle valid context usage
const LayoutContent = ({ children }: LayoutProps) => {
  const { isWizardMode } = useMagic();

  // ✅ Apply Global Theme Class to Body
  useEffect(() => {
    if (isWizardMode) {
      document.documentElement.classList.add('wizard-theme');
    } else {
      document.documentElement.classList.remove('wizard-theme');
    }
  }, [isWizardMode]);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-50 selection:bg-emerald-500/30 selection:text-emerald-200 transition-colors duration-1000">
      <Suspense fallback={null}>
        <div className="fixed inset-0 z-0">
          <HeroScene />
        </div>
      </Suspense>

      {/* ✅ Global Visuals */}
      <MagicOverlay />

      <Navbar />

      <main className="flex-grow z-10 relative">
        <div className="w-full">
          {children}
        </div>
      </main>

      <div className="z-10 relative">
        <Footer />
      </div>

      {/* ✅ GLOBAL PERSISTENT TERMINAL */}
      <Terminal />
    </div>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <MagicProvider>
      <LayoutContent>{children}</LayoutContent>
    </MagicProvider>
  );
};

export default Layout;