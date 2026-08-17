import type {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from "../models/auth.types";

class AuthService {
  async login(_credentials: LoginCredentials): Promise<AuthResponse> {
    throw new Error("AuthService.login is not implemented yet");
  }

  async register(_credentials: RegisterCredentials): Promise<AuthResponse> {
    throw new Error("AuthService.register is not implemented yet");
  }
}

export const authService = new AuthService();
