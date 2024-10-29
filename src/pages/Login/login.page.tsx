import { AuthService } from "../../services/domain/auth.domain";
import useLogin from "../../subdomain/shared/hooks/useLogin.view";
import Login from "../../subdomain/view/login/login.view";
import { AuthViewModel } from "../../viewModel/auth/auth.viewmodel";

const LoginPage = () => {
  const responseAuthService = new AuthService(); //model - regras de negócios
  const responseAuthentication = new AuthViewModel(responseAuthService); // viewmodel - adaptação de retornos da model para a view
  const responseUseLogin = useLogin({ responseAuthentication }); // bind - custom hook bind para realizar lógicas especificas da view

  return <Login {...responseUseLogin} />;
};

export default LoginPage;
