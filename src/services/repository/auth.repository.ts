export interface IAuthService {
  success: boolean;
  token?: string;
  message?: string;
}

export interface AuthRepository {
  signIn(username: string, password: string): Promise<IAuthService>;
}
