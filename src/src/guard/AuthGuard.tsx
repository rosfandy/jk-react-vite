import type { JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const RequiredLogin = (): JSX.Element => {
  const token = sessionStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export const IsLoggedIn = (): JSX.Element => {
  const token = sessionStorage.getItem("token");
  return token ? <Navigate to="/" replace /> : <Outlet />;
};
