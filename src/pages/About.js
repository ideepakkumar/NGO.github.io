import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-green-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Learn more about our mission, values, and commitment to serving humanity.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Serving Humanity, Building Futures
                  </h2>
                </div>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Shyam Narayan Seva Sansthan is a registered NGO dedicated to serving humanity and building a better future for underprivileged communities in Muzaffarpur, Bihar. We are officially registered under the Indian Society Registration Act, 21, 1860, with registration number 1300/2008-09.
                  </p>
                  
                  <p className="text-lg">
                    Our mission is to create a positive impact through a range of initiatives focused on healthcare, education, social welfare, and community development. We believe that every individual deserves access to essential services and the opportunity to thrive.
                  </p>
                </div>

                {/* Impact Statistics */}
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-orange-500 mb-2">16+</div>
                    <div className="text-gray-600 font-medium">Years of Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-500 mb-2">1000+</div>
                    <div className="text-gray-600 font-medium">Lives Impacted</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Our Commitment Box */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-xl border border-orange-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Commitment</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">Quality Healthcare for All</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">Education Opportunities</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">Basic Human Dignity</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">Hope for a Better Tomorrow</span>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    to="/donate"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Join Our Mission
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional About Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600">
                Founded in 2008, we have been dedicated to transforming lives and communities across Bihar.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To create a society where every individual has access to quality healthcare, education, and opportunities for growth.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To serve humanity through healthcare, education, and community development initiatives that create lasting positive impact.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Our Values</h3>
                <p className="text-gray-600">
                  Compassion, integrity, transparency, and commitment to serving the most vulnerable members of our society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Together, we can create a better future for underprivileged communities. Your support makes a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-700 font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;