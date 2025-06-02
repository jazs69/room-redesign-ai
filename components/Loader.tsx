
import React from 'react';

interface LoaderProps {
  small?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ small = false }) => {
  const sizeClasses = small ? 'w-5 h-5 border-2' : 'w-12 h-12 border-4';
  return (
    <div className={`animate-spin rounded-full ${sizeClasses} border-primary-500 border-t-transparent`}></div>
  );
};
