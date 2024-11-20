import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";

function Navbar() {

  return (
    <div>
      <nav className="flex items-center justify-between bg-white px-4 py-2 shadow fixed w-full top-0 z-50">
        {/* Chap qism */}
        <div className="flex items-center space-x-4">
          <button  className="text-2xl">
            ☰
          </button>
          <a href="#" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube Logo"
              className="h-6"
            />
          </a>
        </div>

        {/* Markaz qism */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-l px-4 py-1 w-80 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="bg-gray-100 border border-gray-300 rounded-r px-4 py-2 hover:bg-gray-200">
            <FaSearch />
          </button>
        </div>

        {/* O'ng qism */}
        <div className="flex items-center space-x-4">
          <button className="text-xl">
            <FaVideo />
          </button>
          <button className="text-xl">
            <FaBell />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
