import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { LvlCircle } from "./LvlCircle";

export const LvlPath = () => {
  const levels = useSelector((state: RootState) => state.quiz.levels);

  return (
    <div className="flex gap-10 justify-center">
      {levels.map((level) => (
        <LvlCircle key={level.id} id={level.id} status={level.status} />
      ))}
    </div>
  );
};
