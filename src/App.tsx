import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import InterviewPage from './pages/InterviewPage';
import ResultsPage from './pages/ResultsPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ProtectedRoute from './components/ProtectedRoute';
import SessionGuard from './components/SessionGuard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* New routing structure */}
          <Route path="/home" element={<HomePage />} />
          <Route 
            path="/interview/:sessionId" 
            element={
              <SessionGuard>
                <InterviewPage />
              </SessionGuard>
            } 
          />
          <Route 
            path="/results/:sessionId" 
            element={
              <SessionGuard>
                <ResultsPage />
              </SessionGuard>
            } 
          />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          
          {/* Legacy route - keep for backward compatibility during migration */}
          <Route path="/" element={<Index />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
