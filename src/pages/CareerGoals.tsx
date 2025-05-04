
const CareerGoals = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-portfolio-dark text-white py-16">
        <div className="container-custom">
          <h1 className="heading-lg mb-4">Career Goals</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            My professional aspirations and the path I'm carving in the tech industry.
          </p>
        </div>
      </section>

      {/* Goals Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Short-term Goals */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-block p-3 mb-6 rounded-md bg-portfolio-light">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-portfolio-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="heading-md mb-6 text-portfolio-dark">Short-Term Goals</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-portfolio-primary pl-4 py-1">
                  <h3 className="text-lg font-semibold mb-2">Secure an On-site Internship</h3>
                  <p className="text-gray-600">
                    My immediate goal is to secure an on-site internship where I can collaborate with industry professionals and gain hands-on experience in a team environment.
                  </p>
                </div>
                <div className="border-l-4 border-portfolio-primary pl-4 py-1">
                  <h3 className="text-lg font-semibold mb-2">Write a Research Paper</h3>
                  <p className="text-gray-600">
                    I aim to contribute to the academic community by writing a research paper on machine learning applications, combining theoretical knowledge with practical implementations.
                  </p>
                </div>
                <div className="border-l-4 border-portfolio-primary pl-4 py-1">
                  <h3 className="text-lg font-semibold mb-2">Expand Technical Skill Set</h3>
                  <p className="text-gray-600">
                    I'm working to deepen my expertise in machine learning frameworks and methodologies, while also broadening my understanding of software engineering best practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Long-term Goals */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-block p-3 mb-6 rounded-md bg-portfolio-light">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-portfolio-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="heading-md mb-6 text-portfolio-dark">Long-Term Goals</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-portfolio-primary pl-4 py-1">
                  <h3 className="text-lg font-semibold mb-2">Pursue MS from Germany</h3>
                  <p className="text-gray-600">
                    I plan to pursue a Master's degree in Computer Science with a focus on AI and Machine Learning from a prestigious university in Germany, expanding my international exposure and academic credentials.
                  </p>
                </div>
                <div className="border-l-4 border-portfolio-primary pl-4 py-1">
                  <h3 className="text-lg font-semibold mb-2">Publish Research Papers</h3>
                  <p className="text-gray-600">
                    I aspire to publish multiple research papers in reputable journals, making meaningful contributions to the field of machine learning and data science.
                  </p>
                </div>
                <div className="border-l-4 border-portfolio-primary pl-4 py-1">
                  <h3 className="text-lg font-semibold mb-2">Lead Innovation in ML</h3>
                  <p className="text-gray-600">
                    My ultimate goal is to lead innovation in machine learning applications, either through entrepreneurship or by leading research and development teams at technology companies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Motivation Quote */}
          <div className="mt-16 bg-portfolio-primary text-white p-10 rounded-lg text-center">
            <h2 className="heading-md mb-6">What Drives Me</h2>
            <p className="text-xl italic mb-4">
              "The intersection of technology and human needs is where true innovation happens. I'm committed to building solutions that make a positive impact on how we live, work, and interact with the world around us."
            </p>
            <p className="font-medium">— </p>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h2 className="heading-md mb-10 text-center">My Career Path</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-portfolio-light"></div>
              
              {/* Timeline items */}
              <div className="space-y-20">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full border-4 border-portfolio-primary bg-white"></div>
                  <div className="ml-auto mr-10 md:mr-auto md:ml-0 md:pl-10 w-full md:w-1/2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-2">2024</h3>
                      <p className="text-gray-600">Securing an on-site internship and writing my first research paper</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full border-4 border-portfolio-primary bg-white"></div>
                  <div className="mr-auto ml-10 md:ml-auto md:mr-0 md:pr-10 w-full md:w-1/2 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-2">2025-2026</h3>
                      <p className="text-gray-600">Applying for MS programs in Germany and preparing for international education</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full border-4 border-portfolio-primary bg-white"></div>
                  <div className="ml-auto mr-10 md:mr-auto md:ml-0 md:pl-10 w-full md:w-1/2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-2">2026-2028</h3>
                      <p className="text-gray-600">Completing my Master's degree and publishing research papers</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full border-4 border-portfolio-primary bg-white"></div>
                  <div className="mr-auto ml-10 md:ml-auto md:mr-0 md:pr-10 w-full md:w-1/2 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold mb-2">2028 and beyond</h3>
                      <p className="text-gray-600">Leading innovation in machine learning and making significant contributions to the field</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareerGoals;
