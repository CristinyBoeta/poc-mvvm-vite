import { AuthError } from "../../subdomain/shared/utils/authError";
import type {
  AuthRepository,
  IAuthService,
} from "../repository/auth.repository";

export class AuthService implements AuthRepository {
  public async signIn(
    username: string,
    password: string
  ): Promise<IAuthService> {
    if (username === "test" && password === "test") {
      return { success: true, token: "mockToken" };
    }
    throw new AuthError("Credenciais inválidas");
  }
}
