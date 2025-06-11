import axios from "axios";

const BASE_URL = import.meta.env.BASE_API_URL;

let token: string = "";

export const setToken = (newToken: string) => {
  token = newToken;
};

const authHeader = () => ({
  headers: { Authorization: `Bearer ${token}` },
});

// Login
export const login = async (email: string, password: string) => {
  const res = await axios.post(`${BASE_URL}/login`, { email, password });
  return res.data;
};

// Logout
export const logout = async () => {
  return axios.post(`${BASE_URL}/logout`, {}, authHeader());
};

// List squads
export const getSquads = async () => {
  const res = await axios.get(`${BASE_URL}/squads`, authHeader());
  return res.data;
};

// Create squad
export const createSquad = async (data: unknown) => {
  const res = await axios.post(`${BASE_URL}/squads`, data, authHeader());
  return res.data;
};

// Show squad
export const getSquad = async (id: unknown) => {
  const res = await axios.get(`${BASE_URL}/squads/${id}`, authHeader());
  return res.data;
};

// Update squad
export const updateSquad = async (id: unknown, data: unknown) => {
  const res = await axios.put(`${BASE_URL}/squads/${id}`, data, authHeader());
  return res.data;
};

// Delete squad
export const deleteSquad = async (id: unknown) => {
  const res = await axios.delete(`${BASE_URL}/squads/${id}`, authHeader());
  return res.data;
};

// Get user
export const getUser = async () => {
  const res = await axios.get(`${BASE_URL}/squads/user`, authHeader());
  return res.data;
};

// Get project
export const getProject = async () => {
  const res = await axios.get(`${BASE_URL}/squads/project`, authHeader());
  return res.data;
};
