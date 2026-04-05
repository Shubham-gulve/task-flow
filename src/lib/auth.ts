import { api } from "./api";
import { User, AuthResponse } from "@/types";

class AuthManager {
  private static instance: AuthManager;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private user: User | null = null;
  private refreshPromise: Promise<void> | null = null;

  static getInstance(): AuthManager {
    if (!AuthManager.instance) {
      AuthManager.instance = new AuthManager();
    }
    return AuthManager.instance;
  }

  constructor() {
    if (typeof window !== "undefined") {
      this.accessToken = localStorage.getItem("accessToken");
      this.refreshToken = localStorage.getItem("refreshToken");
      const userStr = localStorage.getItem("user");
      if (userStr) {
        this.user = JSON.parse(userStr);
      }
    }
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    const response = (await api.login({ email, password })) as AuthResponse;
    this.setAuth(response);
    return response;
  }

  async register(email: string, password: string): Promise<AuthResponse> {
    const response = (await api.register({ email, password })) as AuthResponse;
    this.setAuth(response);
    return response;
  }

  private setAuth(authData: AuthResponse) {
    this.accessToken = authData.accessToken;
    this.refreshToken = authData.refreshToken;
    this.user = authData.user;

    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", authData.accessToken);
      localStorage.setItem("refreshToken", authData.refreshToken);
      localStorage.setItem("user", JSON.stringify(authData.user));
    }
  }

  async refreshAccessToken(): Promise<void> {
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    this.refreshPromise = this.doRefresh();
    return this.refreshPromise;
  }

  private async doRefresh(): Promise<void> {
    try {
      if (!this.refreshToken) {
        throw new Error("No refresh token available");
      }

      const response = (await api.refreshToken(
        this.refreshToken,
      )) as AuthResponse;
      this.accessToken = response.accessToken;
      this.refreshToken = response.refreshToken;

      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
      }
    } finally {
      this.refreshPromise = null;
    }
  }

  logout() {
    this.accessToken = null;
    this.refreshToken = null;
    this.user = null;

    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    }
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  getUser(): User | null {
    return this.user;
  }

  isAuthenticated(): boolean {
    return !!this.accessToken && !!this.user;
  }
}

export const auth = AuthManager.getInstance();
