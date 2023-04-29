import styles from "./Checkbox.module.css";
function Checkbox({children}) {
  return (
    <div className="flex alignCenter relative ">
      <input type="checkbox" name={'for'} id={'for'} className={styles.checkbox} />  
      <label htmlFor={'for'}>{children}</label>
    </div>
  );
}
export { Checkbox };
