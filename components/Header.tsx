
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-slate-900/80 backdrop-blur-md shadow-lg p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-1.5m-15-16.5H21L12 3 3 7.5h1.5m15 0v4.5" />
            </svg>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Room <span className="text-primary-400">Redesign</span> AI
          </h1>
        </div>
      </div>
    </header>
  );
};
