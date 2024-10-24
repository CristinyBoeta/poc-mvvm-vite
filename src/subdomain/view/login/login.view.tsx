import { useState } from "react";
import type { IAuthViewModel } from "../../../viewModel/repository/auth.repository";
import Box from "../../components/box.components";
import SignInForm from "./components/signInForm.components";

type LoginProps = {
  responseAuthentication: IAuthViewModel;
};

const Login = ({ responseAuthentication }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>();

  const handleSubmit = async () => {
    const res = await responseAuthentication.signIn(username, password);
    console.log({ res });

    if (res?.authenticated) {
      return;
    }
    setError(res?.message);
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Box>
        <div className="flex flex-col gap-8">
          <p className="text-3xl font-medium text-gray-800">Sign in</p>
          <SignInForm
            password={password}
            username={username}
            handleSubmit={handleSubmit}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        </div>
      </Box>
    </div>
  );
};

export default Login;
