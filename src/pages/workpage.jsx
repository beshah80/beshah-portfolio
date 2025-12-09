import {
    faCalendarAlt,
    faChevronDown,
    faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WorkPage = () => {
    const [sortOrder, setSortOrder] = useState("newest");
    const [companyFilter, setCompanyFilter] = useState("all");
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

    const experiences = [
        {
            id: "efuye-gela",
            role: "Front-end Intern",
            company: "Efuye Gela",
            period: "Jun 2025 – Sep 2025",
            type: "On-site",
            location: "Addis Ababa",
            description: "Building and maintaining React-based applications, integrating modern frontend technologies, and delivering features that improve user interaction.",
            date: new Date(2025, 5)
        }
    ];

    const filteredExperiences = experiences
        .filter(exp => companyFilter === "all" || exp.company === companyFilter)
        .sort((a, b) => sortOrder === "newest" ? b.date - a.date : a.date - b.date);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 font-['Montserrat'] relative"
            style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            <Navbar />
            <div className="max-w-5xl mx-auto px-6 py-12">
                {/* Header with Filters */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="relative">
                        <button 
                            onClick={() => setShowCompanyDropdown(!showCompanyDropdown)}
                            className="flex items-center gap-6 px-4 py-2 border-2 border-gray-800 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white font-semibold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all"
                        >
                            {companyFilter === "all" ? "Filter by Company" : companyFilter}
                            <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-xs" />
                        </button>
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 text-white text-[10px] rounded-full flex items-center justify-center font-bold border border-white">1</span>
                        
                        {showCompanyDropdown && (
                            <div className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-600 rounded-md shadow-lg z-10">
                                <button 
                                    onClick={() => { setCompanyFilter("all"); setShowCompanyDropdown(false); }} 
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-sm"
                                >
                                    All
                                </button>
                                <button 
                                    onClick={() => { setCompanyFilter("Efuye Gela"); setShowCompanyDropdown(false); }} 
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-sm"
                                >
                                    Efuye Gela
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button 
                            onClick={() => setShowSortDropdown(!showSortDropdown)}
                            className="flex items-center gap-6 px-4 py-2 border-2 border-gray-800 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white font-semibold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all"
                        >
                            {sortOrder === "newest" ? "Newest First" : "Oldest First"}
                            <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-xs" />
                        </button>
                        
                        {showSortDropdown && (
                            <div className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-600 rounded-md shadow-lg z-10">
                                <button 
                                    onClick={() => { setSortOrder("newest"); setShowSortDropdown(false); }} 
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-sm"
                                >
                                    Newest First
                                </button>
                                <button 
                                    onClick={() => { setSortOrder("oldest"); setShowSortDropdown(false); }} 
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-sm"
                                >
                                    Oldest First
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Experience Cards */}
                <div className="space-y-6">
                    {filteredExperiences.map((exp, index) => (
                        <Link
                            key={index}
                            to={`/work/${exp.id}`}
                            className="block border-2 border-gray-800 dark:border-gray-600 rounded-2xl p-6 md:p-8 bg-white dark:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {exp.role} @ <span className="text-blue-600 dark:text-blue-400">{exp.company}</span>
                            </h3>

                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                                <span className="flex items-center">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 w-4 text-center" />
                                    {exp.period}
                                </span>
                                <span className="flex items-center">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 w-4 text-center" />
                                    {exp.type ? `${exp.type}, ${exp.location}` : exp.location}
                                </span>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {exp.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WorkPage;