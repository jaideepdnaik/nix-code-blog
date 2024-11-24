import { useState } from "react";

const BlogCard = ({ title, description, onLike, onEdit, onDelete, likes }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-sm w-full mx-auto">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={onLike}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
          >
            Like
          </button>
          <span className="text-gray-500">{likes} Likes</span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Exploring the World of Web Development",
      description:
        "Web development is a vast field, and there are so many different technologies to learn...",
      likes: 10,
    },
    {
      id: 2,
      title: "The Importance of Front-End Frameworks",
      description:
        "Front-end frameworks like React and Angular help us build dynamic and responsive user interfaces...",
      likes: 5,
    },
    {
      id: 3,
      title: "Backend Development with Node.js",
      description:
        "Node.js is an amazing technology for building fast and scalable backend applications...",
      likes: 8,
    },
  ]);

  const handleLike = (id) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
      )
    );
  };

  const handleEdit = (id) => {
    alert(`Edit blog with ID: ${id}`);
  };

  const handleDelete = (id) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Blog Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              description={blog.description}
              onLike={() => handleLike(blog.id)}
              onEdit={() => handleEdit(blog.id)}
              onDelete={() => handleDelete(blog.id)}
              likes={blog.likes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
