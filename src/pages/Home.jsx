import {
  faCalendarAlt,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import chatAppImg from "../assets/images/projects/chat_app.png";
import phonesellImg from "../assets/images/projects/phonesell.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-['Montserrat'] relative"
      style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12">
      {/* --- SECTION 1: INTRO --- */}
      <section id="intro" className="py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">Hi, I'm Beshah 👋</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          I am a <b>Full-Stack Developer</b> and Information Science student specialized in building scalable, high-performance web applications. With a strong foundation in <b>React.js and Next.js</b>, I leverage Tailwind CSS for polished interfaces and <b>GraphQL, Express, and MongoDB</b> to architect robust, data-driven backends.
        </p>

        <div className="mt-12">
          <h3 className="text-xl font-black mb-6 dark:text-white">Quick & Fun Facts</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 dark:text-gray-200 px-4 py-2 rounded-2xl text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
              🌐 English/Amharic
            </span>
            <span className="border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 dark:text-gray-200 px-4 py-2 rounded-2xl text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
              ⚡ MERN Stack
            </span>
            <span className="border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 dark:text-gray-200 px-4 py-2 rounded-2xl text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
              🎓 Information System @ AAU
            </span>
            <span className="border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 dark:text-gray-200 px-4 py-2 rounded-2xl text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
              📍 Addis Ababa, Ethiopia
            </span>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WORK EXPERIENCE --- */}
      <section id="work" className="py-12 space-y-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-black dark:text-white">Work Experience</h3>
          <Link to="/work" className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline">View all (1)</Link>
        </div>

        <Link 
          to="/work/efuye-gela" 
          className="block border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white/50 dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200"
        >
          <h4 className="text-xl font-bold mb-2 dark:text-white">
            Front-end Intern @ <span className="text-blue-600 dark:text-blue-400">Efuye Gela</span>
          </h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 w-4 text-center" />
              Jun 2025 – Sep 2025
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 w-4 text-center" />
              On-site / Addis Ababa
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Building and maintaining React-based applications, integrating modern frontend technologies, and delivering features that improve user interaction.
          </p>
        </Link>
      </section>

      {/* --- SECTION 3: PROJECTS --- */}
      <section id="projects" className="py-12 space-y-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-black dark:text-white">Featured Projects</h3>
          <Link to="/projects" className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline">View all (2)</Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            to="/projects/chat-app" 
            className="group block border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-white/50 dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={chatAppImg} 
                alt="Chat App" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Real-time Chat Application
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                A real-time chat application built with React, Node.js, and Socket.io.
              </p>
            </div>
          </Link>

          <Link 
            to="/projects/phone-sell" 
            className="group block border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-white/50 dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={phonesellImg} 
                alt="Phone Sell" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Phone E-commerce Platform
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                An e-commerce platform for buying and selling phones.
              </p>
              <div className="flex gap-2 mt-3">
                <span className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 text-[10px] font-bold px-2 py-1 rounded border border-gray-300 dark:border-gray-600">REACT</span>
                <span className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 text-[10px] font-bold px-2 py-1 rounded border border-gray-300 dark:border-gray-600">NODE.JS</span>
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