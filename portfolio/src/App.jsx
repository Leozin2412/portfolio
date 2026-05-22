import React, { useState, useEffect, useRef } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { MacWindow } from './components/MacWindow';
import { Sidebar } from './components/Sidebar';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Timeline } from './sections/Timeline';
import { Certificates } from './sections/Certificates';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Loading } from './components/Loading';

const AppContent = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { t } = useLanguage();
  const mainRef = useRef(null);

  const sections = ['home', 'about', 'timeline', 'certificates', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;
      const scrollPosition = mainRef.current.scrollTop + 150; // offset for detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) {
          if (activeTab !== section) setActiveTab(section);
          break;
        }
      }
    };
    
    const mainEl = mainRef.current;
    if (mainEl) {
      mainEl.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (mainEl) mainEl.removeEventListener('scroll', handleScroll);
    }
  }, [activeTab]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el && mainRef.current) {
       mainRef.current.scrollTo({
         top: el.offsetTop,
         behavior: 'smooth'
       });
       setActiveTab(id);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#0d1117]">
      <MacWindow activeTabName={t(`nav.${activeTab}`)}>
        <Sidebar activeTab={activeTab} onNavigate={scrollToSection} />
        
        {/* Mobile Nav Header */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#0d1117] relative">
          <div className="md:hidden flex overflow-x-auto bg-[#1e1e1e] border-b border-[#2d2d2d] shrink-0 sticky top-0 z-10">
            {sections.map(tab => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab 
                    ? 'border-[#00ff41] text-[#00ff41]' 
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {t(`nav.${tab}`)}
              </button>
            ))}
          </div>
          
          <main ref={mainRef} className="flex-1 overflow-y-auto scroll-smooth relative h-full">
            <section id="home" className="border-b border-zinc-800/50"><Home /></section>
            <section id="about" className="border-b border-zinc-800/50"><About /></section>
            <section id="timeline" className="border-b border-zinc-800/50"><Timeline /></section>
            <section id="certificates" className="border-b border-zinc-800/50"><Certificates /></section>
            <section id="projects" className="border-b border-zinc-800/50"><Projects /></section>
            <section id="contact"><Contact /></section>
          </main>
        </div>
      </MacWindow>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />;
  }

  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
