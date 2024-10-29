import { forwardRef } from "react";

type SubmitButtonProps = {
  isClicked: boolean;
  onClick?: () => Promise<void>;
  textButton: string;
  onChange: () => void;
};

const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ isClicked, onClick, onChange, textButton }, ref) => {
    return (
      <button
        className={`flex items-center outline-none justify-center w-full h-[3.125rem] rounded-3xl cursor-pointer 
			${
        isClicked ? "bg-slate-300 outline-none " : "bg-slate-400"
      } hover:border-none focus:outline-none focus:none`}
        ref={ref}
        type="submit"
        aria-pressed={isClicked}
        onClick={onClick}
        onChange={onChange}
        tabIndex={0}
      >
        <p className="text-lg text-white">{textButton}</p>
      </button>
    );
  }
);

export default SubmitButton;
