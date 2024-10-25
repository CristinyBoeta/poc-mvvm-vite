import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "../../../components/button.components";
import InputField from "../../../components/input.components";

type SignInFormProps = {
  username: string;
  password: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => Promise<void>;
};

const SignInForm = ({
  onSubmit,
  setUsername,
  setPassword,
  password,
  username,
}: SignInFormProps) => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <InputField
        ref={useRef(null)}
        value={username}
        onChange={handleInputChange(setUsername)}
        onEnterPress={handleEnterPress}
        placeholder="Digite o seu e-mail ou número de telefone"
        labelText={"E-mail ou número de telefone"}
      />
      <InputField
        ref={useRef(null)}
        value={password}
        onChange={handleInputChange(setPassword)}
        onEnterPress={handleEnterPress}
        placeholder="Digite a sua senha"
        labelText={"Senha"}
      />
      <SubmitButton
        ref={buttonRef}
        isClicked={isClicked}
        onChange={handleClick}
        textButton={"Sign in"}
      />
    </form>
  );
};

export default SignInForm;
