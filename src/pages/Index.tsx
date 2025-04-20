
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">
              Hi, I'm <span className="text-gradient">Iman Zohra</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Software Engineer passionate about machine learning and building innovative solutions to real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link to="/profile" className="border border-white hover:bg-white/10 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-portfolio-light">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="heading-lg mb-6">About Me</h2>
              <p className="text-gray-700 mb-4">
                I come from a strong foundation in Software Engineering, with a growing interest in data and intelligent systems. My passion for solving real-world problems led me to explore Machine Learning, where I secured an internship from June to August 2024.
              </p>
              <p className="text-gray-700 mb-6">
                Currently, I'm gaining hands-on experience through a remote internship, where I'm applying ML concepts in real projects and deepening my technical skills.
              </p>
              <Link to="/profile" className="inline-flex items-center text-portfolio-primary hover:text-portfolio-secondary font-medium transition-colors">
                Read more about me <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="heading-sm mb-3">Projects</h3>
                  <p className="text-gray-600 mb-4">Explore my work in software and machine learning</p>
                  <Link to="/projects" className="text-portfolio-primary hover:text-portfolio-secondary inline-flex items-center font-medium">
                    View Projects <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="heading-sm mb-3">Skills</h3>
                  <p className="text-gray-600 mb-4">See my technical and soft skills</p>
                  <Link to="/skills" className="text-portfolio-primary hover:text-portfolio-secondary inline-flex items-center font-medium">
                    View Skills <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="heading-sm mb-3">Gallery</h3>
                  <p className="text-gray-600 mb-4">Visual showcase of my interests and hobbies</p>
                  <Link to="/gallery" className="text-portfolio-primary hover:text-portfolio-secondary inline-flex items-center font-medium">
                    View Gallery <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="heading-sm mb-3">Career Goals</h3>
                  <p className="text-gray-600 mb-4">Learn about my professional aspirations</p>
                  <Link to="/career-goals" className="text-portfolio-primary hover:text-portfolio-secondary inline-flex items-center font-medium">
                    View Goals <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-portfolio-primary py-16">
        <div className="container-custom text-center text-white">
          <h2 className="heading-lg mb-4">Let's Work Together</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Interested in collaborating or learning more about my work? Feel free to reach out!
          </p>
          <Link to="/contact" className="bg-white text-portfolio-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors duration-300">
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
