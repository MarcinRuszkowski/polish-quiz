import React from "react";

export const FailAlert: React.FC = () => {
  return (
    <div className="bg-secondary text-white px-4 py-4 rounded-lg flex flex-col items-center justify-center w-[300px]">
      <div className="text-xl flex flex-row gap-1.5">
        You <div className="text-red-500">lost</div> all lives. Try again!
      </div>
      <div className="text-xs animate-pulse">RESTARTING LEVEL...</div>
    </div>
  );
};
