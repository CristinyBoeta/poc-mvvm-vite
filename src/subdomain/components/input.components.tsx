import { forwardRef } from "react";

type InputFieldProps = {
	labelText?: string;
	onEnterPress: () => void;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
};
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
	({ labelText, value, onChange, onEnterPress, placeholder }, ref) => {
		const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
			if (event.key === "Enter") {
				onEnterPress();
			}
		};

		return (
			<div>
				{labelText && (
					<label
						className="block mb-2 text-sm font-medium text-gray-500"
						htmlFor="first_name"
					>
						{labelText}
					</label>
				)}
				<input
					className="w-[600px] p-2 h-14 outline-none text-gray-800 bg-white border-[1px] rounded-xl border-gray-400"
					alt="input"
					ref={ref}
					value={value}
					onChange={onChange}
					onKeyDown={handleKeyDown}
					placeholder={placeholder}
				/>
			</div>
		);
	},
);

export default InputField;
