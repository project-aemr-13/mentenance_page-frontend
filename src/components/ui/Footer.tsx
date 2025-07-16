import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
      © {new Date().getFullYear()} My App. Toate drepturile rezervate.
    </footer>
  );
};

export default Footer;
