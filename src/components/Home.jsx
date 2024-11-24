import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center text-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Blogging Platform
        </h1>
        <p className="text-gray-600 mb-6">
          Join our community to share your thoughts, ideas, and experiences.
          Whether you&apos;re a seasoned writer or a beginner, there&apos;s a space for
          you here.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/login">
            <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-200">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
