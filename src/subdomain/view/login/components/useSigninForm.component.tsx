import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const useSigninForm = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { handleSubmit } = useForm();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = async () => {
    setIsClicked(!isClicked);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setter(e.target.value);

  const handleEnterPress = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return {
    handleClick,
    handleInputChange,
    handleEnterPress,
    handleSubmit,
    buttonRef,
    isClicked,
  };
};

export default useSigninForm;
