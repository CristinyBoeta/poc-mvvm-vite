type ResponseSingIn =
  | {
      authenticated: boolean;
      message?: string | undefined;
    }
  | undefined;

export interface IAuthViewModel {
  signIn(
    username: string,
    password: string
  ): Promise<ResponseSingIn | undefined>;
}
