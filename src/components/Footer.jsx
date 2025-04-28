import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError("");
    // Simple email validation
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubscribed(true);
    setEmail("");
    // Here you could also send the email to your backend or a service like Mailchimp
  };

  return (
    <footer className="footer-theme border-t shadow-inner mt-8">
      <div className="w-full px-4 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-blue-700">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-blue-700">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories?category=Technology" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/categories?category=Lifestyle" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/categories?category=Travel" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Travel
                </Link>
              </li>
              <li>
                <Link to="/categories?category=Food" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Food
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-blue-700">Newsletter</h3>
            <p className="text-gray-500">
              Subscribe to our newsletter for the latest updates and exclusive content.
            </p>
            <form className="space-y-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm"
              >
                Subscribe
              </button>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              {subscribed && <p className="text-green-600 text-sm">Thank you for subscribing!</p>}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2024 Blog App. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 