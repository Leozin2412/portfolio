import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  SiJavascript, 
  SiPython, 
  SiMysql, 
  SiPostgresql, 
  SiPrisma, 
  SiGit, 
  SiGithub, 
  SiLinux, 
  SiNodedotjs
} from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';

export const Home = () => {
  const { t, language } = useLanguage();

  const skillIcons = [
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiPython, name: "Python" },
    { icon: SiMysql, name: "MySQL" },
    { icon: DiMsqlServer, name: "SQL Server" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiPrisma, name: "Prisma" },
    { icon: SiGit, name: "Git" },
    { icon: SiGithub, name: "GitHub" },
    { icon: SiLinux, name: "Linux" },
  ];

  return (
    <div className="p-8 md:p-12 h-full overflow-y-auto w-full">
      <div className="max-w-3xl">
        <p className="text-[#00ff41] text-xl font-mono mb-6">{t('home.greeting')}</p>
        
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-6 leading-tight">
          <span className="block">{t('home.name')}</span>
          <span className="text-zinc-500 text-2xl md:text-3xl mt-2 block">{t('home.role')}</span>
        </h1>
        
        <p className="text-lg text-zinc-400 mb-8 border-l-2 border-[#00ff41] pl-4 py-1">
          {t('home.catchphrase')}
        </p>

        <div className="bg-[#1a1a1a] rounded-lg p-6 border border-zinc-800">
          <div className="flex items-center gap-2 mb-6 text-[#00ff41] font-mono text-sm">
            <span>{t('home.prompt')}</span>
            <span className="text-zinc-300">whoami</span>
          </div>
          
          <div className="text-zinc-300 font-mono text-sm space-y-6">
            <p><span className="text-[#00ff41]">Location:</span> {t('home.location')}</p>
            
            <div className="space-y-4">
              <p className="text-[#00ff41] font-bold uppercase tracking-widest text-xs">
                {language === 'en' ? 'Stack & Tools' : 'Tecnologias'}
              </p>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-6">
                {skillIcons.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div key={idx} className="group relative flex flex-col items-center gap-2">
                      <Icon 
                        size={28} 
                        className="text-zinc-500 group-hover:text-[#00ff41] transition-colors duration-300" 
                      />
                      <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-zinc-500 whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
