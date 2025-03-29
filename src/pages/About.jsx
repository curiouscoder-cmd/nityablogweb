import "../styles/blog.css";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">About Our Blog</h1>
          <p className="text-gray-600">Sharing knowledge, inspiring minds, and building community</p>
        </div>

        {/* Story Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded in 2024, our blog emerged from a simple idea: to create a space where knowledge meets inspiration. 
            What started as a personal project has grown into a thriving community of readers and writers passionate 
            about sharing insights and experiences.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, I am proud to host a diverse collection of articles that span technology, lifestyle, culture, 
            and more. My commitment to quality content and authentic storytelling has helped me build a loyal 
            readership that continues to grow with each passing day.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Quality Content</h3>
                  <p className="text-gray-600">Delivering well-researched, engaging articles that inform and inspire.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Community Building</h3>
                  <p className="text-gray-600">Fostering meaningful connections through shared knowledge and experiences.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Innovation</h3>
                  <p className="text-gray-600">Exploring new ideas and perspectives to keep our content fresh and relevant.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Passion</h3>
                  <p className="text-gray-600">Driven by our love for sharing knowledge and helping others grow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Created by</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-16 h-16 rounded-full author-avatar"
                  src="https://raw.githubusercontent.com/curiouscoder-cmd/curiouscoder-cmd/refs/heads/main/images/nit.jpeg"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Nitya Jain</h3>
                <p className="text-gray-600">Founder & Developer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Want to learn more about our blog?</p>
          <button className="btn-primary">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About; 