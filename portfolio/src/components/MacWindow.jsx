import React from 'react';
import { LanguageToggle } from './LanguageToggle';

export const MacWindow = ({ children, activeTabName }) => {
  return (
    <div className="w-full h-full bg-[#0d1117] flex flex-col overflow-hidden">
      {/* Mac OS Top Bar */}
      <div className="h-10 bg-[#2d2d2d] flex items-center px-4 justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-zinc-400 text-xs font-medium tracking-wide">
          Leonardo_Monteiro - {activeTabName}
        </div>
        <div className="flex items-center">
          <LanguageToggle />
        </div>
      </div>
      {/* Editor Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {children}
      </div>
    </div>
  );
};
