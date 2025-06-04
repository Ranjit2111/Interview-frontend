import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-100 relative overflow-hidden">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-300 bg-clip-text text-transparent">
            Home Page (Under Construction)
          </h1>
          <p className="text-gray-400">
            This will become the new home page with hero section and interview configuration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 