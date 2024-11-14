import { useRef, useState } from "react";

const useSigninForm = () => {
  const [isClicked, setIsClicked] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = async () => {
    setIsClicked(!isClicked);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  const handleEnterPress = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return {
    handleClick,
    handleEnterPress,
    buttonRef,
    isClicked,
  };
};

export default useSigninForm;
