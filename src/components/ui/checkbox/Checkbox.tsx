import styles from "./Checkbox.module.css";
function Checkbox({ children }) {
  return (
    <div className="flex alignCenter relative ">
      <input
        type="checkbox"
        name={"for"}
        id={"for"}
        className={styles.checkbox}
      />
      <label htmlFor={"for"}>{children}</label>
    </div>
  );
}


function CastomCheckbos({ children , ...props }) {
  return (
    <div className="flex alignCenter relative ">
      <input type="checkbox" {...props} className={` ${styles.custom_checkbox_slider}`} />
      <label className="ml15px" htmlFor={props.id}>{children}</label>
    </div>
  );
}

export { Checkbox, CastomCheckbos };
