import React from "react";

export const FailAlert: React.FC = () => {
  return (
    <div className="bg-msecondary text-white text-xl px-4 py-4 gap-2 rounded-lg flex flex-col items-center justify-center min-w-fit">
      <div className="flex flex-row lg:flex-col gap-2 xl:flex-row">
        <div className=" flex flex-row gap-1.5">
          You <div className="text-red-500">lost</div> all lives.
        </div>
        <div className="">Try again!</div>
      </div>
      <div className="text-xs animate-pulse">RESTARTING LEVEL...</div>
    </div>
  );
};
