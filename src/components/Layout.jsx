import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  // This effect runs only on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything until we're on the client side
  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-['Montserrat'] relative transition-colors duration-200">
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.5
        }}
        aria-hidden="true"
      />
      
      <Navbar />
      
      <main className="min-h-[calc(100vh-160px)]">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
