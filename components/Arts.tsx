import React, { useState } from 'react';
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
    const [activeImage, setActiveImage] = useState(data.heroImage);
    const [activeImageId, setActiveImageId] = useState('hero');

    return (
        <div className="relative">
            {/* Large Title Header - only for the section */}
            <div className={`px-6 md:px-12 lg:px-20 max-w-[90rem] mx-auto ${isFirst ? 'pt-40' : 'pt-20'} pb-20`}>
                <div>
                    <h2 className="text-stone-500 font-medium tracking-widest uppercase text-sm md:text-base mb-6 pl-1">
                        {data.subtitle}
                    </h2>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-stone-900 leading-[0.9] tracking-tight">
                        {data.title}
                    </h1>
                </div>
            </div>

            {/* Split View Layout */}
            <div className="flex flex-col lg:flex-row">

                {/* LEFT COLUMN: Sticky Image Display (Desktop) */}
                {/* We use sticky logic relative to this container */}
                <div className="hidden lg:block w-1/2 h-screen sticky top-0 p-8 xl:p-12 z-10 self-start">
                    <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl relative bg-stone-200">
                        <img
                            key={activeImageId}
                            src={activeImage}
                            alt="Display"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply pointer-events-none" />
                    </div>
                </div>

                {/* RIGHT COLUMN: Scrolling Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col px-6 md:px-12 lg:px-20 pb-40">

                    {/* Introduction Block */}
                    <div
                        className="min-h-[60vh] flex flex-col justify-center lg:pr-20 py-20"
                        onMouseEnter={() => {
                            setActiveImage(data.heroImage);
                            setActiveImageId('hero');
                        }}
                    >
                        {/* Mobile Hero Image */}
                        <div className="lg:hidden w-full aspect-[4/3] rounded-xl overflow-hidden mb-10 shadow-lg">
                            <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
                        </div>

                        <p className="text-2xl md:text-3xl font-serif leading-relaxed text-stone-800">
                            {data.description}
                        </p>
                        <div className="w-24 h-1 bg-stone-300 mt-12 rounded-full"></div>
                    </div>

                    {/* Gallery Items */}
                    <div className="space-y-32 lg:space-y-0">
                        {data.gallery.map((item, index) => (
                            <div
                                key={item.id}
                                className="min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center lg:pr-20"
                                onMouseEnter={() => {
                                    setActiveImage(item.imageUrl);
                                    setActiveImageId(item.id);
                                }}
                            >
                                {/* Mobile Image */}
                                <div className="lg:hidden w-full rounded-xl overflow-hidden mb-8 shadow-md">
                                    <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover" />
                                </div>

                                <div className="flex flex-col gap-6">
                                    <span className="text-stone-400 font-mono text-sm">0{index + 1}</span>
                                    <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900">
                                        {item.title}
                                    </h3>
                                    {item.description && (
                                        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-md">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Arts: React.FC = () => {
    const { content, navigation, t } = useLanguage();

    // Define the order of sections
    const sections = [
        content['paintings'],
        content['sculptures'],
        content['digital-3d']
    ];

    // We need to calculate what comes after 'Arts' in the main navigation
    // Since 'Arts' isn't a single ID in the types usually, we treat it as the current page.
    // We'll assume the Arts page replaces the individual ones in the nav order.
    const currentNavId = 'arts';
    const currentIndex = navigation.findIndex(item => item.id === currentNavId);
    const nextItem = currentIndex !== -1 ? navigation[(currentIndex + 1) % navigation.length] : null;

    return (
        <div className="bg-[#fafaf9]">
            {sections.map((sectionData, index) => (
                sectionData && <ArtSection key={sectionData.id} data={sectionData} isFirst={index === 0} />
            ))}

            {/* Navigation to next page in main sequence */}
            {nextItem && (
                <div className="min-h-[50vh] flex items-center justify-center pb-20">
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
