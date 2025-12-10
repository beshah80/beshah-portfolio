import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6 sticky top-0 backdrop-blur-md z-50 border-b transition-colors duration-200 w-full"
      style={{ 
        backgroundColor: isDark ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        borderColor: isDark ? '#374151' : '#e5e7eb'
      }}>
      <Link to="/" className="text-xl sm:text-2xl font-black" style={{ color: isDark ? '#ffffff' : '#111827' }}>beshah</Link>
      
      <div className="flex border-2 rounded-full p-0.5 sm:p-1 shadow-sm"
        style={{
          borderColor: isDark ? '#4b5563' : '#1f2937',
          backgroundColor: isDark ? '#1f2937' : '#ffffff'
        }}>
        <Link 
          to="/" 
          className="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors"
          style={{
            backgroundColor: location.pathname === '/' ? (isDark ? '#1e3a8a' : '#dbeafe') : 'transparent',
            color: location.pathname === '/' ? (isDark ? '#93c5fd' : '#2563eb') : (isDark ? '#9ca3af' : '#6b7280'),
            border: location.pathname === '/' ? (isDark ? '1px solid #2563eb' : '1px solid #60a5fa') : 'none'
          }}
        >
          Home
        </Link>
        <Link 
          to="/work" 
          className="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors"
          style={{
            backgroundColor: location.pathname.startsWith('/work') ? (isDark ? '#1e3a8a' : '#dbeafe') : 'transparent',
            color: location.pathname.startsWith('/work') ? (isDark ? '#93c5fd' : '#2563eb') : (isDark ? '#9ca3af' : '#6b7280'),
            border: location.pathname.startsWith('/work') ? (isDark ? '1px solid #2563eb' : '1px solid #60a5fa') : 'none'
          }}
        >
          Work
        </Link>
        <Link 
          to="/projects" 
          className="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors"
          style={{
            backgroundColor: location.pathname.startsWith('/projects') ? (isDark ? '#1e3a8a' : '#dbeafe') : 'transparent',
            color: location.pathname.startsWith('/projects') ? (isDark ? '#93c5fd' : '#2563eb') : (isDark ? '#9ca3af' : '#6b7280'),
            border: location.pathname.startsWith('/projects') ? (isDark ? '1px solid #2563eb' : '1px solid #60a5fa') : 'none'
          }}
        >
          Projects
        </Link>
      </div>

      <button
        onClick={toggleTheme}
        className="p-1.5 sm:p-2 rounded-full transition-colors"
        style={{ backgroundColor: isDark ? '#1f2937' : '#f3f4f6' }}
        aria-label="Toggle theme"
      >
        <FontAwesomeIcon 
          icon={isDark ? faSun : faMoon} 
          className="w-4 h-4 sm:w-5 sm:h-5"
          style={{ color: isDark ? '#d1d5db' : '#374151' }}
        />
      </button>
    </nav>
  );
};

export default Navbar;
