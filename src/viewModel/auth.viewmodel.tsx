import type { AuthRepository } from "../services/repository/auth.repository";
import { AuthError } from "../subdomain/shared/utils/authError";
import type { IAuthViewModel } from "./repository/auth.repository";

export class AuthViewModel implements IAuthViewModel {
  constructor(private authRepository: AuthRepository) {}

  async signIn(
    username: string,
    password: string
  ): Promise<
    { authenticated: boolean; message?: string | undefined } | undefined
  > {
    try {
      const response = await this.authRepository.signIn(username, password);
      if (response.success) {
        return { authenticated: true };
      }
    } catch (error: unknown) {
      if (error instanceof AuthError) {
        return { authenticated: false, message: error.message };
      }
      return {
        authenticated: false,
        message: "internal server error",
      };
    }
  }
}
