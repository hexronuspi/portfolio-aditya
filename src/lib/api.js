import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
});

export const generateText = async (text) => {
  const response = await apiClient.post("/generate", { text });
  return response.data;
};
