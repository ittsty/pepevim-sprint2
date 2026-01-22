import axios from "axios";
import { env } from "../env";

const API_URL = env.API_URL;

export const createContact = async (payload) => {
    try {
        const res = await axios.post(`${API_URL}/api/v1/contact`, payload);
        return { success: true, message: res.data.message };
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return { success: false, message: "Failed to send message." };
    }
};