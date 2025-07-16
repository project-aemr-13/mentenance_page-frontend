import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 shadow">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <h1 className="text-xl font-bold">🧩 My App</h1>
        <nav className="flex gap-4 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
