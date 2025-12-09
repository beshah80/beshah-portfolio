import { useParams, Link } from "react-router-dom";
import { faArrowLeft, faUsers, faClock } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { isDark } = useTheme();

  const projects = {
    "chat-app": {
      name: "Chat Application",
      github: "https://github.com/beshah80/Chat_App",
      teamSize: 5,
      role: "Full Stack Developer",
      duration: "3 months",
      techStack: ["Next.js", "TypeScript", "Socket.IO", "Prisma", "PostgreSQL", "Tailwind CSS"],
      introduction: "A modern, full-stack chat application built with Next.js, TypeScript, Socket.IO, Prisma, and PostgreSQL. Features real-time messaging, global chat rooms, private conversations, user authentication, and a responsive design.",
      features: [
        "Real-time Messaging: Instant messaging with Socket.IO",
        "Global Chat Room: All users automatically join a global chat",
        "Private Conversations: One-on-one messaging",
        "User Authentication: Secure login and registration",
        "User Search: Find and start conversations with other users",
        "Online Presence: See who's online",
        "Responsive Design: Works on desktop, tablet, and mobile",
        "Modern UI: Clean, intuitive interface with Tailwind CSS"
      ],
      technicalInsights: "Built with Next.js 15.4.6 and TypeScript for type safety. Socket.IO integration properly configured using Next.js API routes. Prisma ORM for database management with PostgreSQL. Zustand for state management and custom components with shadcn/ui for a modern interface.",
      challenges: [
        "Socket.IO Integration: Integrated Socket.IO properly using Next.js API routes instead of standalone server",
        "Frontend Loading Issues: Proper separation of concerns and correct Socket.IO integration",
        "Real-time Synchronization: Ensured message delivery and online status updates across all connected clients"
      ],
      outcome: "Successfully built a real-time messaging platform with secure authentication, instant messaging, and a responsive design. The application handles multiple concurrent users efficiently with proper WebSocket connections."
    },
    "phonesell": {
      name: "PhoneSell Website",
      github: "https://github.com/beshah80/phoneShop",
      teamSize: 1,
      role: "Full Stack Developer",
      duration: "2 months",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
      introduction: "A full-stack e-commerce platform for buying and selling phones. Built using HTML, CSS, JavaScript, PHP, and MySQL with XAMPP server. Features user authentication, product management, shopping cart, and admin dashboard.",
      features: [
        "User Authentication: Login/logout functionality for users and admins",
        "Product Catalog: Browse various phone models with detailed information",
        "Shopping Cart: Add products to cart and manage orders",
        "Admin Dashboard: Edit products, manage orders, and view feedback",
        "Feedback System: Users can send feedback and reviews",
        "Special Discounts: Selected products with promotional pricing",
        "Order Management: Track and manage customer orders",
        "Responsive Design: Works across different devices"
      ],
      technicalInsights: "Frontend built with HTML, CSS, and JavaScript for interactive user experience. Backend powered by PHP for server-side logic and MySQL for database management. XAMPP server used for local development environment. Implemented session management for user authentication and role-based access control.",
      challenges: [
        "Database Design: Created efficient schema for products, users, orders, and feedback",
        "Security: Implemented secure login system and SQL injection prevention",
        "Cart Functionality: Developed dynamic cart system to track user orders in real-time"
      ],
      outcome: "Successfully created a fully functional e-commerce platform with separate user and admin interfaces. The website provides a seamless shopping experience with secure transactions and efficient product management."
    }
  };

  const project = projects[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen font-['Montserrat'] relative" style={{ backgroundColor: isDark ? '#111827' : '#ffffff' }}>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12" style={{ color: isDark ? '#ffffff' : '#000000' }}>
        <Link to="/projects" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to projects
        </Link>

        <h1 className="text-4xl font-black mb-2" style={{ color: isDark ? '#ffffff' : '#111827' }}>
          {project.name}
        </h1>
        
        <a href={project.github} target="_blank" rel="noopener noreferrer" 
           className="flex items-center justify-center gap-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 mb-8">
          <FontAwesomeIcon icon={faGithub} />
          View on GitHub
        </a>

        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/projects"
            className="flex items-center hover:underline"
            style={{ color: isDark ? '#93c5fd' : '#2563eb' }}
          >  
            <FontAwesomeIcon icon={faUsers} />
            <span><b>Team Size:</b> {project.teamSize}</span>
          </Link>
          <div className="text-gray-700 dark:text-gray-300">
            <span><b>Role:</b> {project.role}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <FontAwesomeIcon icon={faClock} />
            <span><b>Duration:</b> {project.duration}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div 
            className="p-6 rounded-xl"
            style={{
              backgroundColor: isDark ? '#1f2937' : '#f9fafb',
              border: isDark ? '1px solid #374151' : '1px solid #e5e7eb'
            }}
          >
            <h3 className="text-lg font-semibold mb-4" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Project Details</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-sm rounded-full"
                  style={{
                    backgroundColor: isDark ? 'rgba(30, 58, 138, 0.3)' : '#dbeafe',
                    color: isDark ? '#93c5fd' : '#1e40af',
                    border: isDark ? '1px solid #3b82f6' : '1px solid #93c5fd'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white">Introduction</h2>
          <p className="mb-8" style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
            {project.introduction}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white">Key Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">• {feature}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Technical Insights</h2>
          <p className="leading-relaxed" style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
            {project.technicalInsights}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Challenges & Solutions</h2>
          <ul className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <li 
                key={index} 
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: isDark ? '#1f2937' : '#f9fafb',
                  border: isDark ? '1px solid #374151' : '1px solid #e5e7eb'
                }}
              >
                <p style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>{challenge}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Features</h2>
          <ul className="list-disc list-inside space-y-2" style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Outcome</h2>
          <p className="leading-relaxed" style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
            {project.outcome}
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
