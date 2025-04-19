import { Link } from 'react-router-dom';
import { Brain, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold text-white">Rob Hanson</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Building the future, one prompt at a time.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About</Link>
              <Link to="/projects" className="text-gray-400 hover:text-primary-400 transition-colors">Projects</Link>
              <Link to="/skills" className="text-gray-400 hover:text-primary-400 transition-colors">Skills</Link>
              <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-gray-500 text-sm text-center">
          <p>&copy; {currentYear} Rob Hanson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;