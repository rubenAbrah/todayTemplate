import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "/@/components/Layout";
import Wisard from "/@/pages/addUserData/Wisard";
import DashboardPage from "/@/pages/dashboard/DashboardPage";
import MinSectionsDashboard from "./pages/minSectiosDahboard/MinSectionsDashboard";
import ProfilePage from "/@/pages/profile/ProfilePage";
import AuthLoyauth from "/@/components/auth/AuthLoyauth";
import LoginPage from "/@/components/auth/login/LoginPage";
export default function App() {
  let isAuth = false;
  return (
    <BrowserRouter>
      <Routes>

        {isAuth && (
          <Route path="/" element={<AuthLoyauth />}>
            <Route index element={<LoginPage />} /> 
          </Route>
        )}

        {!isAuth &&(
          <Route path="/" element={<Layout />}>
            <Route index element={<Wisard />} />
            <Route path="blogs" element={<DashboardPage />} />
            <Route path="dashboard2" element={<MinSectionsDashboard />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={404} />
          </Route>
        )}

      </Routes>
    </BrowserRouter>
  );
}
