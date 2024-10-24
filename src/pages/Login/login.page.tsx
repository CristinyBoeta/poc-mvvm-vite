import { AuthService } from "../../services/domain/auth.domain";
import Login from "../../subdomain/view/login/login.view";
import { AuthViewModel } from "../../viewModel/auth.viewmodel";

const LoginPage = () => {
  const responseAuthService = new AuthService();
  const responseAuthentication = new AuthViewModel(responseAuthService);
  return (
    <div>
      <Login responseAuthentication={responseAuthentication} />
    </div>
  );
};

export default LoginPage;
