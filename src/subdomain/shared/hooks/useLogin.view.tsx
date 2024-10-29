import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IAuthViewModel } from "../../../viewModel/auth/repository/auth.repository";

type UseLoginProps = {
  responseAuthentication: IAuthViewModel;
};

const useLogin = ({ responseAuthentication }: UseLoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    const res = await responseAuthentication.signIn(username, password);
    console.log({ res });

    if (res?.authenticated) {
      navigate("/dashboard");
      return;
    }
    alert(res?.message);
  };

  return {
    setUsername,
    setPassword,
    onSubmit,
    username,
    password,
  };
};

export default useLogin;
