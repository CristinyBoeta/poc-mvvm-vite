import { AuthService } from "../../services/domain/auth.domain";
import Login from "../../subdomain/view/login/login.view";
import { AuthViewModel } from "../../viewModel/auth/auth.viewmodel";

const LoginPage = () => {
  const responseAuthService = new AuthService();
  const responseAuthentication = new AuthViewModel(responseAuthService);
  return <Login responseAuthentication={responseAuthentication} />;
};

export default LoginPage;
