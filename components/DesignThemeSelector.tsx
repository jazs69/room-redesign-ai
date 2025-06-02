
import React from 'react';
import { DesignTheme } from '../types';

interface DesignThemeSelectorProps {
  selectedTheme: DesignTheme;
  onThemeChange: (theme: DesignTheme) => void;
}

export const DesignThemeSelector: React.FC<DesignThemeSelectorProps> = ({ selectedTheme, onThemeChange }) => {
  const themes = Object.values(DesignTheme);

  return (
    <div className="space-y-2">
      <label htmlFor="design-theme" className="block text-sm font-medium text-slate-300">
        Select Design Style
      </label>
      <select
        id="design-theme"
        name="design-theme"
        value={selectedTheme}
        onChange={(e) => onThemeChange(e.target.value as DesignTheme)}
        className="w-full bg-slate-700 border border-slate-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 placeholder-slate-400 shadow-sm"
      >
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
};
