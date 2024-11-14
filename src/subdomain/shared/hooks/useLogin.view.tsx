import { useNavigate } from "react-router-dom";
import type { IAuthViewModel } from "../../../viewModel/auth/repository/auth.repository";
import { signinFormType } from "../validation/login.validation";

type UseLoginProps = {
  responseAuthentication: IAuthViewModel;
};

const useLogin = ({ responseAuthentication }: UseLoginProps) => {
  const navigate = useNavigate();

  const onSubmit = async (data: signinFormType) => {
    const res = await responseAuthentication.signIn(
      data.username,
      data.password
    );

    if (res?.authenticated) {
      navigate("/dashboard");
      return;
    }
    alert(res?.message);
  };

  return {
    onSubmit,
  };
};

export default useLogin;
