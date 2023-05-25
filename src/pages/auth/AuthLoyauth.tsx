  
import { Outlet } from "react-router-dom";

import styles from "./AuthLayout.module.css";
import "devextreme-react/text-area"; 
function AuthLayout() { 
  return ( 
    <div className={`${styles.wrapper} colorGrey justifyCenter br075rem flex column alignCenter `}>
           <div className={`${styles.loginformWrapper}`}>
               <Outlet /> 
            </div>
    </div>
  );
}

export default AuthLayout;
