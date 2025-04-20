
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-portfolio-beige text-portfolio-dark py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              <span className="text-portfolio-primary">Iman</span>
              <span className="text-portfolio-secondary">Zohra</span>
            </h3>
            <p className="text-portfolio-gray mb-4">
              Software Engineer with a passion for machine learning and solving real-world problems.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-portfolio-dark hover:text-portfolio-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-portfolio-dark hover:text-portfolio-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:imanzohra7892gmail.com"
                 className="text-portfolio-dark hover:text-portfolio-purple transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-portfolio-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-portfolio-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-300 hover:text-portfolio-primary transition-colors">Personal Profile</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-portfolio-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-300 hover:text-portfolio-primary transition-colors">Skills & Interests</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-portfolio-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-portfolio-purple" />
                <span className="text-portfolio-gray">imanzohra7892gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-portfolio-teal" />
                <span className="text-portfolio-gray">03115014165</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-portfolio-primary" />
                <span className="text-portfolio-gray">Pakistan</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-portfolio-gray/20 mt-8 pt-8 text-center text-portfolio-gray">
          <p>&copy; {new Date().getFullYear()} Iman Zohra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
