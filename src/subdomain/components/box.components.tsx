import type { ReactNode } from "react";

const Box = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex w-[700px] h-[780px] bg-white p-4 rounded-3xl shadow-lg items-center justify-center">
			{children}
		</div>
	);
};

export default Box;
