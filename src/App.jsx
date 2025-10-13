import About from './components/About';
import Header from './components/Header';
import Experiences from './components/Experiences';
import Tools from './components/Tools';
import Projects from './components/Projects';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval); // ✅ Cleanup
  }, []);

  useEffect(() => {
    const imagesToPreload = [
      'resources/images/profile4.png',
      'resources/images/picture-1.jpeg',
      'resources/images/github-wh.png',
      'resources/images/instagram.png',
      'resources/images/linkedin.png',
      'resources/images/email-black.png',
    ];

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
        {/* Logo or Name */}
        <div className="mb-8">
          <h1 className="text-primary animate-pulse text-5xl font-light tracking-wider md:text-7xl">
            DevOluwaseun
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="h-1 w-64 overflow-hidden rounded-full bg-gray-700 md:w-96">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-sm text-gray-400">Loading experience...</p>
      </div>
    );
  }

  return (
    <div className="h-screen snap-y overflow-y-scroll scroll-smooth">
      <Header />
      <About />
      <Tools />
      <Experiences />
      <Projects />
    </div>
  );
}

export default App;
