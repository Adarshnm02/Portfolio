import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#0a192f] gap-8">
      {/* Animated Logo */}
      <div className="relative">

        {/* Outer circle */}
        <div className="absolute inset-0 animate-spin">
          <div className="h-16 w-16 rounded-full border-t-2 border-r-2 border-[#64ffda] transform -rotate-45"></div>
        </div>
        
        {/* Inner A letter */}
        <div className="h-16 w-16 flex items-center justify-center animate-pulse">
          <span className="text-3xl font-bold text-[#64ffda]">
            A
          </span>
        </div>
      </div>
      
      {/* Loading text with fade effect */}
      <div className="text-[#64ffda] tracking-widest font-light">
        <span className="inline-block animate-fadeIn">L</span>
        <span className="inline-block animate-fadeIn [animation-delay:75ms]">O</span>
        <span className="inline-block animate-fadeIn [animation-delay:150ms]">A</span>
        <span className="inline-block animate-fadeIn [animation-delay:225ms]">D</span>
        <span className="inline-block animate-fadeIn [animation-delay:300ms]">I</span>
        <span className="inline-block animate-fadeIn [animation-delay:375ms]">N</span>
        <span className="inline-block animate-fadeIn [animation-delay:450ms]">G</span>
      </div>
    </div>
  );
};

export default LoadingAnimation;
