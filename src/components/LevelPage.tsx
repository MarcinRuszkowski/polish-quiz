import React, { useState } from "react";
import { AnswerCard } from "./AnswerCard";
import questions from "../data/questions";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { completeLevel } from "../store/quizSlice";
import { Lives } from "./Lives";
import { GrPowerReset } from "react-icons/gr";
import { FailAlert } from "./FailAlert";
import { PassAlert } from "./PassAlert";

export const LevelPage: React.FC = () => {
  const { levelId } = useParams<{ levelId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const levelQuestions = questions.find(
    (level) => level.id === Number(levelId)
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [selectedAnswerStyle, setSelectedAnswerStyle] =
    useState("border-blue-400");
  const [lives, setLives] = useState(3);
  const [showFailAlert, setShowFailAlert] = useState(false);
  const [showPassAlert, setShowPassAlert] = useState(false);

  if (!levelQuestions) {
    return <div className="text-white text-2xl">Level not found</div>;
  }

  const handleCheckAnswer = async (correctAnswer: string) => {
    if (selectedAnswer === correctAnswer) {
      setSelectedAnswerStyle("border-green-500");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSelectedAnswerStyle("border-blue-500");
      if (currentQuestionIndex + 1 < levelQuestions.questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        dispatch(completeLevel(Number(levelId)));
        setShowPassAlert(true); // Wyświetl PassAlert
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setShowPassAlert(false);
        navigate("/"); // Przejście do strony głównej
      }
    } else {
      setSelectedAnswerStyle("border-red-500");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSelectedAnswerStyle("border-blue-500");
      setLives((prevLives) => Math.max(prevLives - 1, 0));
      if (lives - 1 <= 0) {
        setShowFailAlert(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setShowFailAlert(false);
        setCurrentQuestionIndex(0);
        setLives(3);
      }
    }
    setSelectedAnswer(null);
  };

  const resetLevel = () => {
    setCurrentQuestionIndex(0);
    setLives(3);
    setSelectedAnswer(null);
    setSelectedAnswerStyle("border-gray-400");
    setShowFailAlert(false);
    setShowPassAlert(false);
  };

  const currentQuestion = levelQuestions.questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center text-white font-medium gap-8 py-5 relative">
      <div className="flex flex-col items-end absolute top-5 right-5 text-xl gap-8">
        <div className="flex flex-col items-center gap-2">
          <div>Lvl: {levelId}</div>
          <Lives amountOfLives={lives} />
          <div>
            Question: {currentQuestionIndex + 1} /{" "}
            {levelQuestions.questions.length}
          </div>
        </div>
        {showFailAlert && <FailAlert />}
        {showPassAlert && <PassAlert />}
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="text-2xl">{currentQuestion.question}</div>
        <div className="grid grid-cols-2 gap-5">
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
        <div className="flex gap-5">
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
            onClick={resetLevel}
            title="restart the lvl"
            className="bg-msecondary hover:bg-msecondary-hover text-white p-3 m-3 rounded-full hover:rotate-45 ease-in duration-150"
          >
            <GrPowerReset />
          </button>
        </div>
      </div>
    </div>
  );
};
