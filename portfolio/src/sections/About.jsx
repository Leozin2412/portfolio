import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="p-8 md:p-12 w-full py-16 flex flex-col justify-center min-h-[80vh]">
      <h2 className="text-[#00ff41] text-2xl font-mono mb-8">{t('about.title')}</h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-48 h-48 rounded-xl overflow-hidden shrink-0 border-2 border-zinc-700 shadow-lg">
          <img 
            src="/profile.jpg" 
            alt="Leonardo Monteiro" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 space-y-6">
          <div className="bg-[#1e1e1e] p-6 rounded-lg border border-zinc-800 text-zinc-300 leading-relaxed font-mono text-sm">
            {t('about.bio')}
          </div>
          
          <div className="bg-[#1e1e1e] p-6 rounded-lg border border-zinc-800 font-mono text-sm">
            <h3 className="text-purple-400 mb-4 text-lg">
              {t('about.education').split('\n')[0]}
            </h3>
            <ul className="space-y-3 text-zinc-300">
              {t('about.education').split('\n').slice(1).map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#00ff41]">▹</span>
                  <span dangerouslySetInnerHTML={{__html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-zinc-100">$1</strong>')}} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

