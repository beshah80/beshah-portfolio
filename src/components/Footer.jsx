import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  return (
    <footer className="border-t-2 py-8 mt-20" style={{ borderColor: isDark ? '#374151' : '#e5e7eb' }}>
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/beshah-ashenafi-a21743367/" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/beshah80" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=beshah.ashenafi369@gmail.com" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
        <p className="text-sm" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>© {currentYear} Beshah Ashenafi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
