import { useEffect } from "react";
import { useChangeTeam } from "../../hooks/useChangeTeamColor";
import SidebarTitleColor from "./SidebarTitleColor";
import SidebarBackgroundColor from "./SidebarBackgroundColor";
function SettingsSidebar({
  showSettingsMenu,
  setShowSettingsMenu,
  setShowHeader
}) {
 
 
 

  return (
    <div
      className={`fixed overflowXhidden sidebarTextColor br075rem zind25 width340 right0 sidebarBackground sidebarHeight m15 p15 scrollbar sidebarText ${
        showSettingsMenu ? "" : "mrMinus350px"
      }`}
    >
      <div className="positionAbsolute clossButton topAndRight0">
        <span
          onClick={() => setShowSettingsMenu(false)}
          className="size32 alignCenter justifyCenter width50height50 flex"
        >
          &times;
        </span>
      </div>
      <div className="">
        <h5>Настройки внешнего вида</h5>
        <p className="colorGrey">Настроивайте внешный вид по своему вкусу</p>
        <hr className="lightHr my10" />
      </div>
      <div className="">
        <h6>Цвет фона текста</h6>
        <SidebarTitleColor/>
      </div>
      <hr className="lightHr my10" />
      <div className="flex column"> 
        <SidebarBackgroundColor/>
        <hr className="lightHr my10" />

        <div className="flex between">
          <h6>прикрепить шапку сверху</h6>
          <input
            type="checkbox"
            onChange={(e) => setShowHeader(e.target.checked)}
            className="scale1_5 checkbox"
          />
        </div>
        <hr className="lightHr my10" />
        <div className="flex between">
          <div className="">
            <h6>тема</h6>
            <span>светлый/темный</span>
          </div>
          <input
            type="checkbox"
            onChange={useChangeTeam}
            className="scale1_5 checkbox"
          />
        </div>
        <hr className="lightHr my10" />
      </div>
    </div>
  );
}
export default SettingsSidebar;
