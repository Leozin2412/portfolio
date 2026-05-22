import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, FileDown } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="p-8 md:p-12 w-full py-16 flex flex-col justify-center min-h-[80vh] flex flex-col items-center justify-center">
      <h2 className="text-[#00ff41] text-2xl font-mono mb-12">{t('contact.title')}</h2>
      
      <div className="flex flex-col gap-6 w-full max-w-sm">
        <a 
          href="mailto:leonardommonteiro2412@outlook.com"
          className="flex items-center justify-center gap-3 bg-[#1e1e1e] hover:bg-[#00ff41] hover:text-[#0d1117] text-zinc-300 transition-colors py-4 px-6 rounded-lg border border-zinc-700 hover:border-[#00ff41] font-bold text-lg"
        >
          <Mail size={24} />
          {t('contact.emailButton')}
        </a>
        
        <div className="grid grid-cols-2 gap-4">
          <a 
            href="https://www.linkedin.com/in/leonardo-monteiro22"
            target="_blank" rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 bg-[#1e1e1e] hover:bg-[#0077b5] hover:text-white text-zinc-300 transition-colors py-4 px-6 rounded-lg border border-zinc-700"
          >
            <FaLinkedin size={28} />
            <span className="text-sm font-medium">{t('contact.linkedin')}</span>
          </a>
          
          <a 
            href="https://github.com/Leozin2412"
            target="_blank" rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 bg-[#1e1e1e] hover:bg-zinc-200 hover:text-black text-zinc-300 transition-colors py-4 px-6 rounded-lg border border-zinc-700"
          >
            <FaGithub size={28} />
            <span className="text-sm font-medium">{t('contact.github')}</span>
          </a>
        </div>
        
        <a 
          href="/curriculo.pdf"
          download="Leonardo_Monteiro_CV.pdf"
          className="flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors py-4 px-6 rounded-lg border border-zinc-700 mt-4"
        >
          <FileDown size={20} />
          {t('contact.resumeButton')}
        </a>
      </div>
    </div>
  );
};

