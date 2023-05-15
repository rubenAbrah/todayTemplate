import { useState } from "react";

const [showMenu, setShowMenu] = useState(false);
const [showSettingsMenu, setShowSettingsMenu] = useState(false);
const [showHeader, setShowHeader] = useState(false);



export {
  showSettingsMenu,
  setShowSettingsMenu,
  setShowHeader,
  showHeader,
  showMenu,
  setShowMenu,
};
