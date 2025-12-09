import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-gray-200 dark:border-gray-700 py-8 mt-20">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/beshah-ashenafi-a21743367/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/beshah80" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=beshah.ashenafi369@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">© {currentYear} Beshah Ashenafi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
