import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
function SidebarComponent({ showMenu, setShowMenu }) {
  const [showSubMenu, setShowSubMenu] = useState(true)
  if (!useMediaQuery()) {
    setShowMenu(true)
  }
  return (

    <div className={`zind20 ${showMenu ? '' : "mlMinus280px"}   ${useMediaQuery() ? "positionAbsolute" : "sticky"}`}>
      <div
        className={`m15 br0375rem sidebarTextColor relative width250 scrollbar sidebarBackground sidebarText sidebarHeight overflowXhidden  p20 
        ${showMenu ? '' : "mlMinus280px"} `}
      >
        <div
          className="clossButton topAndRight0 positionAbsolute"
        >
          <span
            onClick={() => setShowMenu(false)} className="size32 alignCenter justifyCenter width50height50 flex">&times;</span>
        </div>
        <a href="/" className="flex my20 justifyCenter alignCenter">
          <img src="/src/assets/img/svg/logo.svg" />
        </a>

        <hr className="darkHr" />
        <div className="imgSection  my10  justifyCenter alignCenter">
          <img
            className="width100"
            src="/src/assets/img/backgrounds/sidebarImage.jpg"
            alt=""
          />
        </div>

        <hr className="darkHr" />
        <div className="flex  imgSection  my10">
          <img
            className="br50 size40"
            src="/src/assets/img/backgrounds/avatar.png"
            alt=""
          />
          <span className="m15">423</span>
        </div>
        <hr className="darkHr" />
        <nav className="colorWhite">
          <div onClick={() => setShowSubMenu(!showSubMenu)} className="p15 navHeader flex between alignCenter navHeader">
            <span className="">dashboardTitle</span>
            <span className={`navHeader ${showSubMenu ? 'rotate90' : 'rotate270'}`}>&#5171;</span>
          </div>
          {showSubMenu ?

            <ul>
              <li className="active br0375rem p10 m5">
                <img src="" alt="" className="icon" />
                <span>
                  <a href="">dashboard</a>
                </span>
              </li>
              <li className="br0375rem p10 m5">
                <img src="" alt="" className="icon" />
                <span>
                  <a href="">dashboard</a>
                </span>
              </li>
            </ul>
            : ''
          }
        </nav>
      </div></div>
  );
}

export default SidebarComponent;
