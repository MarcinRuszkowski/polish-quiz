import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

export const Congrats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div className="flex flex-col items-center justify-around bg-secondary text-white w-[500px] h-[300px] rounded-lg shadow-lg relative">
      <div className="text-5xl font-bold">Congratulations!</div>
      <div className="text-lg text-blue-300">You completed all levels!</div>
      <div className="text-md">Now you can animals in polish. Keep learning polish</div>
      <button
        onClick={handleClose}
        className="text-3xl text-white hover:bg-secondary-hover  rounded-md absolute top-1 right-1"
      >
        <IoIosClose />
      </button>
    </div>
  );
};
