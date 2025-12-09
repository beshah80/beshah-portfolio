import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";
import chatAppImg from "../assets/images/projects/chat_app.png";
import phonesellImg from "../assets/images/projects/phonesell.png";

const ProjectsPage = () => {
    const { isDark } = useTheme();
    const [sortOrder, setSortOrder] = useState("newest");
    const [techFilter, setTechFilter] = useState("all");
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [showTechDropdown, setShowTechDropdown] = useState(false);

    const projects = [
        {
            id: "chat-app",
            title: "Chat Application",
            description: "Real-time messaging platform with Socket.IO, TypeScript, Prisma, and PostgreSQL.",
            tech: ["NEXT.JS", "SOCKET.IO", "POSTGRESQL"],
            image: chatAppImg,
            date: new Date(2024, 0)
        },
        {
            id: "phonesell",
            title: "PhoneSell Website",
            description: "E-commerce platform for buying and selling phones.",
            tech: ["REACT", "NODE.JS"],
            image: phonesellImg,
            date: new Date(2023, 0)
        }
    ];

    const filteredProjects = projects
        .filter(proj => techFilter === "all" || proj.tech.includes(techFilter))
        .sort((a, b) => sortOrder === "newest" ? b.date - a.date : a.date - b.date);

    return (
        <div className="min-h-screen font-['Montserrat'] relative" style={{ backgroundColor: isDark ? '#111827' : '#ffffff' }}>
            <Navbar />

            <div className="max-w-5xl mx-auto px-6 py-12" style={{ color: isDark ? '#ffffff' : '#000000' }}>
                {/* Header & Filters */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="relative">
                        <button 
                            onClick={() => setShowTechDropdown(!showTechDropdown)}
                            className="flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all"
                            style={{
                                border: isDark ? '2px solid #6b7280' : '2px solid #1f2937',
                                backgroundColor: isDark ? '#1f2937' : '#ffffff',
                                color: isDark ? '#ffffff' : '#1f2937',
                                boxShadow: '2px 2px 0px 0px rgba(0,0,0,0.8)',
                                ':hover': {
                                    boxShadow: 'none',
                                    transform: 'translate(2px, 2px)'
                                }
                            }}
                        >
                            {techFilter === "all" ? "Filter by Tech" : techFilter}
                            <FontAwesomeIcon 
                                icon={faChevronDown} 
                                style={{ color: isDark ? '#9ca3af' : '#6b7280' }} 
                                className="text-xs ml-2" 
                            />
                        </button>
                        <span 
                            className="absolute -top-2 -right-2 w-5 h-5 text-white text-[10px] rounded-full flex items-center justify-center font-bold border"
                            style={{
                                backgroundColor: isDark ? '#3b82f6' : '#2563eb',
                                borderColor: isDark ? '#1f2937' : '#ffffff'
                            }}
                        >
                            {projects.length}
                        </span>
                        
                        {showTechDropdown && (
                            <div 
                                className="absolute top-full mt-2 w-48 rounded-md shadow-lg z-10"
                                style={{
                                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                                    border: isDark ? '2px solid #6b7280' : '2px solid #1f2937',
                                }}
                            >
                                <button 
                                    onClick={() => { setTechFilter("all"); setShowTechDropdown(false); }} 
                                    className="w-full text-left px-4 py-2 text-sm"
                                    style={{
                                        color: isDark ? '#e5e7eb' : '#1f2937',
                                        ':hover': {
                                            backgroundColor: isDark ? '#374151' : '#f3f4f6'
                                        }
                                    }}
                                >
                                    All
                                </button>
                                <button 
                                    onClick={() => { setTechFilter("NEXT.JS"); setShowTechDropdown(false); }} 
                                    className="w-full text-left px-4 py-2 text-sm"
                                    style={{
                                        color: isDark ? '#e5e7eb' : '#1f2937',
                                        ':hover': {
                                            backgroundColor: isDark ? '#374151' : '#f3f4f6'
                                        }
                                    }}
                                >
                                    NEXT.JS
                                </button>
                                <button 
                                    onClick={() => { setTechFilter("REACT"); setShowTechDropdown(false); }} 
                                    className="w-full text-left px-4 py-2 text-sm"
                                    style={{
                                        color: isDark ? '#e5e7eb' : '#1f2937',
                                        ':hover': {
                                            backgroundColor: isDark ? '#374151' : '#f3f4f6'
                                        }
                                    }}
                                >
                                    REACT
                                </button>
                                <button 
                                    onClick={() => { setTechFilter("NODE.JS"); setShowTechDropdown(false); }} 
                                    className="w-full text-left px-4 py-2 text-sm"
                                    style={{
                                        color: isDark ? '#e5e7eb' : '#1f2937',
                                        ':hover': {
                                            backgroundColor: isDark ? '#374151' : '#f3f4f6'
                                        }
                                    }}
                                >
                                    NODE.JS
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button 
                            onClick={() => setShowSortDropdown(!showSortDropdown)}
                            className="flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all"
                            style={{
                                border: isDark ? '2px solid #6b7280' : '2px solid #1f2937',
                                backgroundColor: isDark ? '#1f2937' : '#ffffff',
                                color: isDark ? '#ffffff' : '#1f2937',
                                boxShadow: '2px 2px 0px 0px rgba(0,0,0,0.8)',
                                ':hover': {
                                    boxShadow: 'none',
                                    transform: 'translate(2px, 2px)'
                                }
                            }}
                        >
                            {sortOrder === "newest" ? "Newest First" : "Oldest First"}
                            <FontAwesomeIcon 
                                icon={faChevronDown} 
                                style={{ color: isDark ? '#9ca3af' : '#6b7280' }} 
                                className="text-xs ml-2" 
                            />
                        </button>
                        
                        {showSortDropdown && (
                            <div 
                                className="absolute top-full mt-2 w-48 rounded-md shadow-lg z-10"
                                style={{
                                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                                    border: isDark ? '2px solid #6b7280' : '2px solid #1f2937',
                                }}
                            >
                                <button 
                                    onClick={() => { setSortOrder("newest"); setShowSortDropdown(false); }} 
                                    className="w-full text-left px-4 py-2 text-sm"
                                    style={{
                                        color: isDark ? '#e5e7eb' : '#1f2937',
                                        ':hover': {
                                            backgroundColor: isDark ? '#374151' : '#f3f4f6'
                                        }
                                    }}
                                >
                                    Newest First
                                </button>
                                <button 
                                    onClick={() => { setSortOrder("oldest"); setShowSortDropdown(false); }} 
                                    className="w-full text-left px-4 py-2 text-sm"
                                    style={{
                                        color: isDark ? '#e5e7eb' : '#1f2937',
                                        ':hover': {
                                            backgroundColor: isDark ? '#374151' : '#f3f4f6'
                                        }
                                    }}
                                >
                                    Oldest First
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {filteredProjects.map((project, index) => (
                        <Link
                            key={index}
                            to={`/projects/${project.id}`}
                            className="rounded-3xl overflow-hidden transition-all cursor-pointer"
                            style={{
                                border: isDark ? '2px solid #6b7280' : '2px solid #1f2937',
                                backgroundColor: isDark ? '#1f2937' : '#ffffff',
                                boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.8)',
                                ':hover': {
                                    transform: 'translate(4px, 4px)',
                                    boxShadow: 'none'
                                }
                            }}
                        >
                            <div 
                                className="h-48 overflow-hidden"
                                style={{
                                    borderBottom: isDark ? '2px solid #6b7280' : '2px solid #e5e7eb'
                                }}
                            >
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="font-black text-xl mb-2" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                                    {project.title}
                                </h4>
                                <p 
                                    className="text-sm mb-4" 
                                    style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
                                >
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span 
                                            key={i} 
                                            className="text-[10px] font-bold px-2 py-1 rounded border"
                                            style={{
                                                backgroundColor: isDark ? 'rgba(30, 58, 138, 0.3)' : '#dbeafe',
                                                color: isDark ? '#93c5fd' : '#1e40af',
                                                border: isDark ? '1px solid #3b82f6' : '1px solid #93c5fd'
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectsPage;