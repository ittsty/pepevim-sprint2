import axios from "axios";
import { env } from "../env";

const API_URL = env.API_URL;

export const register = async ({
  first_name,
  last_name,
  email,
  password,
  confirm_password,
}) => {
  try {
    const payload = {
      first_name,
      last_name,
      email,
      password,
      confirm_password,
    };

    const res = await axios.post(`${API_URL}/api/v2/user`, payload);

    return {
      success: true,
      message: res.data.message,
    };
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        message: error.response.data.message,
      };
    }

    return {
      success: false,
      message: "Network error",
    };
  }
};

export const login = async ({ email, password }) => {
  try {
    const payload = { email, password };
    console.log("🚀 ~ login ~ payload:", payload);

    const res = await axios.post(`${API_URL}/api/v2/auth/login`, payload, {
      withCredentials: true,
    });

    return {
      success: true,
      message: res.data.message,
    };
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        message: error.response.data.message,
      };
    }

    return {
      success: false,
      message: "Network error",
    };
  }
};

export const logout = async () => {
  try {
    await axios.post(
      `${API_URL}/api/v2/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );

    return { success: true };
  } catch (error) {
    console.log("logout error", error);
    return { success: false };
  }
};
