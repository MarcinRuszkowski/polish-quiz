import SparklesText from "@/components/ui/sparkles-text";
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <div className="bg-mprimary text-white py-4 px-8 flex justify-between items-center sticky top-0 z-10">
      <a
        title="back home page"
        href="/"
        className="hover:scale-105  ease-in duration-100"
      >
        <SparklesText text="Learn animals in polish" />
      </a>
    </div>
  );
};
