import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubscribed(true);
    setEmail("");
    
  };

  return (
    <footer className="bg-[#18181b] text-gray-400 border-t border-gray-700 mt-8">
      <div className="w-full px-4 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-blue-700 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
              <li><a href="/categories" className="hover:text-blue-500 transition">Categories</a></li>
              <li><a href="/about" className="hover:text-blue-500 transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>
          {/* Categories */}
          <div>
            <h3 className="text-lg font-serif font-bold text-blue-700 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/categories?category=Technology" className="hover:text-blue-500 transition">Technology</a></li>
              <li><a href="/categories?category=Lifestyle" className="hover:text-blue-500 transition">Lifestyle</a></li>
              <li><a href="/categories?category=Travel" className="hover:text-blue-500 transition">Travel</a></li>
              <li><a href="/categories?category=Food" className="hover:text-blue-500 transition">Food</a></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-bold text-blue-700 mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for the latest updates and exclusive content.
            </p>
            <form className="space-y-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-700 rounded-lg bg-white text-gray-900 placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              {subscribed && <p className="text-green-600 text-sm">Thank you for subscribing!</p>}
            </form>
          </div>
        </div>
        <hr className="my-8 border-gray-600" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400">
            © 2024 Blog App. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-blue-500 transition">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-blue-500 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 