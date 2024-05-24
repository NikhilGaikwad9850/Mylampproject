// src/components/MainContent.tsx
import React from 'react';

const MainContent: React.FC = () => {
  const imageUrl = "https://via.placeholder.com/150"; // Replace with an actual image link

  return (
    <div className="flex-1 p-8">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-6">
          <img src={imageUrl} alt="Workshop" className="w-20 h-20 rounded-full mr-4"/>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Journeying through GenAI and LLMS</h2>
            <div className="flex space-x-2 my-2">
              <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg">3 Weeks</button>
              <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg">Online</button>
            </div>
            <div className="flex space-x-2 my-2">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Past Workshops</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Join Workshop</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Block 1: Exploring Careers</h3>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center mb-4">
            <img src={imageUrl} alt="Course Thumbnail" className="w-16 h-16 rounded-lg mr-4"/>
            <div>
              <h4 className="text-lg font-bold text-gray-800">Introduction to Machine Learning</h4>
              <p className="text-gray-600">14 min | 24 bytes</p>
            </div>
          </div>
        ))}
        <button className="bg-purple-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-purple-700">Start Exploring</button>
      </div>
    </div>
  );
};

export default MainContent;
