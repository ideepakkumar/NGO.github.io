import React, { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubcategory, setActiveSubcategory] = useState(null);

    const galleryData = {
      all: [
        { 
          id: 1, 
          title: "Healthcare Mission", 
          category: "healthcare", 
          description: "Providing quality healthcare to underprivileged communities",
          image: "/mission.png",
          branded: true
        },
        { 
          id: 2, 
          title: "Education Under Trees", 
          category: "education", 
          description: "Outdoor classroom sessions in rural areas",
          image: "/education_program.png",
          branded: true
        },
        { 
          id: 3, 
          title: "Community Development", 
          category: "community", 
          description: "Building infrastructure and empowering villages",
          image: "/services.png",
          branded: true
        }
      ],
      healthcare: [
        { 
          id: 1, 
          title: "Healthcare Mission", 
          category: "healthcare", 
          description: "Providing quality healthcare to underprivileged communities",
          image: "/mission.png",
          branded: true,
          type: "item"
        },
        { 
          id: 7, 
          title: "Medical Camp", 
          category: "healthcare", 
          description: "Free health checkups and treatment",
          image: "/camp.png",
          branded: true,
          type: "subcategory",
          subcategory: "medical_camp"
        }
      ],
      medical_camp: [
        {
          id: "camp1",
          title: "Camp 1 - September 1st, 2025",
          category: "healthcare",
          description: "Free medical camp organized in partnership with Leuze Electronic Pvt Ltd",
          type: "camp_section",
          images: [
            {
              id: 7,
              image: "/camp1.png"
            },
            {
              id: 8,
              image: "/camp2.png"
            },
            {
              id: 9,
              image: "/camp3.png"
            },
            {
              id: 10,
              image: "/camp4.png"
            },
            {
              id: 11,
              image: "/Sponser_banner.png"
            },
          ]
        }
      ],
    education: [
      { 
        id: 2, 
        title: "Education Under Trees", 
        category: "education", 
        description: "Outdoor classroom sessions in rural areas",
        image: "/education_program.png",
        branded: true
      },
    ],
    community: [
      { 
        id: 3, 
        title: "Community Development", 
        category: "community", 
        description: "Building infrastructure and empowering villages",
        image: "/services.png",
        branded: true
      }
    ]
  };

  const categories = [
    { key: 'all', label: 'All Photos', icon: '📸' },
    { key: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { key: 'education', label: 'Education', icon: '📚' },
    { key: 'community', label: 'Community', icon: '👥' }
  ];

  const getCurrentImages = () => {
    if (activeSubcategory) {
      return galleryData[activeSubcategory] || [];
    }
    return galleryData[activeCategory] || [];
  };

  const handleItemClick = (item) => {
    if (item.type === 'subcategory') {
      setActiveSubcategory(item.subcategory);
    }
  };

  const handleBackToCategory = () => {
    setActiveSubcategory(null);
  };

  return (
    <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-700 to-green-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Our Gallery</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore photos from our events, hospital activities, community programs, and the lives we've touched through our services.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => {
                    setActiveCategory(category.key);
                    setActiveSubcategory(null); // Reset subcategory when switching categories
                  }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.key
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

          {/* Gallery Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              {/* Back Button for Subcategory */}
              {activeSubcategory && (
                <div className="mb-8">
                  <button
                    onClick={handleBackToCategory}
                    className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back to Healthcare</span>
                  </button>
                </div>
              )}

              {activeSubcategory ? (
                // Subcategory View - Show Camp Section
                <div className="space-y-8">
                  {getCurrentImages().map((item) => (
                    <div key={item.id} className="bg-white rounded-xl shadow-lg p-6">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {item.images.map((image) => (
                          <div
                            key={image.id}
                            className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
                          >
                            <div className="h-48 relative overflow-hidden">
                              <img
                                src={image.image}
                                alt="Medical camp activity"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Regular Grid View
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getCurrentImages().map((item) => (
                    <div
                      key={item.id}
                      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group ${
                        item.type === 'subcategory' 
                          ? 'hover:shadow-2xl cursor-pointer border-2 border-transparent hover:border-teal-300' 
                          : 'hover:shadow-2xl'
                      }`}
                      onClick={() => item.type === 'subcategory' && handleItemClick(item)}
                    >
                      <div className="h-64 relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Branding Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                            <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                            <div className="flex items-center justify-between">
                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                item.category === 'healthcare' ? 'bg-teal-100 text-teal-800' :
                                item.category === 'education' ? 'bg-orange-100 text-orange-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                              </span>
                              <div className="text-xs text-gray-500 font-medium">
                                Shyam Narayan Seva Sansthan
                              </div>
                            </div>
                            {/* Subcategory Indicator */}
                            {item.type === 'subcategory' && (
                              <div className="mt-2 text-xs text-teal-600 font-medium flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                Click to view more images
                              </div>
                            )}
                          </div>
                        </div>
                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {item.type === 'subcategory' ? (
                              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            ) : (
                              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            {getCurrentImages().length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📷</div>
                <h3 className="text-2xl font-bold text-gray-600 mb-2">No photos in this category</h3>
                <p className="text-gray-500">Check back later for new photos!</p>
              </div>
            )}
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">OUR MISSION</h2>
              <p className="text-2xl text-orange-600 font-semibold mb-2">सेवा परमो धर्मः</p>
              <p className="text-xl text-gray-600 italic mb-8">Service is the highest virtue.</p>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  At Shyam Narayan Seva Sansthan, we believe every individual deserves:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 text-2xl">⭐</span>
                    <span className="text-gray-700 font-medium">Quality Healthcare</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 text-2xl">⭐</span>
                    <span className="text-gray-700 font-medium">Basic Human Dignity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 text-2xl">⭐</span>
                    <span className="text-gray-700 font-medium">Education Opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 text-2xl">⭐</span>
                    <span className="text-gray-700 font-medium">Hope for a Better Tomorrow</span>
                  </div>
                </div>
        <p className="text-lg text-gray-700 mb-4">
                  Since 2008, we have been the bridge between those who can help and those who need help.
                </p>
                <p className="text-xl text-orange-600 font-bold">
                  Together, we can create miracles! 🙏
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl">❤️</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Volunteer with us</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Support our causes</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl">📢</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Spread awareness</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Partner with us</h3>
                </div>
              </div>
            </div>
        </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-green-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Want to See More?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Follow our journey and see the impact of your donations in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Support Our Mission
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-700 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Get Involved
              </a>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Gallery;
