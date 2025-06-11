import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const PostRequest = async (url: string, data: any) => {
  try {
    const token = sessionStorage.getItem("token");
    const res = await axios.post(`${BASE_URL}/api/${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const PutRequest = async (url: string, data: any) => {
  try {
    const token = sessionStorage.getItem("token");
    const res = await axios.put(`${BASE_URL}/api/${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const DeleteRequest = async (url: string) => {
  try {
    const token = sessionStorage.getItem("token");
    const res = await axios.delete(`${BASE_URL}/api/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const GetRequest = async (url: string) => {
  try {
    const token = sessionStorage.getItem("token");
    const res = await axios.get(`${BASE_URL}/api/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const LoginRequest = async (
  url: string,
  credentials: { email: string; password: string }
) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/${url}`, credentials);

    if (res.status === 200 && res.data.token) {
      sessionStorage.setItem("token", res.data.token);
    }
    console.log(res);
    return res;
  } catch (error: any) {
    return error.response ?? error;
  }
};

export const LogoutRequest = async () => {
  try {
    sessionStorage.removeItem("token");
    return true;
  } catch (error) {
    return error;
  }
};
