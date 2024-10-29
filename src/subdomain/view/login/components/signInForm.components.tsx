import { useRef } from "react";
import SubmitButton from "../../../components/button.components";
import InputField from "../../../components/input.components";
import type { SignInFormProps } from "./signin-prop-type";
import useSigninForm from "./useSigninForm.component";

const SignInForm = (props: SignInFormProps) => {
  const signInForm = useSigninForm();

  return (
    <form
      onSubmit={signInForm.handleSubmit(props.onSubmit)}
      className="flex flex-col gap-8"
    >
      <InputField
        ref={useRef(null)}
        value={props.username}
        onChange={signInForm.handleInputChange(props.setUsername)}
        onEnterPress={signInForm.handleEnterPress}
        placeholder="Digite o seu e-mail ou número de telefone"
        labelText={"E-mail ou número de telefone"}
      />
      <InputField
        ref={useRef(null)}
        value={props.password}
        onChange={signInForm.handleInputChange(props.setPassword)}
        onEnterPress={signInForm.handleEnterPress}
        placeholder="Digite a sua senha"
        labelText={"Senha"}
      />
      <SubmitButton
        ref={signInForm.buttonRef}
        isClicked={signInForm.isClicked}
        onChange={signInForm.handleClick}
        textButton={"Sign in"}
      />
    </form>
  );
};

export default SignInForm;
