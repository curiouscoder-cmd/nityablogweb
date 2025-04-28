import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => (
  <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200 flex flex-col h-full">
    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
    <div className="p-5 flex flex-col flex-grow">
      <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">{blog.category}</span>
      <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">{blog.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{blog.excerpt}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-gray-500">{blog.author}</span>
        <Link to={`/blog/${blog.id}`} className="text-blue-600 hover:text-blue-800 text-xs font-medium">
          Read More &rarr;
        </Link>
      </div>
    </div>
  </article>
);

export default BlogCard;