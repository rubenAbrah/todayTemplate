import "./App.css";
import SettingsSidebar from "./components/settingsSidebar/SettingsSidebar";
import SidebarComponent from "./components/sidebar/SidebarComponent";
import HeaderComponent from "./components/header/HeaderComponent"; 
import { useState } from "react";
import "devextreme-react/text-area"; 
import DashboardPage from "./pages/dashboard/DashboardPage";
import UserData from "./pages/addUserData/UserData";
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(false); 
  return (
    <>
      <SettingsSidebar
        showSettingsMenu={showSettingsMenu}
        setShowSettingsMenu={setShowSettingsMenu}
        setShowHeader={setShowHeader}
      />
      <div className="flex width100"> 

          <SidebarComponent showMenu={showMenu} setShowMenu={setShowMenu} /> 
          <div className="contentWrapper mXauto px20 width100">
          <HeaderComponent
            showHeader={showHeader}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            showSettingsMenu={showSettingsMenu}
            setShowSettingsMenu={setShowSettingsMenu}
          /> 
          {/* <Outlet/> */}
          {/* <DashboardPage/> */}
          <UserData/>
        </div></div>
    </>
  );
}

export default App;
