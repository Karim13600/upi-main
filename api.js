import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const verifyDocument = (formData) =>
  axios.post(`${API_BASE_URL}/verify-document`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const verifyRib = (data) =>
  axios.post(`${API_BASE_URL}/verify-rib`, data);
