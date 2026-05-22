import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Timeline = () => {
  const { t } = useLanguage();
  const jobs = t('timeline.jobs') || [];

  return (
    <div className="p-8 md:p-12 w-full py-16 flex flex-col justify-center min-h-[80vh]">
      <h2 className="text-[#00ff41] text-2xl font-mono mb-8">{t('timeline.title')}</h2>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-700 before:to-transparent">
        {jobs.map((job, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline Marker */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0d1117] bg-zinc-800 group-hover:bg-[#00ff41] group-hover:border-[#00ff41]/30 text-zinc-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300">
            </div>
            
            {/* Content Box */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border border-zinc-800 bg-[#1e1e1e] hover:border-zinc-600 transition-colors">
              <div className="flex flex-col gap-1 mb-3">
                <span className="text-[#00ff41] font-mono text-sm">{job.year}</span>
                <h3 className="font-bold text-zinc-100 text-lg">{job.role}</h3>
                <span className="text-zinc-400 text-sm font-medium">{job.company}</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {job.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

