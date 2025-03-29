import { useParams } from "react-router-dom";
import { useState } from "react";
import { mockBlogs } from "../data/mockBlogs";
import "../styles/blog.css";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = mockBlogs.find((b) => b.id === parseInt(id));
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  if (!blog) return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-2xl font-serif text-red-500">Blog not found</h2>
    </div>
  );

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { text: newComment, author: "Anonymous", date: new Date().toLocaleDateString() }]);
      setNewComment("");
    }
  };

  return (
    <article className="min-h-screen bg-gray-50 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Image */}
        <div className="blog-hero h-[400px] rounded-lg overflow-hidden mb-8">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="blog-hero-content absolute bottom-0 left-0 right-0 p-8 text-white">
            <span className="category-tag mb-4 inline-block">
              {blog.category}
            </span>
            <h1 className="blog-title text-4xl font-serif font-bold mb-4">{blog.title}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img 
                  src={blog.authorAvatar} 
                  alt={blog.author} 
                  className="author-avatar w-8 h-8 rounded-full"
                />
                <span>{blog.author}</span>
              </div>
              <span>•</span>
              <span>{blog.date}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{blog.content}</p>
          </div>
        </div>

        {/* Engagement */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setLikes(likes + 1)}
              className="engagement-btn"
            >
              <span>👍</span>
              <span>{likes}</span>
            </button>
            <button className="engagement-btn">
              <span>💬</span>
              <span>{comments.length}</span>
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-2xl font-serif font-bold mb-6">Comments</h3>
          
          {/* Comment Form */}
          <div className="mb-8">
            <textarea
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
              rows="3"
            />
            <button 
              onClick={handleAddComment}
              className="btn-primary"
            >
              Post Comment
            </button>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <div key={index} className="comment-card border-b pb-4 last:border-b-0 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-medium">{comment.author}</span>
                  <span className="text-gray-500 text-sm">{comment.date}</span>
                </div>
                <p className="text-gray-700">{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetails;
