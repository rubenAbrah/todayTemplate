import { useChangeSidebarBackgroundColor } from "../../hooks/useChangeTeamColor";

function SidebarBackgroundColor() {
let arr = ["темный","белый"];
const inner = [];
for (let i = 0; i < arr.length; i++) {
  inner.push(
    <li key={i} className="my10 whiteText">
      <span
        data-color={`type${i + 1}`}
        onClick={useChangeSidebarBackgroundColor}
        className="m5first br0375rem borderGrey p15 bgDark borderGrey"
      >
        {arr[i]}
      </span>
    </li>
  );
} 
  return (
    <>
      <h6>Тип меню</h6>
      <ul className="flex">{inner}</ul>
    </>
  );
}
export default SidebarBackgroundColor;
