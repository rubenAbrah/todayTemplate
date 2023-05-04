import { useChangeTitleColor } from "../../hooks/useChangeTeamColor";

const inner= []
for (let i = 1; i <= 6; i++) {
    inner.push(<li key={i}>
        <span
          className={`flex m5first br50 p10 color${i}`}
          onClick={useChangeTitleColor}></span>
      </li>);
} 
function SidebarTitleColor() {
  return (
    <ul className="flex">
       {inner}
    </ul>
  );
}
export default SidebarTitleColor; 