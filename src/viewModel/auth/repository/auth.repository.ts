type ResponseSingIn =
  | {
      authenticated: boolean;
      message?: string;
    }
  | undefined;

export interface IAuthViewModel {
  signIn(
    username: string,
    password: string
  ): Promise<ResponseSingIn | undefined>;
}
