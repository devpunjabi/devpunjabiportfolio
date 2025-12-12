import React from 'react';
import { Link } from 'react-router-dom';
import { PageData } from '../types';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ArtSectionProps {
    data: PageData;
    isFirst?: boolean;
}

// Sub-component for each art section (Paintings, Sculptures, Digital 3D)
const ArtSection: React.FC<ArtSectionProps> = ({ data, isFirst }) => {
    return (
        <div className={`px-6 md:px-12 lg:px-20 max-w-[90rem] mx-auto ${isFirst ? 'pt-40' : 'pt-32'} pb-20 border-b border-stone-200 last:border-0`}>
            {/* Section Header */}
            <div className="mb-16">
                <h2 className="text-stone-500 font-medium tracking-widest uppercase text-sm md:text-base mb-6 pl-1">
                    {data.subtitle}
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-stone-900 leading-[0.9] tracking-tight mb-8">
                    {data.title}
                </h1>
                <p className="text-xl md:text-2xl font-serif leading-relaxed text-stone-800 max-w-3xl">
                    {data.description}
                </p>
            </div>

            {/* Grid of Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.gallery.map((item) => (
                    <div key={item.id} className="group flex flex-col gap-4">
                        <div className="aspect-[3/4] overflow-hidden rounded-xl bg-stone-200 shadow-md transition-shadow hover:shadow-xl">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-medium text-stone-900">{item.title}</h3>
                            {item.description && (
                                <p className="text-stone-500 text-sm mt-1">{item.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Arts: React.FC = () => {
    const { content, navigation, t } = useLanguage();

    const sections = [
        content['paintings'],
        content['sculptures'],
        content['digital-3d']
    ];

    const currentNavId = 'arts';
    const currentIndex = navigation.findIndex(item => item.id === currentNavId);
    const nextItem = currentIndex !== -1 ? navigation[(currentIndex + 1) % navigation.length] : null;

    return (
        <div className="bg-[#fafaf9] min-h-screen">
            {sections.map((sectionData, index) => (
                sectionData && <ArtSection key={sectionData.id} data={sectionData} isFirst={index === 0} />
            ))}

            {/* Navigation to next page */}
            {nextItem && (
                <div className="py-40 flex items-center justify-center">
                    <Link to={nextItem.path} className="group relative inline-flex flex-col items-center">
                        <span className="text-sm font-bold tracking-widest uppercase text-stone-400 mb-4 group-hover:text-stone-600 transition-colors">{t('upNext')}</span>
                        <span className="text-5xl md:text-7xl font-serif text-stone-300 group-hover:text-stone-900 transition-colors duration-500">
                            {nextItem.label}
                        </span>
                        <div className="mt-8 w-16 h-16 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-300">
                            <ArrowRight className="text-stone-400 group-hover:text-white transition-colors" />
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Arts;
