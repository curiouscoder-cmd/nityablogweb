import "tailwindcss";

import BlogList from "../components/BlogList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured post cards will go here */}
        </div>
      </div>

      {/* Latest Posts */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Latest Posts</h2>
        <BlogList />
      </div>
    </div>
  );
};

export default Home;
