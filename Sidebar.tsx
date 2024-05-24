// src/components/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-purple-100 p-6 w-1/4 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">wiZe</h1>
      <nav className="flex-1 space-y-4">
        {['Home', 'Explore', 'Learn', 'Achieve', 'Practice', 'Projects', 'Career', 'Mentorship', 'Community'].map((item) => (
          <a href="/" key={item} className="block text-lg text-gray-700 hover:text-purple-600">
            {item}
          </a>
        ))}
      </nav>
      <div className="mt-8 flex space-x-4">
        <a href="https://www.linkedin.com" className="text-blue-700"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com" className="text-pink-600"><i className="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com" className="text-red-600"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  );
};

export default Sidebar;
