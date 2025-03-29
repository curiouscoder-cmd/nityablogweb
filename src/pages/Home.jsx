import { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Carousel from "../components/Carousel";
import { mockBlogs } from "../data/mockBlogs";
import "../styles/blog.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Get unique categories from blogs
  const categories = [...new Set(mockBlogs.map(blog => blog.category))];

  // Filter blogs based on search and category
  const filteredBlogs = mockBlogs.filter(blog => {
    const matchesSearch = !search || 
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase()) ||
      blog.author.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !selectedCategory || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured posts (first 3 posts)
  const featuredPosts = mockBlogs.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-fade-in">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Welcome to Our Blog</h1>
          <p className="text-xl text-gray-600">Discover stories, thinking, and expertise from writers on any topic.</p>
        </div>

        {/* Featured Posts Carousel */}
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 px-4 text-center">
            Featured Posts
          </h2>
          <div className="w-[90%] flex justify-center mx-auto">
            <Carousel posts={featuredPosts} />
          </div>
        </div>

        {/* Search and Categories */}
        <div className="bg-white shadow-sm p-4 mb-8">
          <div className="w-full px-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search blogs by title, category, or author..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 search-input rounded-lg pl-8 text-sm"
              />
              <svg 
                className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`category-tag ${
                  !selectedCategory ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-tag ${
                    selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-8 px-4">
            <svg 
              className="mx-auto h-8 w-8 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-base font-medium text-gray-900">No blogs found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or selecting a different category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
