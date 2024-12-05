import React from "react";
import { useNavigate } from "react-router-dom";
import ShimmerButton from "./ui/shimmer-button";

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
    <ShimmerButton
      background="#344769"
      onClick={handleClick}
      className={`w-[80px] h-[80px] border-4 hover:scale-105 ease-in-out delay-200 ${
        status === "locked"
          ? "border-gray-500 cursor-not-allowed"
          : status === "unlocked"
          ? "border-blue-400  cursor-pointer"
          : "border-green-500"
      }  text-white rounded-full flex justify-center items-center text-3xl font-bold`}
    >
      {id}
    </ShimmerButton>
  );
};
