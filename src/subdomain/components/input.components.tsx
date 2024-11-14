import React, { forwardRef, InputHTMLAttributes, ReactNode } from "react";

type InputFieldProps = {
  labelText?: string;
  onEnterPress: () => void;
  iconRight?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ labelText, onEnterPress, iconRight, ...rest }, ref) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onEnterPress();
      }
    };

    return (
      <div className="flex flex-col gap-2 w-full">
        {labelText && (
          <label
            className="w-full mb-2 text-sm font-medium text-gray-500"
            htmlFor="first_name"
          >
            {labelText}
          </label>
        )}
        <div className="relative">
          <input
            className="w-full p-2 h-14 text-xs md:text-sm outline-none text-gray-800 bg-white border-[1px] rounded-xl border-gray-400"
            alt="input"
            ref={ref}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            {...rest}
          />
          {iconRight}
        </div>
      </div>
    );
  }
);

export default InputField;
