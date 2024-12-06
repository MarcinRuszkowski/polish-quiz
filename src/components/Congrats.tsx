import React, { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import confetti from "canvas-confetti";

export const Congrats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => setIsVisible(false);

  useEffect(() => {
    if (isVisible) {
      const end = Date.now() + 3 * 1000;
      const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

      const frame = () => {
        if (Date.now() > end) return;

        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          startVelocity: 60,
          origin: { x: 0, y: 0.5 },
          colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          startVelocity: 60,
          origin: { x: 1, y: 0.5 },
          colors,
        });

        requestAnimationFrame(frame);
      };

      frame();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="relative inset-0 flex flex-col gap-5 items-center justify-center bg-msecondary text-white max-w-full  max-h-[350px] p-10 rounded-lg shadow-lg">
      <div className="text-4xl md:text-5xl font-bold">Congratulations!</div>
      <div className="text-lg text-blue-300">You completed all levels!</div>
      <div className="text-md mt-4 text-center">
        You already know animals in Polish. Keep learning!
      </div>
      <button
        onClick={handleClose}
        className="text-3xl text-white hover:bg-msecondary-hover rounded-md absolute top-2 right-2"
      >
        <IoIosClose />
      </button>
    </div>
  );
};
