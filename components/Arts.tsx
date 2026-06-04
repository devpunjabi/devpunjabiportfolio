import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageData, GalleryItem } from '../types';
import { ArrowRight, X, ChevronLeft, ChevronRight, Maximize2, ZoomIn, ZoomOut } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface EnhancedGalleryItem extends GalleryItem {
  category: 'paintings' | 'sculptures' | 'digital-3d';
  categoryLabelEn: string;
  categoryLabelDe: string;
}

const Arts: React.FC = () => {
  const { content, navigation, t, language } = useLanguage();

  const [activeTab, setActiveTab] = useState<'all' | 'paintings' | 'sculptures' | 'digital-3d'>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState(1);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNextItem();
      if (e.key === 'ArrowLeft') handlePrevItem();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const paintings = content['paintings'];
  const sculptures = content['sculptures'];
  const digital3D = content['digital-3d'];

  if (!paintings || !sculptures || !digital3D) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-stone-400 font-mono text-xs uppercase tracking-widest">Loading Art Exhibition...</p>
      </div>
    );
  }

  // Map raw data into a flat, well-typed list of items
  const mapItems = (data: PageData, cat: 'paintings' | 'sculptures' | 'digital-3d', labelEn: string, labelDe: string): EnhancedGalleryItem[] => {
    return data.gallery.map(item => ({
      ...item,
      category: cat,
      categoryLabelEn: labelEn,
      categoryLabelDe: labelDe
    }));
  };

  const allItems: EnhancedGalleryItem[] = [
    ...mapItems(paintings, 'paintings', 'Painting', 'Gemälde'),
    ...mapItems(sculptures, 'sculptures', 'Sculpture', 'Skulptur'),
    ...mapItems(digital3D, 'digital-3d', 'Digital 3D', 'Digital 3D')
  ];

  // Filter items based on active tab
  const filteredItems = allItems.filter(item => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  // Lightbox controllers
  const handleOpenLightbox = (index: number) => {
    setSelectedItemIndex(index);
    setZoomScale(1);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setSelectedItemIndex(null);
    setZoomScale(1);
    document.body.style.overflow = '';
  };

  const handleNextItem = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    setZoomScale(1);
  };

  const handlePrevItem = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
    setZoomScale(1);
  };

  const handleZoomIn = () => {
    setZoomScale(prev => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = () => {
    setZoomScale(prev => Math.max(prev - 0.25, 0.75));
  };

  const currentNavId = 'arts';
  const currentIndex = navigation.findIndex(item => item.id === currentNavId);
  const nextItem = currentIndex !== -1 ? navigation[(currentIndex + 1) % navigation.length] : null;

  const currentArtwork = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <div className="bg-stone-50 min-h-screen relative pb-32">
      
      {/* Header */}
      <div className="pt-36 pb-12 px-6 md:px-12 lg:px-20 max-w-[90rem] mx-auto animate-slide-up">
        <div>
          <span className="text-[10px] font-bold tracking-[0.25em] text-stone-400 uppercase mb-4 block pl-1">
            {language === 'en' ? 'CREATIVE GALLERY' : 'KREATIVE GALERIE'}
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-light text-stone-900 leading-[0.95] tracking-tight">
            {language === 'en' ? 'Exhibitions & Form' : 'Ausstellungen & Form'}
          </h1>
        </div>
      </div>

      {/* Modern High-End Exhibition Filter Tabs */}
      <div className="px-6 md:px-12 lg:px-20 max-w-[90rem] mx-auto mb-16 animate-slide-up animate-delay-100">
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
          {[
            { id: 'all', labelEn: 'All Work', labelDe: 'Alle Arbeiten' },
            { id: 'paintings', labelEn: 'Paintings', labelDe: 'Gemälde' },
            { id: 'sculptures', labelEn: 'Sculptures', labelDe: 'Skulpturen' },
            { id: 'digital-3d', labelEn: 'Digital 3D', labelDe: 'Digital 3D' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setSelectedItemIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-stone-900 text-stone-50 shadow-md scale-105'
                  : 'text-stone-400 hover:text-stone-700 bg-transparent'
              }`}
            >
              {language === 'en' ? tab.labelEn : tab.labelDe}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Artworks - Immersive Gallery Layout */}
      <div className="px-6 md:px-12 lg:px-20 max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group flex flex-col gap-4 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${(index % 3) * 100}ms` }}
            >
              {/* Image Frame Container */}
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-100 border border-stone-200/40 shadow-sm relative group">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:brightness-[0.85]"
                />
                
                {/* Hover overlay metadata */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-stone-300 uppercase mb-2">
                    {language === 'en' ? item.categoryLabelEn : item.categoryLabelDe}
                  </span>
                  <h3 className="text-2xl font-serif text-white leading-tight mb-2">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs text-stone-200 font-bold uppercase tracking-wider">
                    {language === 'en' ? 'View Exhibition' : 'Ausstellung ansehen'}
                    <Maximize2 size={10} />
                  </span>
                </div>
              </div>

              {/* Text metadata under grid item (minimalist layout) */}
              <div className="px-2 py-1 flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-serif font-light text-stone-900 leading-tight">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-xs font-mono text-stone-400 mt-1 uppercase tracking-wider">
                      {item.description.split(',')[0]}
                    </p>
                  )}
                </div>
                <span className="text-[9px] font-mono text-stone-300 border border-stone-200 px-2.5 py-1 rounded-full uppercase tracking-widest">
                  {language === 'en' ? item.categoryLabelEn : item.categoryLabelDe}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Immersive Lightbox Modal Container */}
      {selectedItemIndex !== null && currentArtwork && (
        <div className="fixed inset-0 z-50 bg-stone-950/96 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-10 select-none animate-fade-in">
          
          {/* TOP CONTROLS */}
          <div className="flex justify-between items-center z-10 w-full">
            {/* Index Counter */}
            <div className="font-mono text-xs text-stone-400 tracking-wider">
              {selectedItemIndex + 1} / {filteredItems.length}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleZoomOut}
                className="p-2.5 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut size={16} />
              </button>
              <button
                onClick={handleZoomIn}
                className="p-2.5 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn size={16} />
              </button>
              <button
                onClick={handleCloseLightbox}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-stone-300 hover:text-white border border-white/10 transition-all duration-300 cursor-pointer"
                title="Close (ESC)"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* MAIN VISUAL EXHIBITION STAGE */}
          <div className="flex-grow flex items-center justify-between relative max-w-7xl mx-auto w-full h-[65vh]">
            
            {/* Prev Trigger */}
            <button
              onClick={handlePrevItem}
              className="absolute left-0 md:left-4 z-10 p-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-stone-300 hover:text-white transition-all cursor-pointer shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Zoomable Image View */}
            <div className="w-full h-full flex items-center justify-center p-4 overflow-hidden rounded-[2rem]">
              <img
                src={currentArtwork.imageUrl}
                alt={currentArtwork.title}
                className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl transition-transform duration-300"
                style={{ transform: `scale(${zoomScale})` }}
              />
            </div>

            {/* Next Trigger */}
            <button
              onClick={handleNextItem}
              className="absolute right-0 md:right-4 z-10 p-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-stone-300 hover:text-white transition-all cursor-pointer shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* BOTTOM METADATA & REFLECTION */}
          <div className="z-10 w-full max-w-3xl mx-auto text-center pt-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-stone-400 uppercase block mb-1">
              {language === 'en' ? currentArtwork.categoryLabelEn : currentArtwork.categoryLabelDe}
            </span>
            
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white leading-tight mb-2">
              {currentArtwork.title}
            </h2>
            
            {currentArtwork.description && (
              <p className="text-sm md:text-base text-stone-300 font-light leading-relaxed max-w-xl mx-auto">
                {currentArtwork.description}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Up Next Page Navigation */}
      {nextItem && selectedItemIndex === null && (
        <div className="py-24 flex items-center justify-center">
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
  );
};

export default Arts;
