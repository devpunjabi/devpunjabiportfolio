
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { PageData, NavItem } from '../types';
import { PAGES_DATA_EN, PAGES_DATA_DE, NAVIGATION_EN, NAVIGATION_DE, UI_TEXT } from '../constants';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  content: Record<string, PageData>; // Dictionary of page data for current lang
  navigation: NavItem[];
  t: (key: keyof typeof UI_TEXT.en) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'de' : 'en'));
  };

  const content = language === 'en' ? PAGES_DATA_EN : PAGES_DATA_DE;
  const navigation = language === 'en' ? NAVIGATION_EN : NAVIGATION_DE;

  const t = (key: keyof typeof UI_TEXT.en): string => {
    return UI_TEXT[language][key] || UI_TEXT['en'][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, content, navigation, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
