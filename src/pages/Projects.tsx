
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: "Gym Management System",
      description: "A comprehensive management system for gyms to handle member registrations, track attendance, manage equipment, and generate reports.",
      technologies: ["C++", "Object-Oriented Programming", "File Handling", "Data Structures"],
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
      github: "https://github.com",
      demo: ""
    },
    {
      id: 2,
      title: "Image Classification System",
      description: "A machine learning project that uses TensorFlow and NumPy to classify images. The model is trained on a dataset of various categories and can predict with high accuracy.",
      technologies: ["Python", "TensorFlow", "NumPy", "Machine Learning", "Neural Networks"],
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      github: "https://github.com",
      demo: "https://demo-link.com"
    },
    {
      id: 3,
      title: "Event Management System",
      description: "A comprehensive event management solution designed in Figma, featuring user flow diagrams, wireframes, and high-fidelity prototypes for a seamless user experience.",
      technologies: ["Figma", "UI/UX Design", "Prototyping", "Wireframing", "User Research"],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      github: "https://github.com",
      demo: "https://figma.com"
    },
    {
      id: 4,
      title: "Data Scraping Tool",
      description: "A web scraping tool that extracts data from multiple sources, cleans it, and exports it in various formats for analysis and visualization.",
      technologies: ["Python", "BeautifulSoup", "Pandas", "Data Analysis", "Automation"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      github: "https://github.com",
      demo: ""
    },
  ];

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-portfolio-dark text-white py-16">
        <div className="container-custom">
          <h1 className="heading-lg mb-4">Projects</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A showcase of my technical work, from software development to machine learning.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs px-3 py-1 bg-portfolio-light text-portfolio-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-portfolio-primary transition-colors"
                      >
                        <Github size={18} className="mr-2" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-portfolio-primary transition-colors"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-portfolio-light py-16">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4">Interested in Collaborating?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            I'm always looking for new projects and collaboration opportunities. If you have an idea or project in mind, let's discuss how we can work together!
          </p>
          <a 
            href="/contact" 
            className="btn-primary"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
};

export default Projects;
