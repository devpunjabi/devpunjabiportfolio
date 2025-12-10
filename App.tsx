
import React, { useEffect } from 'react';
import { HashRouter, MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PageLayout from './components/PageLayout';
import Contact from './components/Contact';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Component that consumes context to define routes with dynamic content
const AppRoutes = () => {
  const { content, t } = useLanguage();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Map specific routes based on context content */}
      <Route path="/personal-bio" element={<PageLayout data={content['personal-bio']} />} />
      <Route path="/career-bio" element={<PageLayout data={content['career-bio']} />} />
      <Route path="/taekwondo" element={<PageLayout data={content['taekwondo']} />} />
      <Route path="/paintings" element={<PageLayout data={content['paintings']} />} />
      <Route path="/sculptures" element={<PageLayout data={content['sculptures']} />} />
      <Route path="/digital-3d" element={<PageLayout data={content['digital-3d']} />} />
      <Route path="/fitness" element={<PageLayout data={content['fitness']} />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

// Footer also needs translation
const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 font-serif text-sm">
          &copy; {new Date().getFullYear()} {t('rightsReserved')}
        </p>
        <div className="mt-4 flex justify-center space-x-6">
           <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
           <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
           <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  // Automatically detect if we are in a restricted preview environment (blob URL)
  // or a standard production environment.
  // Preview = MemoryRouter (avoids security errors and crashes)
  // Production = HashRouter (supports GitHub Pages navigation)
  const isPreview = window.location.protocol === 'blob:' || window.location.href.includes('blob:');
  const Router = isPreview ? MemoryRouter : HashRouter;

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
