import React from 'react';
import { useParams } from 'react-router-dom';

const ResultsPage: React.FC = () => {
  const { sessionId } = useParams<{ sessionId: string }>();

  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-100 relative overflow-hidden">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-300 bg-clip-text text-transparent">
            Results Page (Under Construction)
          </h1>
          <p className="text-gray-400 mb-4">
            Session ID: {sessionId}
          </p>
          <p className="text-gray-400">
            This will become the results page with coaching feedback and analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage; 