import { useEffect, useState } from "react";
import useMediaQuery from '../../hooks/useMediaQuery' 
function HeaderComponent({setShowMenu,showMenu,ShowSettingsMenu,setShowSettingsMenu,showHeader}) {
  
  useEffect(() => {  
    function watchScroll() {
      window.addEventListener("scroll", onScroll);
    }
    watchScroll();
    return () => { 
      window.removeEventListener("scroll", onScroll);
    };
  });
 
  const onScroll = (e) => {
    if (showHeader &&  !isSticky.includes('sticky') ) {
      setisSticky("sticky headerBacground top15"); 
    }  if (!scrollY) {
      setisSticky(""); 
    } console.log(isSticky)
  };

  const [isSticky, setisSticky] = useState("");
  return (
    <header className={`zind15 width100 br075rem my10 right0 ${isSticky}`}>
      <div className="flex flexEnd p30 m15">
        <span>
          <img
            className="size40 m5 "
            src="/src/assets/img/icons/account.svg"
            alt=""
          />
        </span>
        <span>
        { useMediaQuery()?  <img
          onClick={()=>setShowMenu(!showMenu)}
            className="size40  m5"
            src="/src/assets/img/icons/menu.svg"
            alt=""
          /> : ''}
        </span>
        <span>
          <img
            className="size40  m5"
            onClick={()=>setShowSettingsMenu(!ShowSettingsMenu)}
            src="/src/assets/img/icons/settings.svg"
            alt=""
          />
        </span>
        <span>
          <img
            className="size40  m5"
            src="/src/assets/img/icons/notification.svg"
            alt=""
          />
        </span>
      </div>
    </header>
  );
}
export default HeaderComponent;
