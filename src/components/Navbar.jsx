import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/blog.css";

const Navbar = ({ setBlurContent }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!plan) {
      setError("Please select a plan.");
      return;
    }
    setSubscribed(true);
    setTimeout(() => {
      setShowSubscribeModal(false);
      setSubscribed(false);
      setEmail("");
      setPlan("");
    }, 1500);
  };

  const handleOpenModal = () => {
    setShowSubscribeModal(true);
    if (setBlurContent) setBlurContent(true);
  };

  const handleCloseModal = () => {
    setShowSubscribeModal(false);
    if (setBlurContent) setBlurContent(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <h1>ContentVerse</h1>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>

          <div className="navbar-actions">
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 dark:text-white focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 group-hover:bg-transparent group-hover:border-2 group-hover:border-teal-300"
              onClick={handleOpenModal}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Subscribe
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Subscribe Modal */}
      {showSubscribeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative animate-fade-in">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-serif font-bold text-blue-700 mb-4 text-center">Subscribe</h2>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <div>
                <label className="block mb-2 font-medium text-gray-700">Choose a plan:</label>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="plan" value="3months" checked={plan === "3months"} onChange={() => setPlan("3months")} />
                    3 Months
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="plan" value="6months" checked={plan === "6months"} onChange={() => setPlan("6months")} />
                    6 Months
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="plan" value="1year" checked={plan === "1year"} onChange={() => setPlan("1year")} />
                    1 Year
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              {subscribed && <p className="text-green-600 text-sm text-center">Thank you for subscribing!</p>}
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/categories" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Categories</Link>
          <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
