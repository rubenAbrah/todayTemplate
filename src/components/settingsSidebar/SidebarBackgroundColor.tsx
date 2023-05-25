 import { BlackButton } from "../ui/button/UiButton";

function SidebarBackgroundColor({ BackgroundTypesMenu, BackgroundTypesTitle,functionChangeColor }) {
  const listItems = BackgroundTypesMenu.map((type, i) => (
    <BlackButton
    key={i}
      data-color={`type${i + 1}`}
      onClick={functionChangeColor}
    >
      {type}
    </BlackButton>
  ));
  return (
    <>
      <h6>{BackgroundTypesTitle}</h6>
      <ul className="flex">{listItems}</ul>
    </>
  );
}

export default SidebarBackgroundColor;
