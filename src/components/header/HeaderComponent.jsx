import { useEffect, useState } from "react";

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

  const [headerClasses, setHeaderClasses] = useState([]);
  const onScroll = (e) => {
    if (showHeader && scrollY > 100 && !headerClasses.includes("fixed")) {
      setIsFixed("fixed"); 
    } else {
      setIsFixed(""); 
    }
  };

  const [isFixed, setIsFixed] = useState("");
  return (
    <header style={{background:'red'}} className={` widthwidthCalc br075rem m15 topAndRight0 ${isFixed}`}>
      <div className="flex flexEnd p30 m15">
        <span>
          <img
            className="size40 m5 "
            src="/src/assets/img/icons/account.svg"
            alt=""
          />
        </span>
        <span>
          <img
          onClick={()=>setShowMenu(!showMenu)}
            className="size40  m5"
            src="/src/assets/img/icons/menu.svg"
            alt=""
          />
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
