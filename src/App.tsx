import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { MagneticCursor } from './components/MagneticCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { ImpactSection } from './components/ImpactSection';
import { ActionSection } from './components/ActionSection';
import { Footer } from './components/Footer';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // GSAP scroll trigger setup (if needed for additional effects)
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.body.style.setProperty('--scroll', scrolled.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative overflow-x-hidden" style={{ fontFamily: 'var(--font-sans)' }}>
      <ScrollProgress />
      <MagneticCursor />
      <ScrollToTop />
      <Header />
      
      <main>
        <HeroSection />
        <StorySection />
        <ImpactSection />
        <ActionSection />
      </main>

      <Footer />

      {/* Accessibility: Skip to main content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
      >
        Skip to main content
      </a>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}