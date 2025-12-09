import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering the theme toggle on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="flex justify-center items-center px-6 py-6 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="flex border-2 border-gray-800 dark:border-gray-600 rounded-full p-1 bg-white dark:bg-gray-800 shadow-sm">
        <Link 
          to="/" 
          className={`px-4 md:px-6 py-1.5 rounded-full text-sm font-semibold transition-colors ${
            location.pathname === '/' 
              ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border border-blue-400 dark:border-blue-600' 
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          Home
        </Link>
        <Link 
          to="/work" 
          className={`px-4 md:px-6 py-1.5 rounded-full text-sm font-semibold transition-colors ${
            location.pathname.startsWith('/work') 
              ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border border-blue-400 dark:border-blue-600' 
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          Work
        </Link>
        <Link 
          to="/projects" 
          className={`px-4 md:px-6 py-1.5 rounded-full text-sm font-semibold transition-colors ${
            location.pathname.startsWith('/projects') 
              ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border border-blue-400 dark:border-blue-600' 
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
