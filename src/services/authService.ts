import axiosInstance from '../auth/FetchInterceptor';
import { LoginRequest, LoginResponse } from '../models/service.model';

class AuthService {
  constructor() {}

  static async login(data: LoginRequest): Promise<LoginResponse> {
    try {
      // Using object-style Axios request configuration
      const response = await axiosInstance({
        url: '/auth/login',
        method: 'post',
        data: data, // Pass login data here
      });

      return response.data; // Return the login response
    } catch (error: any) {
      // Handle error appropriately
      throw new Error(error);
    }
  }
}

export const authService = new AuthService();
export default AuthService;
