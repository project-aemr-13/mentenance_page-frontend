import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-4xl font-bold mb-4 text-blue-600">Bine ai venit!</h2>
      <p className="text-lg text-gray-700 max-w-xl">
        Aceasta este pagina de start a aplicației tale. Folosește layout-ul global pentru navigare și structură.
      </p>
    </div>
  );
};

export default Home;
