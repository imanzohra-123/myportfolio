
import { Github, Linkedin, Mail } from "lucide-react";

const PersonalProfile = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-portfolio-dark text-white py-16">
        <div className="container-custom">
          <h1 className="heading-lg mb-4">Personal Profile</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Get to know more about me, my background, and what drives me.
          </p>
        </div>
      </section>

      {/* Profile Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column - Image and Social Links */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden shadow-md mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                    alt="Iman Zohra" 
                    className="w-full h-auto"
                  />
                </div>

                <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                  <div className="space-y-4">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-portfolio-primary transition-colors"
                    >
                      <Github size={20} className="mr-3" />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-portfolio-primary transition-colors"
                    >
                      <Linkedin size={20} className="mr-3" />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href="mailto:imanzohra7892gmail.com"
                      className="flex items-center text-gray-700 hover:text-portfolio-primary transition-colors"
                    >
                      <Mail size={20} className="mr-3" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Bio Information */}
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="heading-md mb-6 text-portfolio-primary">About Me</h2>
                <p className="text-gray-700 mb-6">
                  I come from a strong foundation in Software Engineering, with a growing interest in data and intelligent systems. My passion for solving real-world problems led me to explore Machine Learning, where I secured an internship from June to August 2024.
                </p>
                <p className="text-gray-700 mb-6">
                  Currently, I'm gaining hands-on experience through a remote internship, where I'm applying ML concepts in real projects and deepening my technical skills.
                </p>

                <h3 className="text-xl font-semibold mt-10 mb-4">My Approach</h3>
                <p className="text-gray-700 mb-6">
                  I believe in continuous learning and pushing the boundaries of what's possible with technology. My approach combines strong technical skills with creative problem-solving to develop innovative solutions. I'm particularly interested in how machine learning can be applied to create positive impacts in everyday life.
                </p>

                <h3 className="text-xl font-semibold mt-10 mb-4">Personal Interests</h3>
                <p className="text-gray-700 mb-6">
                  Outside of my professional pursuits, I enjoy playing guitar, badminton, reading books and traveling. These activities help me maintain a balanced lifestyle and often provide fresh perspectives that I bring back to my technical work.
                </p>

                <h3 className="text-xl font-semibold mt-10 mb-4">Values</h3>
                <p className="text-gray-700 mb-6">
                  I value collaboration, innovation, and continuous improvement. I believe in the power of technology to make positive changes in the world and strive to contribute to projects that align with these values.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mt-10">
                  <h3 className="text-xl font-semibold mb-4">Location</h3>
                  <p className="text-gray-700">
                    Currently based in Pakistan, I'm open to remote opportunities and collaborations across the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PersonalProfile;
