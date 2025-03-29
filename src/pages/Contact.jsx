import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/blog.css";
import { useForm } from '@formspree/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("manedjno");
  const navigate = useNavigate();

  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        navigate("/contact"); 
      }, 1000);
    }
  }, [state.succeeded, navigate]);

  if (state.succeeded) {
    return <p className="text-green-600 text-center">Thanks for your message!</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
                    <a href="mailto:nitya@curiouscoder.live" className="text-blue-600 hover:text-blue-700 transition-colors duration-300">
                      nitya@curiouscoder.live
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">NSTxADYPU, Pune, Maharastra , India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Response Time</h3>
                    <p className="text-gray-600">Within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Follow Us</h2>
                <div className="flex space-x-6">
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/me/" target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.45a2.06 2.06 0 112.06-2.06c0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.61c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.97v5.7H9.3V9h3.42v1.56h.05c.48-.91 1.66-1.87 3.42-1.87 3.65 0 4.33 2.4 4.33 5.52v6.24z"/>
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a href="https://github.com/curiouscoder-cmd" target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.173c-3.338.727-4.033-1.415-4.033-1.415-.547-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.493.997.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.123-.303-.534-1.523.117-3.175 0 0 1.008-.322 3.3 1.23a11.524 11.524 0 013.003-.404c1.02.004 2.045.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.175.772.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.103.823 2.22v3.293c0 .32.192.694.8.576C20.565 22.093 24 17.594 24 12.297c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>

                  {/* Portfolio Website */}
                  <a href="https://curiouscoder.live/" target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-600 transition-colors duration-300 transform hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-.75 17.9c-1.65-.3-3.05-1.12-4.17-2.33a8.07 8.07 0 01-1.83-4.67h3.55a12.03 12.03 0 002.45 7zm1.5 0a12.03 12.03 0 002.45-7h3.55a8.07 8.07 0 01-1.83 4.67 7.99 7.99 0 01-4.17 2.33zM4.2 12a7.94 7.94 0 011.83-4.67 8.07 8.07 0 014.17-2.33 12.03 12.03 0 00-2.45 7H4.2zm15.6 0h-3.55a12.03 12.03 0 00-2.45-7c1.65.3 3.05 1.12 4.17 2.33A7.94 7.94 0 0119.8 12zM12 4.1c1.1 1.38 2.23 3.65 2.45 7h-4.9a12.03 12.03 0 002.45-7zM9.55 12h4.9a12.03 12.03 0 01-2.45 7c-1.1-1.38-2.23-3.65-2.45-7z"/>
                    </svg>
                  </a>
              </div>
</div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 