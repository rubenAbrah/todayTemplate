import { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
function HeaderComponent({
  showMenu,
  showSettingsMenu,
  setShowSettingsMenu,
  showHeader,
  setShowMenu,
}) {
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", onScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = (e) => {
    if (showHeader && !isSticky.includes("sticky")) {
      setisSticky("sticky headerBacground top15");
    }
    if (!scrollY) {
      setisSticky("");
    }
  };

  const [isSticky, setisSticky] = useState("");
  return (
    <header
      className={`zind15 width100 br075rem py10 right0 header ${isSticky}`}
    >
      <div className={`flex  ${useMediaQuery() ?'flexEnd' : 'between'} p30 m15`}>
        {!useMediaQuery() ? (
          <span onClick={() => setShowMenu(!showMenu)}>
            <i
              className={showMenu ? "menu-close" : "menu-active"}
              aria-hidden="true"
            ></i>
          </span>
        ) : (
          ""
        )}
        <div className="">
          <span>
            <i className="account" aria-hidden="true"></i>
          </span>
          <span onClick={() => setShowSettingsMenu(!showSettingsMenu)}>
            <i className="settings" aria-hidden="true"></i>
          </span>
          <span>
            <i className="notification" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </header>
  );
}
export default HeaderComponent;
