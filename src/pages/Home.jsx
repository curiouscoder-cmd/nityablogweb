import { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { mockBlogs } from "../data/mockBlogs";

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 py-20 text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg font-serif">Welcome to Our Blog</h1>
        <p className="text-xl mb-8">Discover stories, thinking, and expertise from writers on any topic.</p>
        <Link
          to="/categories"
          className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition"
        >
          Explore Categories
        </Link>
      </section>

      {/* Featured Posts */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-serif">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map(blog => (
            <div key={blog.id} className="transition-transform transform hover:scale-105">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif text-center">Browse by Category</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-5 py-2 rounded-full font-medium border transition ${
              !selectedCategory
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-700 border-blue-600 hover:bg-blue-50"
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium border transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-blue-700 border-blue-600 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search blogs by title, category, or author..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </section>

      {/* Blog List */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif text-center">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map(blog => (
              <div key={blog.id} className="transition-transform transform hover:scale-105">
                <BlogCard blog={blog} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-12">
              No blogs found. Try a different search or category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
