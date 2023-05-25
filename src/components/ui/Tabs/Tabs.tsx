import { RadioButton } from "../radioButton/RadioButton";
import tabsData from "/@/data/tabsData";

import "./Tabs.css";

import styles from "./Tabs.module.css";

function Tabs({ setActiveTab }) {
  return (
    <div
      className="flex my20 alignCenter justifyCenter"
      onChange={(e) => {setActiveTab(tabsData[e.target.id])
      }}
    >
      <div className={`relative flexMedia500 p10 br075rem ${styles.tabs}`}>
        {tabsData.map((tab, i) => (
          <RadioButton
            key={tab.id}
            labelClassName={`${styles.tab} ${styles.radioLabel}`}
            className={`${styles.radioInput} br075rem ${tab["className"]}`}
            id={tab.id}
            name={tab.name}
            defaultChecked={i == 0 ? "checked" : false}
          >
            {tab.title}
          </RadioButton>
        ))}
        <span className={`glider br075rem`}></span>
      </div>
    </div>
  );
}
export default Tabs;
