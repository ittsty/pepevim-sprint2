const API_URL = "http://localhost:3000/api";

export const contactApi = async (data) => {
    const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return response.json();
};