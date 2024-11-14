import { signinFormType } from "../../../shared/validation/login.validation";

export type SignInFormProps = {
  onSubmit: (data: signinFormType) => Promise<void>;
};
