import { HaycProvider } from './hayc/config-context';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';
import { RouterProvider } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { router } from './routes';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handlePreloaderComplete = useCallback(() => setIsLoading(false), []);

  return (
    <HaycProvider>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      <div className={`min-h-screen bg-[#141414] ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
        {!isLoading && <RouterProvider router={router} />}
      </div>
      <ScrollToTop />
    </HaycProvider>
  );
}

export default App;
