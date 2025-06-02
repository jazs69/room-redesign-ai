
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { UploadImage } from './components/UploadImage';
import { ResultViewer } from './components/ResultViewer';
import { Loader } from './components/Loader';
import { DesignThemeSelector } from './components/DesignThemeSelector';
import { generateRedesign } from './services/designService';
import { DesignTheme } from './types';

const App: React.FC = () => {
  const [originalImageFile, setOriginalImageFile] = useState<File | null>(null);
  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
  const [redesignedImageUrl, setRedesignedImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<DesignTheme>(DesignTheme.MODERN);

  const handleImageUpload = useCallback((file: File) => {
    setOriginalImageFile(file);
    setOriginalImageUrl(URL.createObjectURL(file));
    setRedesignedImageUrl(null); // Clear previous redesign
    setError(null);
  }, []);

  const handleRedesign = useCallback(async () => {
    if (!originalImageFile) {
      setError("Please upload an image first.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setRedesignedImageUrl(null);

    try {
      // Simulate API call delay and response
      const resultUrl = await generateRedesign(originalImageFile, selectedTheme);
      setRedesignedImageUrl(resultUrl);
    } catch (err) {
      console.error("Redesign simulation failed:", err);
      setError("Failed to generate redesign. Please try again. (This is a simulation)");
    } finally {
      setIsLoading(false);
    }
  }, [originalImageFile, selectedTheme]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <Header />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 flex-grow w-full max-w-5xl">
        <div className="bg-slate-800 shadow-2xl rounded-xl p-6 md:p-10 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary-400 mb-2">Transform Your Space</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Upload a photo of your room, select a style, and see an AI-generated redesign.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <UploadImage onImageUpload={handleImageUpload} currentImageUrl={originalImageUrl} />
              {originalImageUrl && (
                 <DesignThemeSelector selectedTheme={selectedTheme} onThemeChange={setSelectedTheme} />
              )}
             
              {originalImageUrl && (
                <button
                  onClick={handleRedesign}
                  disabled={isLoading}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <Loader small />
                      <span className="ml-2">Generating...</span>
                    </>
                  ) : (
                    "✨ Redesign My Room"
                  )}
                </button>
              )}
            </div>
            
            <div className="mt-8 md:mt-0">
              {isLoading && !redesignedImageUrl && (
                 <div className="flex flex-col items-center justify-center h-64 bg-slate-700 rounded-lg">
                    <Loader />
                    <p className="mt-4 text-slate-400">AI is redesigning your room...</p>
                 </div>
              )}
              {error && <p className="text-red-400 bg-red-900/50 p-3 rounded-md text-center">{error}</p>}
              
              {(!isLoading && (originalImageUrl || redesignedImageUrl)) && (
                 <ResultViewer
                  originalImageUrl={originalImageUrl}
                  redesignedImageUrl={redesignedImageUrl}
                />
              )}
              
              {!originalImageUrl && !isLoading && !error && (
                <div className="flex flex-col items-center justify-center h-64 bg-slate-700/50 rounded-lg border-2 border-dashed border-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-slate-500 mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.158 0a.225.225 0 0 1 .225-.225h.008a.225.225 0 0 1 .225.225v.008a.225.225 0 0 1-.225.225h-.008a.225.225 0 0 1-.225-.225V8.25Z" />
                  </svg>
                  <p className="text-slate-500 text-center">Your redesigned room will appear here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <footer className="text-center py-8 text-slate-500 text-sm">
          <p>Room Redesign AI &copy; {new Date().getFullYear()}. Image generation is simulated.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
