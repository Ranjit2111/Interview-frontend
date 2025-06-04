import { useState, useEffect } from 'react';
import { getConversationHistory, getSessionStats } from '../services/api';

export interface SessionFromUrlData {
  sessionId: string;
  history?: any[];
  stats?: any;
  isLoading: boolean;
  error: string | null;
}

export function useSessionFromUrl(sessionId: string | undefined): SessionFromUrlData {
  const [sessionData, setSessionData] = useState<SessionFromUrlData>({
    sessionId: sessionId || '',
    history: undefined,
    stats: undefined,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    if (!sessionId) {
      setSessionData(prev => ({ 
        ...prev, 
        sessionId: '', 
        error: 'No session ID provided',
        isLoading: false 
      }));
      return;
    }

    const loadSessionData = async () => {
      setSessionData(prev => ({ ...prev, isLoading: true, error: null }));

      try {
        // Load session history and stats to validate session exists
        const [history, stats] = await Promise.all([
          getConversationHistory(sessionId).catch(() => null),
          getSessionStats(sessionId).catch(() => null)
        ]);

        setSessionData({
          sessionId,
          history: history?.history || [],
          stats: stats?.stats || {},
          isLoading: false,
          error: null,
        });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to load session data';
        setSessionData(prev => ({
          ...prev,
          isLoading: false,
          error: errorMessage,
        }));
      }
    };

    loadSessionData();
  }, [sessionId]);

  return sessionData;
} 