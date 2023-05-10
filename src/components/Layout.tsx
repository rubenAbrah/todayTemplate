import SettingsSidebar from "./settingsSidebar/SettingsSidebar";
import SidebarComponent from "./sidebar/SidebarComponent";
import HeaderComponent from "./header/HeaderComponent";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "devextreme-react/text-area";
function Layout({children}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  // const location = useLocation(); 
  return (
    <>
      {/* {location.pathname !== "/login" ? ( */}
        <div className="">
          <SettingsSidebar
            showSettingsMenu={showSettingsMenu}
            setShowSettingsMenu={setShowSettingsMenu}
            setShowHeader={setShowHeader}
          />
          <div className="flex width100">
            <SidebarComponent showMenu={showMenu} setShowMenu={setShowMenu} />
            <div className="contentWrapper mXauto px15 width100">
              <HeaderComponent
                showHeader={showHeader}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                showSettingsMenu={showSettingsMenu}
                setShowSettingsMenu={setShowSettingsMenu}
              />
              {children}
            </div>
          </div>
        </div>
      {/* ) : (
              <Outlet />
        {children}
      )} */}
    </>
  );
}

export default Layout;
