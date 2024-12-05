import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Lives } from "./Lives";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { levelId } = useParams<{ levelId: string }>();
  const currentLevel = levelId ? Number(levelId) : null;

  const currentLives = useSelector((state: RootState) =>
    currentLevel !== null
      ? state.quiz.levels.find((level) => level.id === currentLevel)?.lives
      : null
  );

  console.log("Level ID from params:", currentLevel);

  return (
    <div className="bg-primary text-white py-4 px-8 flex justify-between items-center sticky top-0">
      <div className="text-2xl font-bold">Quiz</div>
      {location.pathname.includes("/level/") &&
        currentLevel &&
        currentLives !== null && (
          <div className="flex items-center gap-8 text-xl">
            <div>Lvl: {currentLevel}</div>
            <Lives amountOfLives={currentLives} />
          </div>
        )}
    </div>
  );
};
