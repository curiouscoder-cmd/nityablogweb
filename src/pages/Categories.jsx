import { useState } from "react";
import { mockBlogs } from "../data/mockBlogs";
import BlogCard from "../components/BlogCard";
import "../styles/blog.css";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState("");

  // Get unique categories from blogs
  const categories = [...new Set(mockBlogs.map(blog => blog.category))];

  // Filter blogs based on selected category and search
  const filteredBlogs = mockBlogs.filter(blog => {
    const matchesCategory = !selectedCategory || blog.category === selectedCategory;
    const matchesSearch = !search || 
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase()) ||
      blog.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Blog Categories</h1>
          <p className="text-gray-600">Explore our blog posts by category</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
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
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {categories.map((category) => {
            const blogCount = mockBlogs.filter(blog => blog.category === category).length;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                className={`category-card p-4 rounded-lg text-left transition-all ${
                  selectedCategory === category 
                    ? 'bg-blue-50 border-blue-200' 
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`category-tag ${
                    selectedCategory === category ? 'bg-blue-600' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {category}
                  </span>
                  <span className="text-sm text-gray-500">{blogCount} posts</span>
                </div>
                <p className="text-sm text-gray-600">
                  {mockBlogs.find(blog => blog.category === category)?.excerpt}
                </p>
              </button>
            );
          })}
        </div>

        {/* Blog List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-8">
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

export default Categories; 