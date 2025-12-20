import React, { Suspense } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Global 3D background
const HeroScene = React.lazy(() => import('./three/HeroScene'));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 relative">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      
      <Navbar />
      
      <main className="flex-grow z-10 relative">
        <div className="w-full">
          {children}
        </div>
      </main>
      
      <div className="z-10 relative">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;