import { RadioButton } from "../../components/ui/radioButton/RadioButton";
import SectionComponent from "./../../components/ui/sections/SectionComponent";
import styles from "./ProfilePage.module.css";
import { useEffect, useRef, useState } from "react";

const tabs = [
  {
    id: 0,
    title: "Colorables",
    name: "tabs",
    content:
      "Nelsons folly lugger marooned hearties chantey lateen sail Yellow Jack gangplank starboard warp. Chantey Buccaneer log warp snow booty sloop square-rigged mutiny pressgang. Yard bring a spring upon her cable Sail ho clipper bounty careen galleon bilge rat reef handsomely.",
  },
  {
    id: 1,
    title: "Logos",
    name: "tabs",
    content:
      "Barbary Coast hogshead port Sea Legs cackle fruit dead men tell no tales crimp poop deck transom flogging. Bilge water man-of-war lanyard sloop starboard hardtack no prey, no pay avast tender crack Jennys tea cup. Hogshead cog aft Corsair spanker pinnace bilge water swing the lead Jack Tar Plate Fleet.",
  },
  {
    id: 2,
    title: "Blocks",
    name: "tabs",
    content:
      "Gangway boom coffer rigging tackle gabion Shiver me timbers aye draft barque. Scourge of the seven seas pressgang Blimey galleon six pounders yawl grapple jolly boat lugger Jack Ketch. Splice the main brace boatswain snow Chain Shot salmagundi keel crow's nest Shiver me timbers jib ye.",
  },
];
function Tabs({ setActiveTab }) {
 
  return (
    <div
      className={`br075rem p3 flexMedia450  r-all my20 ${styles.radio_container}`}
      onChange={(e) => setActiveTab(tabs[e.target.id])}
    >
      {tabs.map((el, i) => (
        <RadioButton
          key={el.id}
          labelClassName={`br0375rem ${styles.radioLabel}`}
          className={`r-input ${styles.radioInput}`}
          id={el.id}
          name={el.name}
          defaultChecked={i == 0 ? "checked" : false}
        >
          {el.title}
        </RadioButton>
      ))}
    </div>
  );
}

const ProfilePage = () => {
  useEffect(() => {
    setTimeout(() => {
      let all = document.querySelector(".r-all");  
        let radios = all.querySelectorAll(".r-input"); 
        document.documentElement.style.setProperty("--options", radios.length);
      radios.forEach((input) => {
        input.setAttribute("data-pos", '1');
        input.addEventListener("click", (e) => {
          document.documentElement.style.setProperty(
            "--options-active",
            e.target.getAttribute("data-pos")
          );
        }); 
      }); 
  }, 2000);
  }, []);
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
