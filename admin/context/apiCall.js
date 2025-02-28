import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "./authActions";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}`,
});

export const login = async (userCredentials, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("auth/login", userCredentials);
    localStorage.setItem("user", JSON.stringify(res.data)); // Lưu user vào localStorage
    dispatch(loginSuccess(res.data));
  } catch {
    dispatch(loginFailure());
  }
};
