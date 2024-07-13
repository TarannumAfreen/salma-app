import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Link to="/dashboard" className="text-xl text-blue-500 underline">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;
