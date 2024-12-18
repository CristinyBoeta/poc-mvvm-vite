import type { ReactNode } from "react";

const Box = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-[18.75rem] h-[30rem] md:w-[43.75rem] md:h-[48.75rem] bg-white p-4 rounded-3xl shadow-lg items-center justify-center">
      {children}
    </div>
  );
};

export default Box;
