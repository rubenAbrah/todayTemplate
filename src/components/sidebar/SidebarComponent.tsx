 
import useMediaQuery from "../../hooks/useMediaQuery";
import MenuList from "./MenuList";
function SidebarComponent({ showMenu, setShowMenu }) { 

  if (!useMediaQuery()) {
    setShowMenu(true);
  }

  return (
    <div className={`zind20 ${useMediaQuery() ? "0" : "ml280px"}   `}>
      <div
        className={`m15 br0375rem sidebarTextColor relative fixed width250 scrollbar sidebarBackground sidebarText sidebarHeight overflowXhidden  left0 p20 ${
          useMediaQuery() ? "left0" : ""
        } ${showMenu ? "" : "lMinus280px"}`}
      >
        {useMediaQuery() ? (
          <div className="clossButton topAndRight0 right0 positionAbsolute">
            <span
              onClick={() => setShowMenu(false)}
              className="size32 alignCenter justifyCenter width50height50 flex"
            >
              &times;
            </span>
          </div>
        ) : (
          ""
        )}

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
        <MenuList/>
      </div>
    </div>
  );
}

export default SidebarComponent;
