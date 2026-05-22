import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileCode2, User, Clock, Award, FolderGit2, Mail } from 'lucide-react';

export const Sidebar = ({ activeTab, onNavigate }) => {
  const { t } = useLanguage();

  const tabs = [
    { id: 'home', icon: FileCode2, label: t('nav.home'), color: 'text-yellow-400' },
    { id: 'about', icon: User, label: t('nav.about'), color: 'text-blue-400' },
    { id: 'timeline', icon: Clock, label: t('nav.timeline'), color: 'text-green-400' },
    { id: 'certificates', icon: Award, label: t('nav.certificates'), color: 'text-purple-400' },
    { id: 'projects', icon: FolderGit2, label: t('nav.projects'), color: 'text-orange-400' },
    { id: 'contact', icon: Mail, label: t('nav.contact'), color: 'text-rose-400' },
  ];

  return (
    <div className="w-64 bg-[#1e1e1e] border-r border-[#2d2d2d] flex flex-col hidden md:flex h-full shrink-0">
      <div className="p-3 text-xs text-zinc-500 uppercase tracking-wider font-semibold">
        Explorer
      </div>
      <div className="flex-1 overflow-y-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`w-full flex items-center gap-2 px-4 py-1.5 text-sm transition-colors ${
                isActive ? 'bg-[#2d2d2d] text-zinc-100' : 'text-zinc-400 hover:bg-[#2a2a2a] hover:text-zinc-200'
              }`}
            >
              <Icon size={16} className={tab.color} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
