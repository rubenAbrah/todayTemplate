import { RadioButton } from "../../components/ui/radioButton/RadioButton";
import SectionComponent from "./../../components/ui/sections/SectionComponent";
import { useEffect, useState } from "react";
import { CastomCheckbos } from "../../components/ui/checkbox/Checkbox";
import tabsData from "../../data/tabsData";
import Tabs from "/@/components/ui/Tabs/Tabs";
import App from "/@/components/pivotGrid/PivotGrid"; 
import GanttComponent from "/@/components/gant/GanttComponent";
import PivotGridComponent from '../../components/pivotGrid/PivotGrid'
const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0]);
 
  return (
    <>
      <div className="felx w90mxauto">
        <SectionComponent
          sectionClassName={"mt85m5"}
          sectionTitle={"   "}
          titleStylesClassname={
            "w110ml-5 profileBackground height150 relative mtminus100 zind-5"
          }
        >
          <div className="flex between translateY30px">
            <div className="flex alignCenter">
              <img
                src="/src/assets/img/backgrounds/avatar.png"
                alt=""
                className="br50 w80h80 "
              />
              <div className="flex column px15">
                <span>Richard Davis</span>
                <span>CEO / Co-Founder</span>
              </div>
            </div>
            <Tabs setActiveTab={setActiveTab} />
          </div>

          
          <div className="">{activeTab.content}</div>
          {/* <CastomCheckbos id='id'>
          321
        </CastomCheckbos>  */}
        </SectionComponent>

        <SectionComponent>
          {/* <App />*/}
          <GanttComponent/> 
        </SectionComponent>
        <PivotGridComponent/>
      </div>
    </>
  );
};
export default ProfilePage;
