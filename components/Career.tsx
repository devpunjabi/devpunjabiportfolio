import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Calendar, Terminal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Career: React.FC = () => {
  const { content, navigation, t } = useLanguage();
  const data = content['career-bio'];

  const [activeImageId, setActiveImageId] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Create a ref to track element offsets for active highlighting
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (data) {
      setActiveImageId('hero');
    }
  }, [data]);

  // Handle scroll progress and active section highlighting based on viewport intersection
  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check which section is currently centered in viewport
      if (!data) return;
      
      const viewportMiddle = window.scrollY + window.innerHeight / 2.2;
      
      // Check if we are near the top
      if (window.scrollY < 150) {
        setActiveImageId('hero');
        return;
      }

      let currentActive = 'hero';
      data.gallery.forEach((item) => {
        const el = sectionRefs.current[item.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          const absoluteTop = window.scrollY + rect.top;
          if (viewportMiddle >= absoluteTop) {
            currentActive = item.id;
          }
        }
      });
      setActiveImageId(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data]);

  if (!data) return null;

  const currentNavId = 'career-bio';
  const currentIndex = navigation.findIndex(item => item.id === currentNavId);
  const nextItem = currentIndex !== -1 ? navigation[(currentIndex + 1) % navigation.length] : null;

  const allImages = [
    { id: 'hero', imageUrl: data.heroImage, title: data.title },
    ...data.gallery.map(item => ({ id: item.id, imageUrl: item.imageUrl, title: item.title }))
  ];

  return (
    <div className="min-h-screen bg-stone-50 relative">
      {/* Top Scroll Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-stone-900 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Large Title Header */}
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

      {/* Split Interactive Timeline Layout */}
      <div className="flex flex-col lg:flex-row max-w-[95rem] mx-auto">

        {/* LEFT COLUMN: Sticky Exhibition Frame (Desktop) */}
        <div className="hidden lg:flex w-[38%] h-screen sticky top-0 p-8 xl:p-12 z-10 flex-col justify-center">
          <div className="w-full h-[65vh] rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-blue-600/20 shadow-blue-900/[0.04] bg-stone-100">
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

        {/* RIGHT COLUMN: Scrolling Timeline Guide */}
        <div className="w-full lg:w-[62%] flex flex-col px-6 md:px-12 lg:pl-16 lg:pr-20 pb-32">

          {/* Core Professional Overview Block */}
          <div
            className="min-h-[50vh] lg:min-h-[60vh] flex flex-col justify-center py-16 animate-slide-up animate-delay-100"
            onMouseEnter={() => setActiveImageId('hero')}
          >
            {/* Mobile Hero Image */}
            <div className="lg:hidden w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-xl border border-stone-200/50 bg-stone-100">
              <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed text-stone-800">
              {data.description}
            </p>
            <div className="w-16 h-[2px] bg-stone-300 mt-10 rounded-full"></div>
          </div>

          {/* Interactive Timeline Core Container */}
          <div className="relative pl-8 md:pl-12 border-l border-stone-200 space-y-24">
            
            {/* Active timeline scroll indicator */}
            <div 
              className="absolute left-[-1px] top-0 w-[2px] bg-stone-900 origin-top transition-all duration-300 ease-out" 
              style={{ height: `${Math.min(scrollProgress * 1.3, 100)}%` }}
            />

            {data.gallery.map((item, index) => {
              const isActive = activeImageId === item.id;
              
              return (
                <div
                  key={item.id}
                  ref={(el) => { sectionRefs.current[item.id] = el; }}
                  className={`relative transition-all duration-700 ${
                    isActive ? 'opacity-100 translate-x-2' : 'opacity-65 translate-x-0'
                  }`}
                  onMouseEnter={() => setActiveImageId(item.id)}
                >
                  {/* Timeline bullet node */}
                  <span className={`absolute left-[-41px] md:left-[-57px] top-1.5 w-5 h-5 md:w-7 md:h-7 rounded-full border-2 flex items-center justify-center transition-all duration-500 bg-white ${
                    isActive 
                      ? 'border-stone-900 shadow-[0_0_12px_rgba(0,0,0,0.15)] scale-110' 
                      : 'border-stone-300 scale-90'
                  }`}>
                    <Briefcase size={isActive ? 11 : 9} className={isActive ? 'text-stone-900' : 'text-stone-300'} />
                  </span>

                  {/* Mobile Experience Card Image */}
                  <div className="lg:hidden w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-lg border border-stone-200/50 bg-stone-100">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  </div>

                  {/* Timeline Role Detail Card */}
                  <div className={`p-6 md:p-8 rounded-3xl border transition-all duration-500 bg-white ${
                    isActive 
                      ? 'border-stone-900/40 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)]' 
                      : 'border-stone-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
                  }`}>
                    <div className="flex flex-col gap-4">
                      {/* Meta dates and headers */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-stone-400">
                        <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-stone-400">
                          <Calendar size={11} />
                          {item.subtitle?.split('|')[0]?.trim() || 'Date'}
                        </span>
                        <span className="text-stone-300">|</span>
                        <span>{item.subtitle?.split('|')[1]?.trim() || 'Field'}</span>
                      </div>

                      {/* Job Title */}
                      <h3 className="text-2xl md:text-3xl font-serif font-light text-stone-900 leading-tight">
                        {item.title}
                      </h3>

                      {/* Experience description */}
                      {item.description && (
                        <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed mt-2">
                          {item.description}
                        </p>
                      )}

                      {/* Technology Tag Chips */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-stone-100">
                          {item.tags.map((tag) => (
                            <span 
                              key={tag}
                              className={`text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full transition-all duration-300 ${
                                isActive 
                                  ? 'bg-stone-950 text-stone-50' 
                                  : 'bg-stone-100 text-stone-500'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Staggered Navigation Transition */}
          {nextItem && (
            <div className="min-h-[40vh] flex items-center justify-center pt-20">
              <Link to={nextItem.path} className="group relative inline-flex flex-col items-center">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-stone-400 mb-4 group-hover:text-stone-600 transition-colors">
                  {t('upNext')}
                </span>
                
                <span className="text-4xl md:text-6xl font-serif font-light text-stone-300 group-hover:text-stone-900 transition-all duration-700 italic select-none">
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

export default Career;
