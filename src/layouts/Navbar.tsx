import SparklesText from "@/components/ui/sparkles-text";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-mprimary text-white py-4 px-8 flex justify-between items-center sticky top-0 z-10">
      <h1
        onClick={() => navigate("/")}
        title="back home page"
        className="hover:scale-105  ease-in duration-100"
      >
        <SparklesText
          className="font-medium font-mono text-3xl md:text-4xl"
          text="Learn animals in polish"
        />
      </h1>
    </div>
  );
};
