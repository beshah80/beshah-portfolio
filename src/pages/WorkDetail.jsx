import { useParams, Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WorkDetail = () => {
  const { workId } = useParams();

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
    <div className="min-h-screen bg-white dark:bg-gray-900 font-['Montserrat'] relative"
      style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/work" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to work
        </Link>

        <h1 className="text-4xl font-black mb-4 dark:text-white">{work.company}</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-12">{work.description}</p>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {work.techStack.map((tech, index) => (
              <span key={index} className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-xs font-bold px-3 py-2 rounded border border-gray-300 dark:border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white">Roles</h2>
          <h3 className="text-xl font-bold mb-2 dark:text-white">{work.role}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{work.duration}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{work.location}</p>
          <ul className="space-y-2">
            {work.responsibilities.map((resp, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">• {resp}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white">Key Projects</h2>
          <ul className="space-y-2">
            {work.keyProjects.map((project, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">• {project}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white">Skills Developed</h2>
          <ul className="space-y-2">
            {work.skillsDeveloped.map((skill, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">• {skill}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white">Tools Used</h2>
          <div className="flex flex-wrap gap-2">
            {work.toolsUsed.map((tool, index) => (
              <span key={index} className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-200 px-4 py-2 rounded-2xl text-sm">
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white">Major Achievements</h2>
          <ul className="space-y-2">
            {work.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">• {achievement}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white">Challenges & Solutions</h2>
          <ul className="space-y-2">
            {work.challenges.map((challenge, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">• {challenge}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white">Personal Highlight</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{work.highlight}</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WorkDetail;
