import { Star, StarHalf } from "lucide-react";

const Skills = () => {
  // Skills data with rating out of 5
  const technicalSkills = [
    { name: "Machine Learning", rating: 4 },
    { name: "C++", rating: 4.5 },
    { name: "Python", rating: 4 },
    { name: "Figma", rating: 3.5 },
    { name: "Data Scraping", rating: 4 },
    { name: "Web Development", rating: 3 },
  ];

  const softSkills = [
    { name: "Problem Solving", rating: 4.5 },
    { name: "Communication", rating: 4 },
    { name: "Teamwork", rating: 4 },
  ];

  // Interests data
  const interests = [
    {
      title: "Playing Guitar",
      description: "I've been playing guitar for several years and enjoy playing both classical and contemporary music.",
      icon: "🎸",
    },
    {
      title: "Badminton",
      description: "I play badminton regularly and have participated in several local tournaments.",
      icon: "🏸",
    },
    {
      title: "Reading Books",
      description: "I enjoy reading a wide range of genres, from technical books to fiction and philosophy.",
      icon: "📚",
    },
    {
      title: "Traveling",
      description: "Exploring new places, experiencing different cultures, and meeting new people is something I deeply value.",
      icon: "✈️",
    },
  ];

  // Function to render star rating
  const renderStarRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="text-yellow-500" fill="currentColor" size={20} />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="text-yellow-500" fill="currentColor" size={20} />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-gray-300" size={20} />);
    }

    return stars;
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-portfolio-dark text-white py-16">
        <div className="container-custom">
          <h1 className="heading-lg mb-4">Skills & Interests</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            An overview of my technical abilities, soft skills, and personal interests.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-md mb-4">My Skills</h2>
            <p className="text-gray-600">
              I've developed a diverse set of skills throughout my education and projects. Here's a breakdown of my technical and soft skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-center md:text-left">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <div className="flex">
                        {renderStarRating(skill.rating)}
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-portfolio-primary rounded-full"
                        style={{ width: `${(skill.rating / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-center md:text-left">Soft Skills</h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <div className="flex">
                        {renderStarRating(skill.rating)}
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-portfolio-secondary rounded-full"
                        style={{ width: `${(skill.rating / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="section-padding bg-portfolio-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-md mb-4">My Interests</h2>
            <p className="text-gray-600">
              Beyond my professional pursuits, I have various interests that enrich my life and provide balance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{interest.title}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Skills Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-white p-8 md:p-12 rounded-lg">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Always Learning</h2>
                <p className="text-white/90">
                  I'm committed to continuous learning and expanding my skill set. I regularly take online courses, attend workshops, and participate in coding challenges to stay current with emerging technologies and best practices.
                </p>
              </div>
              <a 
                href="/contact" 
                className="inline-block py-3 px-8 bg-white text-portfolio-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
