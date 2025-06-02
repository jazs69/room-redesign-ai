
import React from 'react';

interface ResultViewerProps {
  originalImageUrl: string | null;
  redesignedImageUrl: string | null;
}

export const ResultViewer: React.FC<ResultViewerProps> = ({ originalImageUrl, redesignedImageUrl }) => {
  if (!originalImageUrl && !redesignedImageUrl) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center text-primary-400 mb-4">Design Results</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {originalImageUrl && (
          <div className="bg-slate-700/50 p-3 rounded-lg shadow-lg">
            <h4 className="text-sm font-medium text-slate-300 mb-2 text-center">Original Room</h4>
            <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                 <img src={originalImageUrl} alt="Original room" className="w-full h-full object-contain " />
            </div>
          </div>
        )}
        {redesignedImageUrl && (
          <div className="bg-slate-700/50 p-3 rounded-lg shadow-lg">
            <h4 className="text-sm font-medium text-slate-300 mb-2 text-center">AI Redesigned Room</h4>
             <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                <img src={redesignedImageUrl} alt="Redesigned room" className="w-full h-full object-contain" />
            </div>
          </div>
        )}
      </div>
      {!redesignedImageUrl && originalImageUrl && (
         <p className="text-center text-slate-400 text-sm italic">Click "Redesign My Room" to see the magic!</p>
      )}
    </div>
  );
};
