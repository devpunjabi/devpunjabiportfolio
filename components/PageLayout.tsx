import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageData } from '../types';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  data?: PageData;
}

const PageLayout: React.FC<Props> = ({ data }) => {
  const { t, navigation } = useLanguage();
  const [activeImageId, setActiveImageId] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Reset active image when navigating to another layout
  useEffect(() => {
    if (data) {
      setActiveImageId('hero');
    }
  }, [data]);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-stone-400 uppercase tracking-widest font-mono text-xs">Content not found</p>
      </div>
    );
  }

  const currentIndex = navigation.findIndex(item => item.id === data.id);
  const nextItem = currentIndex !== -1 ? navigation[(currentIndex + 1) % navigation.length] : null;

  // Combine hero and gallery images for preloading and smooth layered transitions
  const allImages = [
    { id: 'hero', imageUrl: data.heroImage, title: data.title },
    ...data.gallery.map(item => ({ id: item.id, imageUrl: item.imageUrl, title: item.title }))
  ];

  // Dynamic theme border colors for ambient touch
  const getThemeColorClass = () => {
    switch (data.id) {
      case 'personal-bio': return 'border-amber-600/20 shadow-amber-900/[0.04]';
      case 'taekwondo': return 'border-red-600/20 shadow-red-900/[0.04]';
      case 'fitness': return 'border-teal-600/20 shadow-teal-900/[0.04]';
      default: return 'border-stone-200/50 shadow-stone-900/[0.04]';
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 relative">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-stone-900 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Exhibition Header */}
      <div className="pt-36 pb-16 px-6 md:px-12 lg:px-20 max-w-[90rem] mx-auto animate-slide-up">
        <div>
          <span className="text-[10px] font-bold tracking-[0.25em] text-stone-400 uppercase mb-4 block pl-1">
            {data.subtitle}
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-light text-stone-900 leading-[0.95] tracking-tight">
            {data.title}
          </h1>
        </div>
      </div>

      {/* Split Interactive Exhibition Layout */}
      <div className="flex flex-col lg:flex-row max-w-[95rem] mx-auto">
        
        {/* LEFT COLUMN: Sticky Exhibition Frame (Desktop) */}
        <div className="hidden lg:flex w-[38%] h-screen sticky top-0 p-8 xl:p-12 z-10 flex-col justify-center">
          <div className={`w-full h-[65vh] rounded-[2.5rem] overflow-hidden shadow-2xl relative border ${getThemeColorClass()} bg-stone-100`}>
            {allImages.map((img) => (
              <img
                key={img.id}
                src={img.imageUrl}
                alt={img.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
                  activeImageId === img.id
                    ? 'opacity-100 scale-100 filter-none'
                    : 'opacity-0 scale-105 blur-sm'
                }`}
              />
            ))}
            {/* Elegant vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 via-transparent to-stone-900/5 pointer-events-none" />
          </div>
        </div>

        {/* RIGHT COLUMN: Scrollytelling Guide Panel */}
        <div className="w-full lg:w-[62%] flex flex-col px-6 md:px-12 lg:pl-16 lg:pr-20 pb-32">
          
          {/* Main Introduction Block */}
          <div
            className="min-h-[50vh] lg:min-h-[70vh] flex flex-col justify-center py-16 animate-slide-up animate-delay-100"
            onMouseEnter={() => setActiveImageId('hero')}
          >
            {/* Mobile Hero Image */}
            <div className="lg:hidden w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-xl border border-stone-200/50 bg-stone-100">
              <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed text-stone-800">
              {data.description}
            </p>
            <div className="w-16 h-[2px] bg-stone-300 mt-10 rounded-full" />
          </div>

          {/* Exhibition Chapters */}
          <div className="space-y-24 lg:space-y-12">
            {data.gallery.map((item, index) => (
              <div
                key={item.id}
                className="min-h-[45vh] lg:min-h-[75vh] flex flex-col justify-center py-8"
                onMouseEnter={() => setActiveImageId(item.id)}
              >
                {/* Mobile Gallery Image */}
                <div className="lg:hidden w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-lg border border-stone-200/50 bg-stone-100">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col gap-6">
                  <span className="text-stone-300 font-mono text-xs tracking-widest">
                    SECTION 0{index + 1}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-stone-900 tracking-tight">
                    {item.title}
                  </h3>
                  
                  {item.description && (
                    <div 
                      className="text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-xl [&_a]:text-blue-600 [&_a]:underline [&_a]:hover:text-blue-800 transition-colors duration-300"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Staggered Navigation Transition */}
          {nextItem && (
            <div className="min-h-[50vh] flex items-center justify-center pt-20">
              <Link to={nextItem.path} className="group relative inline-flex flex-col items-center">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-stone-400 mb-4 group-hover:text-stone-600 transition-colors">
                  {t('upNext')}
                </span>
                
                <span className="text-4xl md:text-6xl font-serif font-light text-stone-300 group-hover:text-stone-900 transition-all duration-700 select-none italic group-hover:not-italic">
                  {nextItem.label}
                </span>

                <div className="mt-8 w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center bg-white shadow-sm group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:shadow-md transition-all duration-500 cursor-pointer">
                  <ArrowRight className="text-stone-400 group-hover:text-white transition-colors duration-300" size={18} />
                </div>
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PageLayout;
