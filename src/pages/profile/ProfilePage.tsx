import { RadioButton } from "../../components/ui/radioButton/RadioButton";
import SectionComponent from "./../../components/ui/sections/SectionComponent";
import styles from "./ProfilePage.module.css";
import { useEffect, useState } from "react";
import './ProfilePage.css'
const tabs = [
  {
    id: 0,
    title: "Colorables",
    name: "tabs",
    className: 'radio-1',
    content:
      "Nelsons folly lugger marooned hearties chantey lateen sail Yellow Jack gangplank starboard warp. Chantey Buccaneer log warp snow booty sloop square-rigged mutiny pressgang. Yard bring a spring upon her cable Sail ho clipper bounty careen galleon bilge rat reef handsomely.",
  },
  {
    id: 1,
    title: "Logos",
    name: "tabs",
    className: 'radio-2',
    content:
      "Barbary Coast hogshead port Sea Legs cackle fruit dead men tell no tales crimp poop deck transom flogging. Bilge water man-of-war lanyard sloop starboard hardtack no prey, no pay avast tender crack Jennys tea cup. Hogshead cog aft Corsair spanker pinnace bilge water swing the lead Jack Tar Plate Fleet.",
  },
  {
    id: 2,
    title: "Blocks",
    name: "tabs",
    className: 'radio-3',
    content:
      "Gangway boom coffer rigging tackle gabion Shiver me timbers aye draft barque. Scourge of the seven seas pressgang Blimey galleon six pounders yawl grapple jolly boat lugger Jack Ketch. Splice the main brace boatswain snow Chain Shot salmagundi keel crow's nest Shiver me timbers jib ye.",
  },
];
function Tabs({ setActiveTab }) {

  return ( 
    <div className="flex my20 alignCenter justifyCenter" onChange={(e) => setActiveTab(tabs[e.target.id])}>
      <div className={`relative flexMedia500 p10 br075rem ${styles.tabs}`}>
        {tabs.map((tab, i) => ( 
            <RadioButton
              key={tab.id}
              labelClassName={`${styles.tab} ${styles.radioLabel}`}
              className={`${styles.radioInput} br075rem ${tab['className']}`}
              id={tab.id}
              name={tab.name}
              defaultChecked={i == 0 ? "checked" : false}
            >
              {tab.title}
            </RadioButton> 
        ))}
        <span className={`glider br075rem`}></span>
      </div>
    </div > 
  );
}

const ProfilePage = () => {

  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <>
      <div className="felx w90mxauto">
        <SectionComponent
          sectionClassName={""}
          sectionTitle={" "}
          titleStylesClassname={
            "w110ml-5 profileBackground height150 relative mtminus60 zind-5"
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
        </SectionComponent>
      </div>
    </>
  );
};
export default ProfilePage;
