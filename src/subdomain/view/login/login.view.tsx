import Box from "../../components/box.components";
import type useLogin from "../../shared/hooks/useLogin.view";
import SignInForm from "./components/signInForm.components";

const Login = (props: ReturnType<typeof useLogin>) => {
  return (
    <div className="flex bg-custom-bg bg-cover bg-center w-screen h-screen items-center justify-center">
      <Box>
        <div className="flex flex-col gap-8 w-full md:p-3">
          <p className="text-3xl font-medium text-gray-800">Sign in</p>
          <SignInForm {...props} />
        </div>
      </Box>
    </div>
  );
};

export default Login;
