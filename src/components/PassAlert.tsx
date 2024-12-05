import React from "react";

export const PassAlert: React.FC = () => {
  return (
    <div className="bg-msecondary text-white px-4 py-4 rounded-lg flex flex-col items-center justify-center w-[300px]">
      <div className="text-xl flex flex-row gap-1.5">
        You <div className="text-green-500">completed</div> the level!
      </div>
    </div>
  );
};
