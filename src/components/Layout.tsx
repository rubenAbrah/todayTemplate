import SettingsSidebar from "./settingsSidebar/SettingsSidebar";
import SidebarComponent from "./sidebar/SidebarComponent";
import HeaderComponent from "./header/HeaderComponent";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "devextreme-react/text-area";
function Layout() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  return (
    <> 
      {location.pathname !== "/login" ? (
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
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default Layout;
