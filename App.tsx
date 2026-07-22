
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PageLayout from './components/PageLayout';
import Contact from './components/Contact';
import Arts from './components/Arts';
import Career from './components/Career';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // requestAnimationFrame ensures the layout is finalized before scrolling to top
    const handleScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    };
    const frameId = requestAnimationFrame(handleScroll);
    return () => cancelAnimationFrame(frameId);
  }, [pathname]);
  return null;
};

// Component that consumes context to define routes with dynamic content
const AppRoutes = () => {
  const { content } = useLanguage();
  const { pathname } = useLocation();

  return (
    // Keying on pathname replays the enter animation on every route change
    <div key={pathname} className="page-enter">
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Map specific routes based on context content */}
        <Route path="/personal-bio" element={<PageLayout data={content['personal-bio']} />} />
        <Route path="/career-bio" element={<Career />} />
        <Route path="/taekwondo" element={<PageLayout data={content['taekwondo']} />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/fitness" element={<PageLayout data={content['fitness']} />} />
        <Route path="/side-projects" element={<PageLayout data={content['side-projects']} />} />
        <Route path="/contact" element={<Contact />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

// Footer
const Footer = () => {
  const { t, language, navigation } = useLanguage();
  return (
    <footer className="bg-stone-950 text-stone-400 relative overflow-hidden">
      {/* Ambient glow inside footer */}
      <div className="ambient-blob top-[-40%] left-[20%] w-[500px] h-[500px] bg-amber-700/20 opacity-30" />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 relative">
        {/* Big call-to-action */}
        <div className="py-20 md:py-28 border-b border-stone-800/80">
          <Link to="/contact" className="group inline-flex flex-col">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-stone-500 mb-5">
              {t('reachOut')}
            </span>
            <span className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-stone-100 leading-tight flex items-center gap-4 group-hover:text-white transition-colors duration-500">
              {language === 'en' ? "Let's create together" : 'Lassen Sie uns gemeinsam erschaffen'}
              <span className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-stone-700 flex items-center justify-center shrink-0 group-hover:bg-stone-100 group-hover:border-stone-100 transition-all duration-500">
                <ArrowUpRight className="text-stone-400 group-hover:text-stone-950 transition-colors duration-500 group-hover:rotate-45" size={22} />
              </span>
            </span>
          </Link>
        </div>

        {/* Link columns */}
        <div className="py-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-xs font-bold tracking-[0.18em] uppercase text-stone-500 hover:text-stone-200 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex space-x-6">
            <a href="#" className="text-stone-500 hover:text-white transition-colors duration-300 text-sm">Twitter</a>
            <a href="#" className="text-stone-500 hover:text-white transition-colors duration-300 text-sm">LinkedIn</a>
            <a href="#" className="text-stone-500 hover:text-white transition-colors duration-300 text-sm">Instagram</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-stone-800/80 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-stone-600 font-mono text-[11px] tracking-widest">
            &copy; {new Date().getFullYear()} {t('rightsReserved')}
          </p>
          <p className="text-stone-600 font-mono text-[11px] tracking-widest">
            {t('designedBy')}
          </p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  // HashRouter is the most compatible router for static hosting like GitHub Pages
  // because it uses the URL hash (#) to manage routing, avoiding server-side configuration requirements.
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
