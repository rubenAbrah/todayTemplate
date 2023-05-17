import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "/@/components/Layout";
import Wisard from "/@/pages/addUserData/Wisard";
import DashboardPage from "/@/pages/dashboard/DashboardPage";
import LoginPage from "/@/pages/login/LoginPage";
import MinSectionsDashboard from "/@/pages/minSectiosDahboard.tsx/MinSectionsDashboard"; 
import ProfilePage from "/@/pages/profile/ProfilePage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Wisard />} />
          <Route path="blogs" element={<DashboardPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard2" element={<MinSectionsDashboard />} /> 
          <Route path="profile" element={<ProfilePage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
