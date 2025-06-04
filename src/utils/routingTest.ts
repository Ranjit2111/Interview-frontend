// Test utility to verify routing configuration
import HomePage from '../pages/HomePage';
import InterviewPage from '../pages/InterviewPage';
import ResultsPage from '../pages/ResultsPage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import SessionGuard from '../components/SessionGuard';

export const verifyRoutingComponents = () => {
  const components = {
    HomePage,
    InterviewPage,
    ResultsPage,
    Login,
    Register,
    SessionGuard,
  };

  const missingComponents = Object.entries(components)
    .filter(([name, component]) => !component)
    .map(([name]) => name);

  if (missingComponents.length > 0) {
    throw new Error(`Missing components: ${missingComponents.join(', ')}`);
  }

  return {
    success: true,
    message: 'All routing components are properly imported',
    components: Object.keys(components),
  };
};

// Test the routing configuration
try {
  const result = verifyRoutingComponents();
  console.log('✅ Phase 1 Test Passed:', result.message);
  console.log('✅ Available components:', result.components);
} catch (error) {
  console.error('❌ Phase 1 Test Failed:', error);
} 