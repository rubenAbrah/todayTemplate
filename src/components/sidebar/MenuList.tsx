import { useState } from "react";
function MenuList() {
  const [showSubMenu, setShowSubMenu] = useState(true);
  return (
    <nav className="colorWhite">
      <div
        onClick={() => setShowSubMenu(!showSubMenu)}
        className="p15 navHeader flex between alignCenter navHeader"
      >
        <span className="">dashboardTitle</span>
        <span>
          <i
            className={`navHeader ${
              showSubMenu ? "subMenuOpen" : "subMenuClose"
            }`}
            aria-hidden="true"
          ></i>
        </span>
      </div>
      {showSubMenu ? (
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
      ) : (
        ""
      )}
    </nav>
  );
}
export default MenuList;
