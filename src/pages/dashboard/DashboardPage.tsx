import Form, { Item, GroupItem, Label } from "devextreme-react/form";
import LabelNotesTemplate from "../../LabelNotesTemplate";
import { employee, positions } from "../../data";
import SectionComponent from "../../components/ui/section/SectionComponent";
import { useCallback } from 'react';



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
  mask: "+7 (X00) 000-0000",
  maskRules: { X: /[02-9]/ },
};
function DashboardPage() {
  const validateForm =  useCallback((e) => {
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

      <SectionComponent titleText={'title'}>
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
      </SectionComponent>
    </>
  );
}

export default DashboardPage;
