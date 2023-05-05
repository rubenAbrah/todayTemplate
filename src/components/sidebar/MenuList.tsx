import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
function MenuList() {
  const [showSubMenu, setShowSubMenu] = useState(true);
  // const location = useLocation();
  // useEffect(() => {
  //   document.querySelectorAll(".menuList .menuListItem").forEach((elem) => {
  //     if (location.pathname === elem.getAttribute("data-href")) {
  //       elem.className += " active";
  //     } else {
  //       elem.classList.remove("active");
  //     }
  //   });
  // }, [location.pathname]);

  return (
    <div className="">
      <div
        onClick={() => setShowSubMenu(!showSubMenu)}
        className="p15 navHeader flex between alignCenter  colorWhite navHeader"
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
        <nav className="menuList">
          <ul>
            {/* <li className="flex">
              <Link
                data-href="/"
                className="br0375rem p10 m5 width100 menuListItem"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                data-href="/blogs"
                className="br0375rem p10 m5 width100 menuListItem"
                to="/blogs"
              >
                Blogs
              </Link>
            </li>
            <li className="flex">
              <Link
                data-href="/login"
                className="br0375rem p10 m5 width100 menuListItem"
                to="/login"
              >
                login
              </Link>
            </li> */}
          </ul>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
}
export default MenuList;
