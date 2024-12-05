import React, { useState, useRef } from "react";
import { IoIosClose } from "react-icons/io";
import type { ConfettiRef } from "./ui/confetti";
import Confetti from "./ui/confetti";

export const Congrats: React.FC = () => {
  const confettiRef = useRef<ConfettiRef>(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div className="flex flex-col items-center justify-around bg-msecondary text-white w-[500px] h-[300px] rounded-lg shadow-lg relative">
      <div className="text-5xl font-bold">Congratulations!</div>
      <div className="text-lg text-blue-300">You completed all levels!</div>
      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
      <div className="text-md">
        Now you can animals in polish. Keep learning polish
      </div>
      <button
        onClick={handleClose}
        className="text-3xl text-white hover:bg-msecondary-hover  rounded-md absolute top-1 right-1"
      >
        <IoIosClose />
      </button>
    </div>
  );
};
