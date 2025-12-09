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
import { useTheme } from "../contexts/ThemeContext";

const WorkPage = () => {
    const { isDark } = useTheme();
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
        <div className="min-h-screen font-['Montserrat'] relative" style={{ backgroundColor: isDark ? '#111827' : '#ffffff' }}>
            <Navbar />
            <div className="max-w-5xl mx-auto px-6 py-12" style={{ color: isDark ? '#ffffff' : '#000000' }}>
                {/* Header with Filters */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="relative">
                        <button 
                            onClick={() => setShowCompanyDropdown(!showCompanyDropdown)}
                            className="flex items-center gap-6 px-4 py-2 rounded-md font-semibold text-sm transition-all"
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
                            {companyFilter === "all" ? "Filter by Company" : companyFilter}
                            <FontAwesomeIcon icon={faChevronDown} style={{ color: isDark ? '#9ca3af' : '#6b7280' }} className="text-xs ml-2" />
                        </button>
                        <span 
                            className="absolute -top-2 -right-2 w-5 h-5 text-white text-[10px] rounded-full flex items-center justify-center font-bold border"
                            style={{
                                backgroundColor: isDark ? '#3b82f6' : '#2563eb',
                                borderColor: isDark ? '#1f2937' : '#ffffff'
                            }}
                        >
                            1
                        </span>
                        
                        {showCompanyDropdown && (
                            <div 
                                className="absolute top-full mt-2 w-48 rounded-md shadow-lg z-10"
                                style={{
                                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                                    border: isDark ? '2px solid #6b7280' : '2px solid #1f2937',
                                }}
                            >
                                <button 
                                    onClick={() => { setCompanyFilter("all"); setShowCompanyDropdown(false); }} 
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
                                    onClick={() => { setCompanyFilter("Efuye Gela"); setShowCompanyDropdown(false); }} 
                                    className="w-full text-left px-4 py-2 text-sm"
                                    style={{
                                        color: isDark ? '#e5e7eb' : '#1f2937',
                                        ':hover': {
                                            backgroundColor: isDark ? '#374151' : '#f3f4f6'
                                        }
                                    }}
                                >
                                    Efuye Gela
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button 
                            onClick={() => setShowSortDropdown(!showSortDropdown)}
                            className="flex items-center gap-6 px-4 py-2 rounded-md font-semibold text-sm transition-all"
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
                            <FontAwesomeIcon icon={faChevronDown} style={{ color: isDark ? '#9ca3af' : '#6b7280' }} className="text-xs ml-2" />
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

                {/* Experience Cards */}
                <div className="space-y-6">
                    {filteredExperiences.map((exp, index) => (
                        <Link
                            key={index}
                            to={`/work/${exp.id}`}
                            className="block rounded-2xl p-6 md:p-8 transition-all cursor-pointer"
                            style={{
                                border: isDark ? '2px solid #6b7280' : '2px solid #1f2937',
                                backgroundColor: isDark ? '#1f2937' : '#ffffff',
                                boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.8)',
                                ':hover': {
                                    transform: 'translate(4px, 4px)',
                                    boxShadow: 'none'
                                }
                            }}
                        >
                            <h3 className="text-xl font-bold mb-3" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                                {exp.role} @ <span style={{ color: isDark ? '#93c5fd' : '#2563eb' }}>{exp.company}</span>
                            </h3>

                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-4 font-medium" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>
                                <span className="flex items-center">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 w-4 text-center" style={{ color: isDark ? '#9ca3af' : '#6b7280' }} />
                                    {exp.period}
                                </span>
                                <span className="flex items-center">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 w-4 text-center" style={{ color: isDark ? '#9ca3af' : '#6b7280' }} />
                                    {exp.type ? `${exp.type}, ${exp.location}` : exp.location}
                                </span>
                            </div>

                            <p className="leading-relaxed" style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
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