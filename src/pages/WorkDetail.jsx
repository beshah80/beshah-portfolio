import { useParams, Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";

const WorkDetail = () => {
  const { workId } = useParams();
  const { isDark } = useTheme();

  const works = {
    "efuye-gela": {
      company: "Efuye Gela",
      description: "Founded in 2016, Efuye Gela creates robust digital ecosystems for Ethiopia's market. By focusing on agriculture, education, and tourism, they deliver agile, culturally relevant solutions that foster innovation and national digital growth through collaborative technology.",
      techStack: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Zustand", "Git", "GitHub", "Vercel"],
      role: "Front-End Developer Intern",
      duration: "06/2025 - 09/2025",
      location: "On-site / Addis Ababa, Ethiopia",
      responsibilities: [
        "Building and maintaining React-based applications, integrating modern frontend technologies.",
        "Implementing modern UI designs using Tailwind CSS for rapid and responsive styling.",
        "Developing scalable components and implementing global state management using Zustand.",
        "Collaborating closely with back-end team to seamlessly integrate various APIs.",
        "Utilizing GitHub for robust version control, code reviews, and streamlined team workflow."
      ],
      keyProjects: [
        "Personal Blog Website: Developed using Next.js with file-based routing, Server-Side Rendering (SSR), Static Site Generation (SSG), and API routes.",
        "Chat Application Project: Designed user interfaces with Figma and implemented responsive layouts. Integrated authentication, message handling, and modern UI with real-time features."
      ],
      skillsDeveloped: [
        "Enhanced front-end development skills with React.js and Next.js",
        "Proficiency in Tailwind CSS for efficient and responsive styling",
        "Mastered JavaScript ES6+ and complex API handling",
        "Industry-standard Git workflows and Vercel deployment",
        "Effective teamwork & communication in fast-paced environment",
        "Innovative problem-solving approaches"
      ],
      toolsUsed: ["VS Code", "Chrome DevTools", "Git", "GitHub", "Figma", "Vercel"],
      achievements: [
        "Successfully completed and deployed a responsive Personal Blog Website",
        "Made significant contributions to a real-time Chat Application",
        "Developed scalable components with efficient global state management",
        "Enhanced code quality through consistent code reviews and debugging"
      ],
      challenges: [
        "React's Declarative Nature: Initially struggled with React's paradigm. Deep dive into documentation and consistent practice resolved this.",
        "Prop Drilling: Encountered issues in chat application. Refactored to use Zustand for efficient global state management.",
        "Next.js Hydration Errors: Implemented useEffect and conditional client-side checks to resolve.",
        "Merge Conflicts: Adopted strict Git workflow with feature branches and mandatory PR reviews."
      ],
      highlight: "This internship profoundly strengthened the link between classroom learning and real development work, providing invaluable practical experience and confidence to contribute effectively to real-world projects."
    }
  };

  const work = works[workId];

  if (!work) {
    return <div>Work experience not found</div>;
  }

  return (
    <div className="min-h-screen font-['Montserrat'] relative" style={{ backgroundColor: isDark ? '#111827' : '#ffffff' }}>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12" style={{ color: isDark ? '#ffffff' : '#000000' }}>
        <Link
          to="/work"
          className="inline-flex items-center hover:underline"
          style={{ color: isDark ? '#93c5fd' : '#2563eb' }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to work
        </Link>

        <h1 className="text-4xl font-black mb-4">{work.company}</h1>
        <p className="text-gray-600 leading-relaxed mb-12">{work.description}</p>

        <section className="mb-12">
          <h3 className="text-xl font-semibold" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {work.techStack.map((tech, index) => (
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
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4">Roles</h2>
          <h3 className="text-xl font-semibold" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Responsibilities</h3>
          <ul className="list-disc list-inside space-y-2" style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
            <p style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>{work.duration}</p>
            <p style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>{work.location}</p>
            {work.responsibilities.map((resp, index) => (
              <li key={index} className="text-gray-600 leading-relaxed">• {resp}</li>
            ))}
          </ul>
          <div className="space-y-6" style={{ color: isDark ? '#e5e7eb' : '#1f2937' }}>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold" style={{ color: isDark ? '#ffffff' : '#111827' }}>
                {work.role} @ {work.company}
              </h2>
              {work.keyProjects.map((project, index) => (
                <li key={index} className="text-gray-600 leading-relaxed">• {project}</li>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Skills Developed</h3>
          <ul className="list-disc list-inside space-y-2" style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
            {work.skillsDeveloped.map((skill, index) => (
              <li key={index} className="text-gray-600 leading-relaxed">• {skill}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Tools Used</h3>
          <div className="flex flex-wrap gap-2">
            {work.toolsUsed.map((tool, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-sm rounded-full"
                style={{
                  backgroundColor: isDark ? '#1f2937' : '#f3f4f6',
                  color: isDark ? '#e5e7eb' : '#1f2937',
                  border: isDark ? '1px solid #374151' : '1px solid #d1d5db'
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Achievements</h3>
          <ul className="list-disc list-inside space-y-2" style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
            {work.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-600 leading-relaxed">• {achievement}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Challenges & Solutions</h3>
          <ul className="space-y-4">
            {work.challenges.map((challenge, index) => (
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
          <h3 className="text-xl font-semibold" style={{ color: isDark ? '#f3f4f6' : '#111827' }}>Highlight</h3>
          <blockquote 
            className="p-4 italic border-l-4"
            style={{
              borderLeftColor: '#3b82f6',
              backgroundColor: isDark ? 'rgba(30, 58, 138, 0.2)' : '#eff6ff',
              color: isDark ? '#d1d5db' : '#1e40af'
            }}
          >
            {work.highlight}
          </blockquote>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default WorkDetail;
