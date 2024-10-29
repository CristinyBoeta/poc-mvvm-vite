import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "../../pages/Dashboard/dashboard.page";
import LoginPage from "../../pages/Login/login.page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
