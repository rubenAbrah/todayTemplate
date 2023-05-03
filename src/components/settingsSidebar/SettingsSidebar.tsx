import { useEffect } from "react";

function SettingsSidebar({showSettingsMenu,setShowSettingsMenu,setShowHeader}) {
  function changeTitleBackgroundColor(e) {
    document.documentElement.style.setProperty(
      "--title-background-global",
      getComputedStyle(e.target, null).getPropertyValue("background-image")
    );
  }
  function changeTeam(e) {
    if (e.target.checked) {
      document.documentElement.style.setProperty(
        "--theme-body-global",
        getComputedStyle(document.body).getPropertyValue("--theme-body-type1")
      );
      document.documentElement.style.setProperty(
        "--text-color-global",
        getComputedStyle(document.body).getPropertyValue("--text-color-type1")
      );
      document.documentElement.style.setProperty(
        "--section-background-color",
        getComputedStyle(document.body).getPropertyValue("--section-background-type1")
      );
    } else {
      document.documentElement.style.setProperty(
        "--theme-body-global",
        getComputedStyle(document.body).getPropertyValue("--theme-body-type2")
      );
      document.documentElement.style.setProperty(
        "--text-color-global",
        getComputedStyle(document.body).getPropertyValue("--text-color-type2")
      );
      document.documentElement.style.setProperty(
        "--section-background-color",
        getComputedStyle(document.body).getPropertyValue("--section-background-type2")
      );
    }
  }
  function changeSidebarBackgroundColor(e) {
    document.documentElement.style.setProperty(
      "--sidebar-background-color-global",
      getComputedStyle(document.body).getPropertyValue(
        `--sidebar-background-color-${e.target.getAttribute("data-color")}`
      )
    );
  }

  return (
    <div className={`fixed overflowXhidden sidebarTextColor br075rem zind20 width340 right0 sidebarBackground sidebarHeight m15 p15 scrollbar sidebarText ${showSettingsMenu ?'':'mrMinus350px'}`}>
      <div className="positionAbsolute clossButton topAndRight0">
        <span onClick={()=>setShowSettingsMenu(false)} className="size32 alignCenter justifyCenter width50height50 flex">&times;</span>
      </div>
      <div className="">
        <h5>Настройки внешнего вида</h5>
        <p className="colorGrey">Настроивайте внешный вид по своему вкусу</p>
        <hr className="lightHr my10" />
      </div>
      <div className="">
        <h6>Цвет фона текста</h6>
        <ul className="flex">
          <li>
            <span
              className="flex m5first br50 p10 color1"
              onClick={changeTitleBackgroundColor}
            ></span>
          </li>
          <li>
            <span
              className="flex m5 br50 p10 color2"
              onClick={changeTitleBackgroundColor}
            ></span>
          </li>
          <li>
            <span
              className="flex m5 br50 p10 color3"
              onClick={changeTitleBackgroundColor}
            ></span>
          </li>
          <li>
            <span
              className="flex m5 br50 p10 color4"
              onClick={changeTitleBackgroundColor}
            ></span>
          </li>
          <li>
            <span
              className="flex m5 br50 p10 color5"
              onClick={changeTitleBackgroundColor}
            ></span>
          </li>
          <li>
            <span
              className="flex m5 br50 p10 color6"
              onClick={changeTitleBackgroundColor}
            ></span>
          </li>
        </ul>
      </div>
      <hr className="lightHr my10" />
      <div className="flex column">
        <h6>Тип меню</h6>
        <ul className="flex sidebarText">
          <li className="my10">
            <span
              data-color="type1"
              onClick={changeSidebarBackgroundColor}
              className="m5first br0375rem borderGrey p15 bgDark borderGrey"
            >
              темный
            </span>
          </li>
          <li className="my10">
            <span
              data-color="type2"
              onClick={changeSidebarBackgroundColor}
              className="m5 br0375rem borderGrey p15 bgDark borderGrey"
            >
              прозрачный
            </span>
          </li>
          <li className="my10">
            <span
              data-color="type3"
              onClick={changeSidebarBackgroundColor}
              className="m5 br0375rem borderGrey p15 bgDark borderGrey"
            >
              белый
            </span>
          </li>
        </ul>
        <hr className="lightHr my10" />

        <div className="flex between">
          <h6>прикрепить шапку сверху</h6>
          <input type="checkbox" onChange={(e)=>setShowHeader(e.target.checked)} className="scale1_5 checkbox" />
        </div>
        <hr className="lightHr my10" />
        <div className="flex between">
          <div className="">
            <h6>тема</h6>
            <span>светлый/темный</span>
          </div>
          <input
            type="checkbox"
            onChange={changeTeam}
            className="scale1_5 checkbox"
          />
        </div>
        <hr className="lightHr my10" />
      </div>
    </div>
  );
}
export default SettingsSidebar;
