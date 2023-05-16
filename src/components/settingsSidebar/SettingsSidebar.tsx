import { useEffect } from "react";
import {
  useChangeSidebarBackgroundColor,
  useChangeTeam,
} from "../../hooks/useChangeTeamColor";
import SidebarTitleColor from "./SidebarTitleColor";
import SidebarBackgroundColor from "./SidebarBackgroundColor";
function SettingsSidebar({
  showSettingsMenu,
  setShowSettingsMenu,
  setShowHeader,
}) {
  return (
    <div
      className={`fixed overflowXhidden sidebarTextColor br075rem zind25 width340 right0 sidebarBackground sidebarHeight m15 p15 scrollbar sidebarText ${
        showSettingsMenu ? "" : "mrMinus350px"
      }`}
    >
      <div className="positionAbsolute clossButton">
        <span
          onClick={() => setShowSettingsMenu(false)}
          className="alignCenter justifyCenter flex"
        >
          <i className="close" aria-hidden="true"></i>
        </span>
      </div>
      <div className="">
        <h5>Настройки внешнего вида</h5>
        <p className="colorGrey">Настроивайте внешный вид по своему вкусу</p>
        <hr className="lightHr my10" />
      </div>
      <div className="">
        <SidebarTitleColor title="Цвет фона текста" />
      </div>
      <hr className="lightHr my10" />
      <div className="flex column">
        <SidebarBackgroundColor
          BackgroundTypesMenu={["светлый", "темный"]}
          BackgroundTypesTitle="тип меню"
          functionChangeColor={useChangeSidebarBackgroundColor}
        />
        <hr className="lightHr my10" />


        <div className="flex between">
          <label htmlFor="setShowHeader">
            <h6>прикрепить шапку сверху</h6>
          </label>
          <input 
            type="checkbox"
            onChange={(e) => {
              setShowHeader(e.target.checked);
            }}
            className="scale1_5 checkbox"
          />
        </div>
        <hr className="lightHr my10" />
        <SidebarBackgroundColor
          BackgroundTypesMenu={["светлый", "темный"]}
          BackgroundTypesTitle="тема"
          functionChangeColor={useChangeTeam}
        />
        <hr className="lightHr my10" />
      </div>
    </div>
  );
}
export default SettingsSidebar;
