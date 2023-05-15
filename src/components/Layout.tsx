import SettingsSidebar from "./settingsSidebar/SettingsSidebar";
import SidebarComponent from "./sidebar/SidebarComponent";
import HeaderComponent from "./header/HeaderComponent";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "devextreme-react/text-area"; 
import useMediaQuery from "../hooks/useMediaQuery";
function Layout() {
  const [showMenu, setShowMenu] = useState(useMediaQuery());
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(false);  
 
  return (
    <>
      <div className="">
        <SettingsSidebar
          showSettingsMenu={showSettingsMenu}
          setShowSettingsMenu={setShowSettingsMenu}
          setShowHeader={setShowHeader}
        />
        <div className="flex">
          <SidebarComponent showMenu={showMenu} setShowMenu={setShowMenu} />
          <div className="contentWrapper mXauto px15">
            <HeaderComponent
              showHeader={showHeader}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              showSettingsMenu={showSettingsMenu}
              setShowSettingsMenu={setShowSettingsMenu}
            />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
