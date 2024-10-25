import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IAuthViewModel } from "../../../viewModel/auth/auth.repository";
import Box from "../../components/box.components";
import SignInForm from "./components/signInForm.components";

type LoginProps = {
  responseAuthentication: IAuthViewModel;
};

const Login = ({ responseAuthentication }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await responseAuthentication.signIn(username, password);
    console.log({ res });

    if (res?.authenticated) {
      navigate("/dashboard");
      return;
    }
    setError(res?.message);
  };

  return (
    <div className="flex bg-custom-bg bg-cover bg-center w-screen h-screen items-center justify-center">
      <Box>
        <div className="flex flex-col gap-8">
          <p className="text-3xl font-medium text-gray-800">Sign in</p>
          <SignInForm
            password={password}
            username={username}
            onSubmit={handleSubmit}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        </div>
      </Box>
    </div>
  );
};

export default Login;
