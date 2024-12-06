import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { completeLevel, resetGame, loseLife } from "../store/quizSlice";
import { AnswerCard } from "./AnswerCard";
import { Lives } from "./Lives";
import { GrPowerReset } from "react-icons/gr";
import { FailAlert } from "./FailAlert";
import { PassAlert } from "./PassAlert";

export const LevelPage: React.FC = () => {
  const { levelId } = useParams<{ levelId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const levelData = useSelector((state: RootState) =>
    state.quiz.levels.find((level) => level.id === Number(levelId))
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [selectedAnswerStyle, setSelectedAnswerStyle] =
    useState("border-blue-400");
  const [showFailAlert, setShowFailAlert] = useState(false);
  const [showPassAlert, setShowPassAlert] = useState(false);

  if (!levelData) {
    return <div className="text-white text-2xl">Level not found</div>;
  }

  const currentQuestion = levelData.questions[currentQuestionIndex];

  const handleCheckAnswer = async (correctAnswer: string) => {
    if (selectedAnswer === correctAnswer) {
      setSelectedAnswerStyle("border-green-500");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSelectedAnswerStyle("border-blue-500");

      if (currentQuestionIndex + 1 < levelData.questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        dispatch(completeLevel(Number(levelId)));
        setShowPassAlert(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setShowPassAlert(false);
        navigate("/");
      }
    } else {
      setSelectedAnswerStyle("border-red-500");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSelectedAnswerStyle("border-blue-500");
      dispatch(loseLife(Number(levelId)));

      if (levelData.lives - 1 <= 0) {
        setShowFailAlert(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setShowFailAlert(false);
        resetGameHandler();
      }
    }
    setSelectedAnswer(null);
  };

  const resetGameHandler = () => {
    const confirmReset = window.confirm("Are you sure to restart the game?");
    if (confirmReset) {
      dispatch(resetGame());
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center text-white font-medium gap-8 py-5 relative">
      <div className="flex flex-col lg:items-end lg:absolute top-5 right-5 text-xl gap-8">
        <div className="flex flex-col items-center gap-2">
          <div>Lvl: {levelId}</div>
          <Lives amountOfLives={levelData.lives} />
          <div>
            Question: {currentQuestionIndex + 1} / {levelData.questions.length}
          </div>
        </div>
        {!showFailAlert && <FailAlert />}
        {showPassAlert && <PassAlert />}
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="text-2xl">{currentQuestion.question}</div>
        <div className="grid grid-cols-2 gap-5 px-2">
          {currentQuestion.options.map((option, idx) => (
            <AnswerCard
              key={idx}
              answer={option}
              selectedAnswer={selectedAnswer}
              selectedAnswerStyle={
                selectedAnswer === option
                  ? selectedAnswerStyle
                  : "border-gray-400"
              }
              onClick={() => setSelectedAnswer(option)}
            />
          ))}
        </div>
        <div className="relative">
          <button
            onClick={() =>
              handleCheckAnswer(
                currentQuestion.options[currentQuestion.correct]
              )
            }
            className="bg-mprimary text-white text-2xl px-10 py-4 rounded-lg hover:bg-mprimary-hover hover:scale-105 ease-in duration-150"
            disabled={!selectedAnswer}
          >
            Check the answer
          </button>
          <button
            onClick={resetGameHandler}
            title="Restart the game"
            className="absolute bg-msecondary hover:bg-msecondary-hover text-white p-3 m-3 rounded-full hover:rotate-45 ease-in duration-150"
          >
            <GrPowerReset />
          </button>
        </div>
      </div>
    </div>
  );
};
