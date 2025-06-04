import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useSessionFromUrl } from '../hooks/useSessionFromUrl';

interface SessionGuardProps {
  children: React.ReactNode;
}

/**
 * SessionGuard component that validates session existence
 * and redirects to home if session is invalid
 */
const SessionGuard: React.FC<SessionGuardProps> = ({ children }) => {
  const { sessionId } = useParams<{ sessionId: string }>();
  const { isLoading, error } = useSessionFromUrl(sessionId);

  // Show loading state while validating session
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-gray-100">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400">Loading session...</p>
        </div>
      </div>
    );
  }

  // Redirect to home if session is invalid
  if (error || !sessionId) {
    return <Navigate to="/" replace />;
  }

  // Render children if session is valid
  return <>{children}</>;
};

export default SessionGuard; 