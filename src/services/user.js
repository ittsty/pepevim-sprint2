import { env } from "@/env";
import axios from "axios";

const API_URL = env.API_URL;
export const getUser = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/v2/auth/me`, {
      withCredentials: true,
    });
    return {
      data: res.data,
      success: true,
    };
    
  } catch (error) {
    console.log("get user error", error);
    return { success: false };
  }
};
