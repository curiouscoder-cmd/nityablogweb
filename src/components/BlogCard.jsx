import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <article className="blog-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="blog-image-container relative h-48 md:h-40 md:w-48 flex-shrink-0">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className="category-tag text-xs">
              {blog.category}
            </span>
          </div>
        </div>
        <div className="p-4 flex-grow">
          <div className="flex items-center space-x-2 mb-2">
            <img 
              src={blog.authorAvatar} 
              alt={blog.author} 
              className="author-avatar w-6 h-6 rounded-full"
            />
            <div>
              <p className="text-xs font-medium text-gray-900">{blog.author}</p>
              <p className="text-xs text-gray-500">{blog.date}</p>
            </div>
          </div>
          
          <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
            {blog.title}
          </h3>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {blog.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">5 min read</span>
            <Link 
              to={`/blog/${blog.id}`} 
              className="text-blue-600 hover:text-blue-800 text-xs font-medium inline-flex items-center"
            >
              Read More
              <svg 
                className="w-2.5 h-2.5 ml-0.5" 
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
    </article>
  );
};

export default BlogCard;