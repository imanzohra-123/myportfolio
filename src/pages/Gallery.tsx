
const Gallery = () => {
  // Gallery items with image URLs and captions
  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      caption: "Playing guitar during a weekend jam session",
      category: "Music"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1626005205220-1fa5aa9a0bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      caption: "Badminton tournament with colleagues",
      category: "Sports"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      caption: "Reading my favorite book at the local library",
      category: "Reading"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      caption: "Working on a new machine learning project",
      category: "Work"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      caption: "Exploring the mountains during a hiking trip",
      category: "Travel"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      caption: "Attending a tech workshop in Lahore",
      category: "Education"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      caption: "Collaborating with team members on a project",
      category: "Work"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      caption: "Study group session for machine learning course",
      category: "Education"
    },
  ];

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-portfolio-dark text-white py-16">
        <div className="container-custom">
          <h1 className="heading-lg mb-4">Gallery</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A visual showcase of my hobbies, interests, and professional moments.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-portfolio-primary text-white rounded-full">
                        {item.category}
                      </span>
                      <p className="text-white font-medium">{item.caption}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:hidden">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-portfolio-primary text-white rounded-full">
                    {item.category}
                  </span>
                  <p className="text-gray-700 font-medium">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
