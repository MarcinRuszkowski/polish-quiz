import React from "react";
import { useNavigate } from "react-router-dom";

interface LvlCircleProps {
  id: number;
  status: "locked" | "unlocked" | "completed";
}

export const LvlCircle: React.FC<LvlCircleProps> = ({ id, status }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (status !== "locked") {
      navigate(`/level/${id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`w-[80px] h-[80px] border-4 ${
        status === "locked"
          ? "border-gray-500 cursor-not-allowed"
          : status === "unlocked"
          ? "border-blue-400 animate-pulse"
          : "border-green-500"
      } bg-secondary hover:bg-secondary-hover text-white rounded-full flex justify-center items-center text-3xl font-bold cursor-pointer`}
    >
      {id}
    </div>
  );
};
