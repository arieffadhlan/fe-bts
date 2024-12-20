import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getChecklist = async () => {
  try {
    const token = localStorage.getItem("token") as string;
    const response = await axios.get(`${API_URL}/checklist`, {
      headers: { 
        Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.errorMessage || error.message);
  }
};

export const getChecklistById = async (id: number) => {
  try {
    const token = localStorage.getItem("token") as string;
    const response = await axios.get(`${API_URL}/checklist/${id}/item`, {
      headers: { 
        Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.errorMessage || error.message);
  }
};

export const addChecklist = async (name: string) => {
  try {
    const data = { name }
    const token = localStorage.getItem("token") as string;
    const response = await axios.post(`${API_URL}/checklist`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.errorMessage || error.message);
  }
};

export const deleteChecklist = async (id: number) => {
  try {
    const token = localStorage.getItem("token") as string;
    const response = await axios.delete(`${API_URL}/checklist/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.errorMessage || error.message);
  }
};

export const addItem = async (id: number, itemName: string) => {
  try {
    const data = { itemName }
    const token = localStorage.getItem("token") as string;
    const response = await axios.post(`${API_URL}/checklist/${id}/item`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.errorMessage || error.message);
  }
};