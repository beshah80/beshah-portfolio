import {
  faCalendarAlt,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";
import chatAppImg from "../assets/images/projects/chat_app.png";
import phonesellImg from "../assets/images/projects/phonesell.png";

const Home = () => {
  const { isDark } = useTheme();
  return (
    <div className="min-h-screen font-['Montserrat'] relative" style={{ backgroundColor: isDark ? '#111827' : '#ffffff' }}>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12" style={{ color: isDark ? '#ffffff' : '#000000' }}>
      {/* --- SECTION 1: INTRO --- */}
      <section id="intro" className="py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: isDark ? '#ffffff' : '#111827' }}>Hi, I'm Beshah 👋</h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
          I am a <b style={{ color: isDark ? '#ffffff' : '#111827' }}>Full-Stack Developer</b> and Information Science student specialized in building scalable, high-performance web applications. With a strong foundation in <b style={{ color: isDark ? '#ffffff' : '#111827' }}>React.js and Next.js</b>, I leverage Tailwind CSS for polished interfaces and <b style={{ color: isDark ? '#ffffff' : '#111827' }}>GraphQL, Express, and MongoDB</b> to architect robust, data-driven backends.
        </p>

        <div className="mt-12">
          <h3 className="text-xl font-black mb-6" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Quick & Fun Facts</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span 
              className="px-4 py-2 rounded-2xl text-sm font-medium transition-colors"
              style={{
                border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                color: isDark ? '#e5e7eb' : '#1f2937',
                ':hover': {
                  backgroundColor: isDark ? '#1f2937' : '#f3f4f6'
                }
              }}
            >
              🌐 English/Amharic
            </span>
            <span 
              className="px-4 py-2 rounded-2xl text-sm font-medium transition-colors"
              style={{
                border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                color: isDark ? '#e5e7eb' : '#1f2937'
              }}
            >
              ⚡ MERN Stack
            </span>
            <span 
              className="px-4 py-2 rounded-2xl text-sm font-medium transition-colors"
              style={{
                border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                color: isDark ? '#e5e7eb' : '#1f2937'
              }}
            >
              🎓 Information System @ AAU
            </span>
            <span 
              className="px-4 py-2 rounded-2xl text-sm font-medium transition-colors"
              style={{
                border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                color: isDark ? '#e5e7eb' : '#1f2937'
              }}
            >
              📍 Addis Ababa, Ethiopia
            </span>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WORK EXPERIENCE --- */}
      <section className="py-12 space-y-8" style={{ borderTop: isDark ? '1px solid #374151' : '1px solid #e5e7eb' }}>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-black" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Work Experience</h3>
          <Link 
            to="/work" 
            className="font-medium text-sm hover:underline"
            style={{ color: isDark ? '#93c5fd' : '#2563eb' }}
          >
            View all (1)
          </Link>
        </div>

        <Link 
          to="/work/efuye-gela" 
          className="block rounded-2xl p-6 transition-all duration-200"
          style={{
            border: isDark ? '2px solid #9ca3af' : '2px solid #1f2937',
            backgroundColor: isDark ? '#1f2937' : '#ffffff',
            boxShadow: isDark 
              ? '2px 2px 0px 0px rgba(255,255,255,0.3)' 
              : '2px 2px 0px 0px rgba(0,0,0,1)',
            ':hover': {
              transform: 'translate(4px, 4px)',
              boxShadow: 'none'
            }
          }}
        >
          <h4 className="text-xl font-bold mb-2" style={{ color: isDark ? '#ffffff' : '#111827' }}>
            Front-end Intern @ <span style={{ color: isDark ? '#93c5fd' : '#2563eb' }}>Efuye Gela</span>
          </h4>
          <div className="flex items-center gap-4 text-sm mb-4" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faCalendarAlt} className="w-3.5 h-3.5" />
              Jun 2025 - Sep 2025
            </span>
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3.5 h-3.5" />
              Addis Ababa, Ethiopia
            </span>
          </div>
          <p style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
            Building and maintaining React-based applications, integrating modern frontend technologies, and delivering features that improve user interaction.
          </p>
        </Link>
      </section>

      {/* --- SECTION 3: PROJECTS --- */}
      <section className="py-12 space-y-8" style={{ borderTop: isDark ? '1px solid #374151' : '1px solid #e5e7eb' }}>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-black" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Featured Projects</h3>
          <Link 
            to="/projects" 
            className="font-medium text-sm hover:underline"
            style={{ color: isDark ? '#93c5fd' : '#2563eb' }}
          >
            View all (2)
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            to="/projects/chat-app" 
            className="group block rounded-2xl overflow-hidden transition-all duration-200"
            style={{
              border: isDark ? '2px solid #9ca3af' : '2px solid #1f2937',
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
              boxShadow: isDark 
                ? '2px 2px 0px 0px rgba(255,255,255,0.3)' 
                : '2px 2px 0px 0px rgba(0,0,0,1)',
              ':hover': {
                transform: 'translate(4px, 4px)',
                boxShadow: 'none'
              }
            }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={chatAppImg} 
                alt="Chat Application" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2" style={{ color: isDark ? '#ffffff' : '#111827' }}>Chat Application</h4>
              <p className="text-sm" style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
                A real-time chat application built with Next.js, TypeScript, and Socket.IO, featuring private messaging and group chats.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span 
                  className="px-2 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: isDark ? 'rgba(30, 58, 138, 0.3)' : '#dbeafe',
                    color: isDark ? '#93c5fd' : '#1e40af',
                    border: isDark ? '1px solid #3b82f6' : '1px solid #93c5fd'
                  }}
                >
                  Next.js
                </span>
                <span 
                  className="px-2 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: isDark ? 'rgba(30, 58, 138, 0.3)' : '#dbeafe',
                    color: isDark ? '#93c5fd' : '#1e40af',
                    border: isDark ? '1px solid #3b82f6' : '1px solid #93c5fd'
                  }}
                >
                  TypeScript
                </span>
                <span 
                  className="px-2 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: isDark ? 'rgba(30, 58, 138, 0.3)' : '#dbeafe',
                    color: isDark ? '#93c5fd' : '#1e40af',
                    border: isDark ? '1px solid #3b82f6' : '1px solid #93c5fd'
                  }}
                >
                  Socket.IO
                </span>
              </div>
            </div>
          </Link>

          <Link 
            to="/projects/phone-sell" 
            className="group block rounded-2xl overflow-hidden transition-all duration-200"
            style={{
              border: isDark ? '2px solid #9ca3af' : '2px solid #1f2937',
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
              boxShadow: isDark 
                ? '2px 2px 0px 0px rgba(255,255,255,0.3)' 
                : '2px 2px 0px 0px rgba(0,0,0,1)',
              ':hover': {
                transform: 'translate(4px, 4px)',
                boxShadow: 'none'
              }
            }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={phonesellImg} 
                alt="PhoneSell E-commerce" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2" style={{ color: isDark ? '#ffffff' : '#111827' }}>PhoneSell E-commerce</h4>
              <p className="text-sm" style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
                An e-commerce platform for selling phones with user authentication, product management, and payment integration.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span 
                  className="px-2 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: isDark ? 'rgba(30, 58, 138, 0.3)' : '#dbeafe',
                    color: isDark ? '#93c5fd' : '#1e40af',
                    border: isDark ? '1px solid #3b82f6' : '1px solid #93c5fd'
                  }}
                >
                  React
                </span>
                <span 
                  className="px-2 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: isDark ? 'rgba(30, 58, 138, 0.3)' : '#dbeafe',
                    color: isDark ? '#93c5fd' : '#1e40af',
                    border: isDark ? '1px solid #3b82f6' : '1px solid #93c5fd'
                  }}
                >
                  Node.js
                </span>
                <span 
                  className="px-2 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: isDark ? 'rgba(30, 58, 138, 0.3)' : '#dbeafe',
                    color: isDark ? '#93c5fd' : '#1e40af',
                    border: isDark ? '1px solid #3b82f6' : '1px solid #93c5fd'
                  }}
                >
                  MongoDB
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;