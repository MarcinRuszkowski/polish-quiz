import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { LvlCircle } from "./LvlCircle";
import { Congrats } from "./Congrats";

export const LvlPath = () => {
  const levels = useSelector((state: RootState) => state.quiz.levels);
  const allLevelsCompleted = levels.every(
    (level) => level.status === "completed"
  );

  return (
    <div className="flex flex-col items-center gap-10 justify-center m-10 relative">
      {allLevelsCompleted ? (
        <Congrats />
      ) : (
        <div className="flex gap-10">
          {levels.map((level) => (
            <LvlCircle key={level.id} id={level.id} status={level.status} />
          ))}
        </div>
      )}
    </div>
  );
};
