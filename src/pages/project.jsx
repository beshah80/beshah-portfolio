import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import chatAppImg from "../assets/images/projects/chat_app.png";
import phonesellImg from "../assets/images/projects/phonesell.png";

const ProjectsPage = () => {
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
        <div className="min-h-screen bg-white dark:bg-gray-900 font-['Montserrat'] relative"
            style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }}>

            <Navbar />

            {/* 1. Header & Filters (Matches image image_f44d65.png) */}
            <div className="max-w-5xl mx-auto px-6 pt-12 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="relative">
                    <button 
                        onClick={() => setShowTechDropdown(!showTechDropdown)}
                        className="flex items-center gap-6 px-4 py-2 border-2 border-gray-800 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white font-semibold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all">
                        {techFilter === "all" ? "Filter by Tech" : techFilter}
                        <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-xs" />
                    </button>
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 text-white text-[10px] rounded-full flex items-center justify-center font-bold border border-white">2</span>
                    
                    {showTechDropdown && (
                        <div className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-600 rounded-md shadow-lg z-10">
                            <button onClick={() => { setTechFilter("all"); setShowTechDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-sm">All</button>
                            <button onClick={() => { setTechFilter("NEXT.JS"); setShowTechDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-sm">NEXT.JS</button>
                            <button onClick={() => { setTechFilter("REACT"); setShowTechDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-sm">REACT</button>
                            <button onClick={() => { setTechFilter("NODE.JS"); setShowTechDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-sm">NODE.JS</button>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button 
                        onClick={() => setShowSortDropdown(!showSortDropdown)}
                        className="flex items-center gap-6 px-4 py-2 border-2 border-gray-800 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white font-semibold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all">
                        {sortOrder === "newest" ? "Newest First" : "Oldest First"}
                        <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-xs" />
                    </button>
                    
                    {showSortDropdown && (
                        <div className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-600 rounded-md shadow-lg z-10">
                            <button onClick={() => { setSortOrder("newest"); setShowSortDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-sm">Newest First</button>
                            <button onClick={() => { setSortOrder("oldest"); setShowSortDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-sm">Oldest First</button>
                        </div>
                    )}
                </div>
            </div>

            {/* 2. Project Grid */}
            <main className="max-w-5xl mx-auto px-6 pb-20">
                <div className="grid md:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <Link
                            key={index}
                            to={`/projects/${project.id}`}
                            className="border-2 border-gray-800 dark:border-gray-600 rounded-[2rem] overflow-hidden bg-white dark:bg-gray-800 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
                        >
                            <div className="h-48 border-b-2 border-gray-800 dark:border-gray-600 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h4 className="font-black text-xl mb-2 dark:text-white">{project.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                                <div className="flex gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 text-[10px] font-bold px-2 py-1 rounded border border-gray-300 dark:border-gray-600">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectsPage;