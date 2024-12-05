import React from "react";
import { iconAnswerMap } from "../data/iconAnswerMap";

interface AnswerProps {
  answer: string;
  selectedAnswer: string | null;
  selectedAnswerStyle: string;
  onClick: () => void;
}

export const AnswerCard: React.FC<AnswerProps> = ({
  answer,
  selectedAnswer,
  selectedAnswerStyle,
  onClick,
}) => {
  const isSelected = selectedAnswer === answer;

  return (
    <div
      onClick={onClick}
      className={`flex flex-col gap-5 items-center bg-secondary px-20 rounded-lg py-8 text-xl border-4 cursor-pointer ${
        isSelected ? selectedAnswerStyle : "border-gray-400"
      }`}
    >
      {iconAnswerMap(answer)}

      {answer}
    </div>
  );
};
