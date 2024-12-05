import React, { useState } from "react";
import { AnswerCard } from "./AnswerCard";
import questions from "../data/questions";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { completeLevel } from "../store/quizSlice";

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
        alert("Congratulations! Level completed.");
        navigate("/");
      }
    } else {
      setSelectedAnswerStyle("border-red-500");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSelectedAnswerStyle("border-blue-500");
      setLives((prevLives) => Math.max(prevLives - 1, 0));
      if (lives - 1 <= 0) {
        alert("You lost all lives. Restarting level.");
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
  };

  const currentQuestion = levelQuestions.questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center text-white font-medium gap-8 py-5">
      <div className="text-2xl">Lives: {lives}</div>
      <div className="text-xl">
        Question {currentQuestionIndex + 1} of {levelQuestions.questions.length}
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
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600"
            disabled={!selectedAnswer}
          >
            Check
          </button>
          <button
            onClick={resetLevel}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
