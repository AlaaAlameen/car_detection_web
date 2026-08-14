import type {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from "../models/auth.types";

/**
 * AuthService — prepared for future API integration.
 * Methods are placeholders and throw until implemented.
 */
class AuthService {
  async login(_credentials: LoginCredentials): Promise<AuthResponse> {
    // TODO: integrate with API
    throw new Error("AuthService.login is not implemented yet");
  }

  async register(_credentials: RegisterCredentials): Promise<AuthResponse> {
    // TODO: integrate with API
    throw new Error("AuthService.register is not implemented yet");
  }
}

export const authService = new AuthService();
