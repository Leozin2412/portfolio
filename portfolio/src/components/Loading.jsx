import React, { useState, useEffect } from 'react';

export const Loading = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  
  const bootSequence = [
    "BIOS check successful.",
    "Initializing kernel...",
    "Mounting file system...",
    "Loading Mac OS visual components...",
    "Starting React dev server...",
    "Establishing connection to backend...",
    "Fetching user data: Leonardo Monteiro...",
    "System Ready."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => onComplete(), 1000);
      }
    }, 250); // Speed of the typing effect

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="h-screen w-screen bg-[#0d1117] flex flex-col justify-center items-center p-8 font-mono text-sm sm:text-base cursor-none">
      <div className="max-w-2xl w-full">
        {lines.map((line, i) => (
          <div key={i} className="text-[#00ff41] mb-2 flex items-center gap-2">
            <span className="text-zinc-500">[{new Date().toISOString().split('T')[1].slice(0, 8)}]</span>
            <span>{line}</span>
            {i === lines.length - 1 && i !== bootSequence.length - 1 && (
              <span className="animate-pulse font-bold">_</span>
            )}
          </div>
        ))}
        {lines.length === bootSequence.length && (
          <div className="text-green-400 mt-6 animate-pulse text-lg font-bold">
            [OK] Welcome, Leonardo. Launching environment...
          </div>
        )}
      </div>
    </div>
  );
};
