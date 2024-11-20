import React, { useState } from "react";

const Header = ({ onPlaceChanged, onLoad }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-600 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold">ExploreEase</div>
        <div className="flex items-center ">
          <h1 className="hidden text-white md:block lg:block mr-20">
            Explore New Places
          </h1>
          <button
            className="text-white rounded-l-full bg-white w-10 h-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            🔍
          </button>
          <input
            type="text"
            className=" bg-white font-bold py-2 px-4 rounded-r-full text-black outline-none"
            onChange={onPlaceChanged}
            onLoad={onLoad}
            placeholder="Search..."
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
