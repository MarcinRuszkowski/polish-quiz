import React from "react";
import { FaHeart } from "react-icons/fa";

interface LivesProps {
  amountOfLives?: number;
}

export const Lives: React.FC<LivesProps> = ({ amountOfLives = 0 }) => {
  const totalLives = 3;
  const hearts = Array.from(
    { length: totalLives },
    (_, index) => index < amountOfLives
  );

  return (
    <div className="flex flex-row gap-3 text-xl">
      {hearts.map((heart, index) => (
        <FaHeart
          key={index}
          className={`${
            heart
              ? "text-red-500"
              : "text-gray-700 transition ease-in-out delay-200"
          }`}
        />
      ))}
    </div>
  );
};
