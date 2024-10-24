export class AuthError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = "AuthError";
  }
}
