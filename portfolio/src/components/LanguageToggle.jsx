import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-zinc-700 transition-colors text-xs"
      title="Toggle Language"
    >
      <span className={`opacity-${language === 'en' ? '100' : '50'} grayscale-${language === 'en' ? '0' : '100'}`}>🇺🇸</span>
      <span className="text-zinc-500">/</span>
      <span className={`opacity-${language === 'pt' ? '100' : '50'} grayscale-${language === 'pt' ? '0' : '100'}`}>🇧🇷</span>
    </button>
  );
};
