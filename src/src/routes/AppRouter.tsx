import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import SquadPage from "@/pages/Squad";
import { IsLoggedIn, RequiredLogin } from "@/guard/AuthGuard";
import DashboardLayout from "@/layout/DashboardLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<RequiredLogin />}>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard/>}/>
          <Route path="/squad" element={<SquadPage />} />
        </Route>
      </Route>
      <Route element={<IsLoggedIn />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
