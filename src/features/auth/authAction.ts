import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterResponse, RegisterUserPayload } from "@/types/user";

const url = import.meta.env.API_URL;
const config = {
  headers: {
    "Content-Type": "application/json"
  }
}

export const registerUser = createAsyncThunk<
  RegisterResponse,
  RegisterUserPayload,
  { rejectValue: any }
>("auth/register", 
  async ({ email, username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/register`, { email, username, password }, config);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);