
import React, { useRef, useState, useCallback } from 'react';

interface UploadImageProps {
  onImageUpload: (file: File) => void;
  currentImageUrl: string | null;
}

export const UploadImage: React.FC<UploadImageProps> = ({ onImageUpload, currentImageUrl }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onImageUpload(file);
    } else {
      // Handle invalid file type if needed
      console.warn("Invalid file type dropped.");
    }
  }, [onImageUpload]);


  return (
    <div className="space-y-4">
      <div 
        className={`p-6 border-2 border-dashed rounded-xl transition-colors duration-200
                    ${dragOver ? 'border-primary-500 bg-slate-700' : 'border-slate-600 hover:border-slate-500'}
                    ${currentImageUrl ? 'border-solid' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        {currentImageUrl ? (
          <div className="space-y-4">
            <p className="text-sm text-slate-400 text-center">Current Room Image:</p>
            <img src={currentImageUrl} alt="Uploaded room" className="max-h-60 w-full object-contain rounded-lg shadow-md" />
            <button
              onClick={handleButtonClick}
              className="w-full mt-2 bg-slate-600 hover:bg-slate-500 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 ease-in-out text-sm"
            >
              Change Image
            </button>
          </div>
        ) : (
          <div className="text-center py-8 cursor-pointer" onClick={handleButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-slate-500 mb-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
            <p className="font-semibold text-slate-300">Click to upload or drag & drop</p>
            <p className="text-xs text-slate-500 mt-1">PNG, JPG, GIF up to 10MB</p>
          </div>
        )}
      </div>
    </div>
  );
};
