import axios from "axios";
import { LoginPayload, RegisterPayload } from "@/types/user";

const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (data: LoginPayload) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.errorMessage || error.message);
  }
};

export const registerUser = async (data: RegisterPayload) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.errorMessage || error.message);
  }
};