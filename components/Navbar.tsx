import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Circle, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { navigation, t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    if (isOpen) {
      document.body.style.overflow = '';
    }
  }, [location]);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isOpen
            ? 'pt-4 pb-4'
            : 'pt-8 pb-8'
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20">
          <div
            className={`flex justify-between items-center px-6 py-3.5 md:px-8 md:py-4 rounded-full transition-all duration-500 ${
              scrolled || isOpen
                ? 'bg-stone-50/75 backdrop-blur-xl border border-stone-200/50 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.06)]'
                : 'bg-transparent border border-transparent shadow-none'
            }`}
          >
            {/* Logo / Home link */}
            <NavLink to="/" className="flex items-center space-x-2.5 z-50 group">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-900 opacity-20 group-hover:opacity-45 transition-opacity"></span>
                <Circle className="relative inline-flex rounded-full h-3.5 w-3.5 fill-stone-900 text-stone-900" />
              </span>
              <span className="font-sans font-bold text-base tracking-tight text-stone-900">
                {t('welcome')}
              </span>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) => `
                    text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 relative py-1
                    ${isActive ? 'text-stone-900 nav-link-active' : 'text-stone-400 hover:text-stone-600'}
                    nav-link-underline
                  `}
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Elegant Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="ml-4 flex items-center space-x-1.5 text-[10px] font-bold tracking-widest text-stone-900 bg-white border border-stone-200 px-3.5 py-1.5 rounded-full hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900 shadow-sm transition-all duration-300 uppercase cursor-pointer"
                title="Change Language / Sprache wechseln"
              >
                <Globe size={11} className="transition-transform duration-500 group-hover:rotate-180" />
                <span>{language === 'en' ? 'DE' : 'EN'}</span>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-4 lg:hidden z-50">
              {/* Language Toggle (Mobile) */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-[10px] font-bold tracking-widest text-stone-900 border border-stone-200 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm"
              >
                <span>{language === 'en' ? 'DE' : 'EN'}</span>
              </button>

              {/* Mobile Toggle Button */}
              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none text-stone-900 p-1.5 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Elegant Staggered Layout */}
      <div
        className={`fixed inset-0 bg-stone-50/98 backdrop-blur-2xl z-40 lg:hidden flex flex-col justify-center px-8 md:px-16 h-screen transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <div className="flex flex-col space-y-6 max-w-lg">
          {navigation.map((item, index) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `
                text-4xl md:text-5xl font-serif font-light transition-all duration-500 block transform
                ${isActive ? 'text-stone-900 italic translate-x-4' : 'text-stone-400 hover:text-stone-600'}
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              `}
              style={{
                transitionDelay: `${index * 75}ms`
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Decorative Details inside mobile menu */}
        <div className={`absolute bottom-16 left-8 md:left-16 font-mono text-[10px] text-stone-400 tracking-widest transition-all duration-1000 delay-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {language === 'en' ? 'EST. 2025 — DEV PUNJABI' : 'GEGR. 2025 — DEV PUNJABI'}
        </div>
      </div>
    </>
  );
};

export default Navbar;
