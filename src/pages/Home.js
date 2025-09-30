import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);

  const galleryImages = [
    {
      id: 1,
      title: "Healthcare Mission",
      description: "Providing quality healthcare to underprivileged communities",
      image: "/mission.png"
    },
    {
      id: 2,
      title: "Medical Camp",
      description: "Free health checkups and treatment",
      image: "/camp.png"
    },
    {
      id: 3,
      title: "Education Program",
      description: "Outdoor classroom sessions in rural areas",
      image: "/education_program.png"
    },
    {
      id: 4,
      title: "Community Services",
      description: "Building infrastructure and empowering villages",
      image: "/services.png"
    }
  ];

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className="bg-white">

      {/* Healthcare Services Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: `url(${galleryImages[currentGalleryImage].image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>


        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
              Healthcare Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 text-shadow">
              Free medical camps and essential medicines for communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Donate Now
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-md transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentGalleryImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentGalleryImage
                  ? 'bg-white'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </section>

    {/* Statistics Section */}
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full -translate-y-48 translate-x-48 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full translate-y-40 -translate-x-40 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Making a real difference in the lives of thousands through our dedicated service</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-black text-teal-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Free Surgeries</div>
          </div>
          
          <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Lives Transformed</div>
          </div>
          
          <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-black text-green-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Villages Served</div>
          </div>
          
          <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Years of Service</div>
          </div>
        </div>
      </div>
    </section>

    {/* Mission Cards */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl rounded-lg p-8 text-center border-t-4 border-teal-600 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Free Healthcare</h3>
            <p className="text-gray-600 leading-relaxed">Providing free surgeries and medical treatments to underprivileged patients with world-class healthcare facilities.</p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-8 text-center border-t-4 border-orange-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Education Support</h3>
            <p className="text-gray-600 leading-relaxed">Empowering children with quality education resources, scholarships, and skill development programs.</p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-8 text-center border-t-4 border-green-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
        </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Community Development</h3>
            <p className="text-gray-600 leading-relaxed">Empowering villages through awareness programs, skill development, and sustainable community initiatives.</p>
        </div>
        </div>
      </div>
    </section>

    {/* Hospital Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our State-of-the-Art Hospital</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Equipped with modern medical facilities, our hospital provides free surgeries and treatments to underprivileged patients. We believe that quality healthcare is a fundamental right, not a privilege.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Advanced surgical equipment</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Experienced medical professionals</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">24/7 emergency services</span>
              </div>
            </div>
            <Link
              to="/donate"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
        >
          Support Our Hospital
            </Link>
          </div>
          <div className="bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl p-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Hospital Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">500+</div>
                  <div className="text-sm text-gray-600">Surgeries Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">1000+</div>
                  <div className="text-sm text-gray-600">Patients Treated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-gray-600">Specialists</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800">Ravi Kumar</h4>
              <p className="text-gray-600">Patient</p>
            </div>
            <p className="text-gray-700 italic leading-relaxed">
              "Thanks to the free surgery at Shyam Narayan Hospital, I can walk again without pain. The doctors and staff treated me with such care and compassion. Your donations truly change lives!"
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800">Sunita Devi</h4>
              <p className="text-gray-600">Parent</p>
            </div>
            <p className="text-gray-700 italic leading-relaxed">
              "The education support program helped my daughter get a scholarship to study medicine. She's now in her final year and dreams of becoming a doctor to help others like us."
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800">Manoj Singh</h4>
              <p className="text-gray-600">Village Head</p>
            </div>
            <p className="text-gray-700 italic leading-relaxed">
              "The community awareness programs have transformed our village. We now have better health practices, women are empowered, and children are getting quality education. Thank you for your support!"
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};

export default Home;
