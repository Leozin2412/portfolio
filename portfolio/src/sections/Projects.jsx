import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FolderGit2 } from 'lucide-react';

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <div className="p-8 md:p-12 w-full py-16 flex flex-col justify-center min-h-[80vh] flex flex-col items-center justify-center text-center">
      <FolderGit2 size={64} className="text-orange-500 mb-6 opacity-50" />
      <h2 className="text-[#00ff41] text-2xl font-mono mb-4">{t('projects.title')}</h2>
      <p className="text-zinc-400 text-lg font-mono bg-[#1e1e1e] p-6 rounded-lg border border-zinc-800 border-dashed">
        {t('projects.comingSoon')}
      </p>
    </div>
  );
};

