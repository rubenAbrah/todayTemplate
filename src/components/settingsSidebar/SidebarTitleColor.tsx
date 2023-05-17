import { useChangeTitleColor } from "/@/hooks/useChangeTeamColor";

 
const numbers = [1, 2, 3, 4, 5, 6];
const listItems = numbers.map((i) => (
  <li key={i}>
    <span
      className={`flex m5first br50 p10 color${i}`}
      onClick={useChangeTitleColor}
    ></span>
  </li>
));

function SidebarTitleColor({ title }) {
  return (
    <>
      <h6>{title}</h6>
      <ul className="flex">{listItems}</ul>
    </>
  );
}
export default SidebarTitleColor;
