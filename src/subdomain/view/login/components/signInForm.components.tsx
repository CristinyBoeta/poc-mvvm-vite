import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "../../../components/button.components";
import EyesToggleIcons from "../../../components/eyesToggleIcons.components";
import InputField from "../../../components/input.components";
import {
  schema,
  signinFormType,
} from "../../../shared/validation/login.validation";
import type { SignInFormProps } from "./signin-prop-type";
import useSigninForm from "./useSigninForm.component";

const SignInForm = (props: SignInFormProps) => {
  const signInForm = useSigninForm();
  const [isShowButton, setIsShowButton] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<signinFormType>({
    mode: "onChange",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });

  const handlePasswordClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsShowButton(!isShowButton);
  };

  return (
    <form
      onSubmit={handleSubmit(props.onSubmit)}
      className="flex flex-col gap-8"
    >
      <InputField
        onEnterPress={signInForm.handleEnterPress}
        placeholder="Digite o seu e-mail ou número de telefone"
        labelText={"E-mail ou número de telefone"}
        {...register("username")}
      />
      {errors.username && (
        <span className="text-red-700 underline font-medium text-sm">
          {errors.username?.message}
        </span>
      )}
      <InputField
        onEnterPress={signInForm.handleEnterPress}
        placeholder="Digite a sua senha"
        labelText={"Senha"}
        type={isShowButton ? "text" : "password"}
        {...register("password")}
        iconRight={
          <EyesToggleIcons
            isVisible={isShowButton}
            style="absolute top-4 right-4 m-auto"
            action={handlePasswordClick}
          />
        }
      />
      {errors.password && (
        <span className="text-red-700 underline font-medium text-sm">
          {errors.password.message}
        </span>
      )}
      <SubmitButton
        ref={signInForm.buttonRef}
        isClicked={signInForm.isClicked}
        onChange={signInForm.handleClick}
        textButton={"Sign in"}
        isEnableButton={isValid}
      />
    </form>
  );
};

export default SignInForm;
