function UiButton({ children, styles = "", ...props }) {
  return (
    <button
      {...props}
      className={`active colorWhite p15 my20 br075rem ${styles}`}
    >
      {children}
    </button>
  );
}
function BlackButton({children,...props}) {
  return (
    <li className="my10 whiteText">
      <span {...props} className="m5first br0375rem borderGrey p15 bgDark borderGrey">
        {children}
      </span>
    </li>
  );
}
export { UiButton,BlackButton };
