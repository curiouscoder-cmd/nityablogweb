import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";

const Carousel = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === posts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [posts.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Carousel Slides */}
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {posts.map((post, index) => (
          <div 
            key={post.id} 
            className="min-w-full h-full relative"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${post.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="max-w-4xl text-center text-white">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-600 rounded-full mb-4">
                  Featured
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                  {post.title}
                </h2>
                <p className="text-xl mb-8 line-clamp-2 max-w-3xl mx-auto">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 text-lg"
                >
                  Read More
                  <svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-opacity duration-300"
        aria-label="Previous slide"
      >
        <svg 
          className="w-8 h-8 text-gray-800" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-opacity duration-300"
        aria-label="Next slide"
      >
        <svg 
          className="w-8 h-8 text-gray-800" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white w-6" 
                : "bg-white bg-opacity-50 hover:bg-opacity-75 w-2.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 