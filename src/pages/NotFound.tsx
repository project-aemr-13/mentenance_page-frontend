import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-5xl font-bold text-red-600 mb-4">404</h2>
      <p className="text-xl text-gray-700 mb-6">Pagina nu a fost găsită.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Înapoi la Home
      </Link>
    </div>
  );
};

export default NotFound;
