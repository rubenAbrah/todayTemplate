import "./App.css";
import SettingsSidebar from "./components/settingsSidebar/SettingsSidebar";
import SidebarComponent from "./components/sidebar/SidebarComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import LoginPage from "./pages/login/LoginPage";
import { useState } from "react";
import "devextreme-react/text-area";
import React from "react";

import Form, { Item, GroupItem, Label } from "devextreme-react/form";
import LabelNotesTemplate from "./LabelNotesTemplate";
import { employee, positions } from "./data.js";
import { BigBlueTitle } from "./components/ui/title/BigBlueTitle.js";

const validationRules = {
  position: [{ type: "required", message: "Position is required." }],
  hireDate: [{ type: "required", message: "Hire Date is required." }],
};

const nameEditorOptions = { disabled: true };
const positionEditorOptions = {
  items: positions,
  searchEnabled: true,
  value: "",
};
const hireDateEditorOptions = { width: "100%", value: null };
const birthDateEditorOptions = { width: "100%", disabled: true };
const notesEditorOptions = { height: 90, maxLength: 200 };
const phoneEditorOptions = {
  mask: "+1 (X00) 000-0000",
  maskRules: { X: /[02-9]/ },
};

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const validateForm = React.useCallback((e) => {
    e.component.validate();
  }, []);
  function LabelTemplate(iconName) {
    return function template(data) {
      return (
        <div>
          <i className={`dx-icon dx-icon-${iconName}`}></i>
          {data.text}
        </div>
      );
    };
  }
  return (
    <>
      <SettingsSidebar
        showSettingsMenu={showSettingsMenu}
        setShowSettingsMenu={setShowSettingsMenu}
        setShowHeader={setShowHeader}
      />
      <div className="flex">
        <SidebarComponent showMenu={showMenu} setShowMenu={setShowMenu} />
        <div className="content p20">
          <HeaderComponent
            showHeader={showHeader}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            showSettingsMenu={showSettingsMenu}
            setShowSettingsMenu={setShowSettingsMenu}
          />
          <section className="section relative p30  pt50mt70">
            <BigBlueTitle classnames={"titlecenter p15"}>title</BigBlueTitle>
            <div className="dx-viewport">
              <Form onContentReady={validateForm} formData={employee}>
                <GroupItem colCount={2} caption="Employee Details">
                  <Item dataField="FirstName" editorOptions={nameEditorOptions}>
                    <Label render={LabelTemplate("user")} />
                  </Item>
                  <Item
                    dataField="Position"
                    editorType="dxSelectBox"
                    editorOptions={positionEditorOptions}
                    validationRules={validationRules.position}
                  >
                    <Label render={LabelTemplate("info")} />
                  </Item>
                  <Item dataField="LastName" editorOptions={nameEditorOptions}>
                    <Label render={LabelTemplate("user")} />
                  </Item>
                  <Item
                    dataField="HireDate"
                    editorType="dxDateBox"
                    editorOptions={hireDateEditorOptions}
                    validationRules={validationRules.hireDate}
                  >
                    <Label render={LabelTemplate("event")} />
                  </Item>
                  <Item
                    dataField="BirthDate"
                    editorType="dxDateBox"
                    editorOptions={birthDateEditorOptions}
                  >
                    <Label render={LabelTemplate("event")} />
                  </Item>
                  <Item dataField="Address">
                    <Label render={LabelTemplate("home")} />
                  </Item>
                  <Item
                    dataField="Notes"
                    colSpan={2}
                    editorType="dxTextArea"
                    editorOptions={notesEditorOptions}
                  >
                    <Label render={LabelNotesTemplate} />
                  </Item>
                  <Item dataField="Phone" editorOptions={phoneEditorOptions}>
                    <Label render={LabelTemplate("tel")} />
                  </Item>
                  <Item dataField="Email">
                    <Label render={LabelTemplate("email")} />
                  </Item>
                </GroupItem>
              </Form>
            </div>
          </section>
          <section className="section p30 pt50mt70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            animi mollitia praesentium repudiandae illo eveniet ipsum, ducimus
            minus tempore possimus minima doloribus corporis libero odio optio
            quas eligendi quaerat quisquam fugiat. Aliquid mollitia nemo nihil
            quas sit? Soluta fuga cupiditate laboriosam impedit ducimus quo unde
            nostrum id odio, architecto neque error ullam eum iusto provident
            facilis illum inventore autem quae nulla mollitia voluptatum
            eligendi! Quos voluptatem sequi vel iure eveniet, optio esse
            accusantium, officia pariatur obcaecati, doloribus qui ducimus illo
            magni tempore est sapiente saepe repudiandae? Fugiat, vel ad illo
            tenetur laboriosam, aliquam sed ullam totam error vero, rerum quasi
            officia aut nulla soluta dicta dolores alias ut? Illo nulla aperiam
            est hic iusto facilis aspernatur, incidunt quia corporis aliquam
            porro eveniet consequuntur molestiae neque, maiores sed! Neque
            facilis culpa ratione maiores soluta vel sed officia nesciunt
            recusandae natus mollitia illo nostrum corporis nam alias,
            architecto quibusdam. Quaerat ipsa inventore omnis! Harum
            reprehenderit consequatur illo assumenda veritatis cum ducimus modi
            ut, fugiat suscipit vel unde atque et autem, id omnis in rerum
            tempore officia, ipsa accusamus iusto? Doloremque vero corrupti
            quidem eos incidunt suscipit, praesentium eveniet voluptates illum,
            nobis eaque veniam deleniti recusandae sint delectus laboriosam
            minima enim repudiandae modi! Provident laudantium adipisci
            voluptatem temporibus tempora odit quis quasi praesentium quidem
            rem, itaque iste neque, unde commodi! Amet, suscipit voluptates
            illum architecto excepturi inventore fugiat non corporis doloribus
            saepe veritatis soluta rerum, incidunt assumenda molestias
            praesentium pariatur similique esse consequuntur
            </section>
        </div>
      </div>
    </>
  );
}

export default App;
