import React from "react";

export const Navbar: React.FC = () => {
  return (
    <div className="bg-primary text-white py-4 px-8 flex justify-between items-center sticky top-0">
      <a title="back home page" href="/" className="text-2xl font-bold  hover:scale-110 hover:-tracking-tighter ease-in duration-100">
        Learn animals in polish
      </a>
    </div>
  );
};
