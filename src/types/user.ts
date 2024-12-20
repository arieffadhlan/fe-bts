export interface RegisterPayload {
  email: string;
  username: string;
  password: string;
}

export interface RegisterResponse {
  data: null
  message: string
  statusCode: number
  errorMessage: string | null;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface loginResponse {
  data: { token: string; }
  message: string;
  statusCode: number;
  errorMessage: string | null;
}