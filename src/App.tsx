import "./App.css";
import SettingsSidebar from "./components/settingsSidebar/SettingsSidebar";
import SidebarComponent from "./components/sidebar/SidebarComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import LoginPage from "./pages/login/LoginPage";
import { useState } from "react";
import "devextreme-react/text-area";
import React from "react";
import "devextreme-react/text-area";

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
      <SidebarComponent showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeaderComponent
        showHeader={showHeader}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        showSettingsMenu={showSettingsMenu}
        setShowSettingsMenu={setShowSettingsMenu}
      />
      <div className="content">
        <section className="section relative">
          <BigBlueTitle>
            title
          </BigBlueTitle>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi
        mollitia praesentium repudiandae illo eveniet ipsum, ducimus minus
        tempore possimus minima doloribus corporis libero odio optio quas
        eligendi quaerat quisquam fugiat. Aliquid mollitia nemo nihil quas sit?
        Soluta fuga cupiditate laboriosam impedit ducimus quo unde nostrum id
        odio, architecto neque error ullam eum iusto provident facilis illum
        inventore autem quae nulla mollitia voluptatum eligendi! Quos voluptatem
        sequi vel iure eveniet, optio esse accusantium, officia pariatur
        obcaecati, doloribus qui ducimus illo magni tempore est sapiente saepe
        repudiandae? Fugiat, vel ad illo tenetur laboriosam, aliquam sed ullam
        totam error vero, rerum quasi officia aut nulla soluta dicta dolores
        alias ut? Illo nulla aperiam est hic iusto facilis aspernatur, incidunt
        quia corporis aliquam porro eveniet consequuntur molestiae neque,
        maiores sed! Neque facilis culpa ratione maiores soluta vel sed officia
        nesciunt recusandae natus mollitia illo nostrum corporis nam alias,
        architecto quibusdam. Quaerat ipsa inventore omnis! Harum reprehenderit
        consequatur illo assumenda veritatis cum ducimus modi ut, fugiat
        suscipit vel unde atque et autem, id omnis in rerum tempore officia,
        ipsa accusamus iusto? Doloremque vero corrupti quidem eos incidunt
        suscipit, praesentium eveniet voluptates illum, nobis eaque veniam
        deleniti recusandae sint delectus laboriosam minima enim repudiandae
        modi! Provident laudantium adipisci voluptatem temporibus tempora odit
        quis quasi praesentium quidem rem, itaque iste neque, unde commodi!
        Amet, suscipit voluptates illum architecto excepturi inventore fugiat
        non corporis doloribus saepe veritatis soluta rerum, incidunt assumenda
        molestias praesentium pariatur similique esse consequuntur
        necessitatibus ipsum velit aperiam eius? Quasi at quaerat ex quae ad
        aspernatur, quisquam dignissimos deserunt unde labore iure aliquam
        assumenda iste reiciendis deleniti neque velit consequuntur ea vero
        accusantium nemo perferendis. Corrupti qui, suscipit temporibus magnam
        commodi deleniti culpa nihil harum at nam inventore quo obcaecati
        eveniet possimus eum. Recusandae molestiae doloremque ullam cupiditate!
        Natus tenetur accusantium soluta culpa fuga sit deserunt exercitationem
        minima. Tenetur, rem! Architecto doloribus voluptatum facere esse
        explicabo ad autem atque quasi libero dolores fugit asperiores
        consectetur rerum, nam, minus sequi. Recusandae voluptate delectus quia
        ipsam soluta, vero optio nihil ut, sit, maxime animi similique.
        Dignissimos non vel in porro dolores eos vitae, id temporibus nesciunt
        doloremque incidunt blanditiis eligendi facilis officia quia saepe rerum
        expedita soluta, dolorem laudantium debitis distinctio? Aperiam,
        inventore eum. Ad, quibusdam reprehenderit pariatur deserunt mollitia
        recusandae et, officia molestias, distinctio aut eius vitae ipsam
        nesciunt. Explicabo quisquam reiciendis laboriosam deserunt distinctio,
        consequuntur nostrum eum minima molestiae iure doloribus facilis porro
        dicta, maiores harum ad, voluptatum magnam vel officia eveniet officiis!
        Saepe corrupti odit consectetur rem alias similique incidunt temporibus
        molestias quo nisi deserunt, soluta iusto exercitationem nulla explicabo
        eos, vero rerum voluptas? Ipsa voluptatibus perferendis commodi, dolore
        sapiente illum qui vero ducimus accusantium. Tempora, quas amet dolores
        cumque in provident nesciunt recusandae, perspiciatis, repudiandae enim
        voluptate sit qui. Ipsum, nisi modi facilis odit impedit minus saepe
        optio perspiciatis, officia debitis eveniet libero at delectus non.
        Eveniet rem minima libero! Tempore quas, recusandae laudantium natus
        officia cum ipsam? Odit labore, eaque nemo voluptas aperiam quisquam
        neque magni a natus autem recusandae, iure doloribus, ab reprehenderit
        reiciendis ex illum doloremque voluptatibus iste quod? Consequatur
        soluta, optio quam veritatis quis praesentium voluptate culpa unde
        temporibus, est sequi? Earum ipsa perferendis illum debitis!
        Exercitationem dignissimos, obcaecati eveniet quas assumenda dolore
        voluptate similique libero suscipit eos delectus pariatur accusantium
        dolor. Voluptates cupiditate consectetur nulla assumenda nesciunt sunt
        magni commodi aspernatur minima omnis id, aut optio quod rerum?
        Reiciendis, in modi qui minima distinctio dicta, quisquam, sit
        laudantium labore earum eum. Eaque animi exercitationem rem voluptate
        velit labore. Rerum enim quia amet delectus voluptatem inventore
        consectetur quas eaque quisquam numquam ipsum ea est, fugit officia
        officiis quam. Minus culpa deleniti exercitationem a laboriosam eius id
        autem eaque asperiores neque? Et repudiandae modi cupiditate inventore
        ipsum nemo quia labore ab vero. Voluptas delectus, ab a aperiam ullam
        explicabo corporis, architecto quidem voluptatem blanditiis quos.
        Quisquam atque reprehenderit voluptate nesciunt, earum ratione inventore
        excepturi delectus cum consectetur quas dicta reiciendis enim. Aut omnis
        recusandae, explicabo laborum id dolorum cum iste voluptatem eos commodi
        similique perferendis tenetur ad incidunt doloribus aspernatur
        cupiditate ipsam, corporis quas blanditiis deleniti libero consequatur
        perspiciatis tempore? Asperiores ea sed, laboriosam odio aspernatur
        voluptatibus excepturi consequuntur delectus ex rerum? Officiis
        accusantium repellat aliquid quam commodi nesciunt maiores repellendus
        exercitationem tempore est tenetur, vero nihil illo sint similique?
        Doloribus iure voluptatum quis aliquam reprehenderit totam? Sapiente
        vero itaque velit hic, facilis nostrum error porro eveniet suscipit
        excepturi ab animi beatae repudiandae facere sint quod accusamus! Sunt
        distinctio porro sint rem laudantium debitis exercitationem qui unde, ab
        architecto mollitia sed consequuntur officiis odit! Necessitatibus
        tempora, modi animi hic dolorum, soluta ex laborum odit laudantium ea,
        dicta id nesciunt officia dolorem inventore. Alias cumque reprehenderit
        quibusdam voluptatibus ipsam modi, amet rerum ad perferendis fuga
        voluptates recusandae blanditiis sunt aspernatur vitae consequuntur
        quaerat consectetur veniam eius incidunt corporis nobis quam!
        Repellendus voluptas sunt quidem natus non itaque maxime cum vel quasi
        exercitationem, expedita fuga, harum ullam cupiditate dolorem veritatis
        vero eos illum totam voluptates. Maiores ratione obcaecati id sit est?
        Recusandae iste necessitatibus dolorum dignissimos quam quos laborum
        similique saepe nam! Quos eum inventore quam maxime, vitae, cum veniam
        nihil autem natus excepturi exercitationem, iusto culpa aliquam dolore
        impedit ad nesciunt cupiditate nemo. Sed culpa sint, ad deserunt
        possimus quae aperiam fugiat recusandae corporis similique asperiores
        cupiditate, temporibus doloribus! Adipisci eum incidunt sequi, quo
        expedita illum numquam reiciendis reprehenderit animi, quaerat corrupti
        ducimus dolorem dignissimos temporibus? Explicabo ex beatae quibusdam
        modi delectus maxime quos necessitatibus exercitationem saepe accusamus
        est veritatis aliquam rerum dolorem consequuntur veniam optio eos
        eveniet pariatur, nihil vel. Distinctio nobis quod neque minus
        temporibus eos sunt beatae itaque incidunt similique reiciendis eligendi
        harum voluptatem vero exercitationem quaerat provident, tempore
        veritatis, facilis quia natus blanditiis, culpa molestiae! Suscipit quas
        laborum ipsum necessitatibus non qui cupiditate sit nobis dolores
        tempora sunt magni eaque, magnam distinctio dolore aliquid odio ab
        temporibus illo. Qui temporibus accusantium aperiam, repellendus modi,
        mollitia saepe debitis animi facilis ipsum dignissimos sit sed! Dolorem
        repellat vero magni molestiae necessitatibus fuga optio consequuntur vel
        perferendis nisi et nam corrupti obcaecati quae, porro a animi rerum
        tenetur quia quibusdam adipisci magnam expedita! Sequi nemo consequuntur
        repellendus porro iure rerum suscipit, eos odit. Vero tempore accusamus
        perferendis iure laborum aut tenetur dolorem enim quibusdam hic
        distinctio ullam corporis minus consequuntur nobis est fugit veniam
        voluptate, veritatis nihil ut. Deleniti, sint est quibusdam repellat
        veniam dolores asperiores nisi dolorem error voluptatum officia enim,
        dolorum iste eveniet, quia fugit laboriosam nulla aspernatur? Temporibus
        maxime, ratione sint consectetur voluptatibus ex, sit vitae maiores
        harum quas eveniet aperiam veritatis perferendis, facere tempora cum
        quos nihil facilis ipsum suscipit. Harum ex obcaecati delectus quos.
        Harum, illum, repellat debitis quia quasi dolores, magnam perferendis
        accusantium quae assumenda nihil. Sunt consectetur omnis numquam harum
        accusantium, voluptate quaerat nihil officia sequi vitae dolore
        blanditiis cupiditate autem soluta error dolores! Maxime, ut, inventore
        animi esse vel laudantium saepe quasi aliquam et ratione nostrum sunt
        dignissimos perspiciatis autem accusamus blanditiis veritatis cumque
        non! Ea, est neque unde similique laudantium voluptatum sint corporis
        culpa dolorum impedit obcaecati assumenda dicta ut ab sunt iusto
        veritatis rerum accusantium necessitatibus ipsa quia, quae sequi magnam?
        Praesentium nam numquam quam, consequatur dicta minus at aut dignissimos
        exercitationem eaque! Ipsam, voluptatibus! Deleniti provident cum,
        dignissimos cupiditate necessitatibus itaque voluptatibus quos odio ex
        fugiat accusamus nesciunt laboriosam nam, quidem eveniet ducimus officia
        quasi ut vitae doloremque quisquam beatae aut maiores. Consequatur iste
        itaque voluptatem repellat laudantium in qui dolorum fugiat, a error
        sunt, consequuntur repudiandae asperiores iure dolore voluptates ut?
        Suscipit sed soluta error doloremque quaerat autem mollitia officia
        dolore laborum, cumque assumenda veritatis tempore, aut facilis
        quibusdam consectetur debitis numquam molestiae. Necessitatibus, porro.
        Optio asperiores quaerat sed, quis aliquam quia harum voluptas nobis
        soluta rerum illo labore nostrum laborum. Labore recusandae, cumque aut
        at in nemo sint et voluptatibus sed porro sequi ex tempore blanditiis,
        omnis architecto eveniet reiciendis accusantium corporis accusamus
        necessitatibus unde optio. Accusamus velit rem suscipit cupiditate
        aliquid placeat hic ad consequuntur reiciendis iste. Nulla quidem vitae
        ullam doloremque omnis consequatur, odit dignissimos quos, ab
        repellendus expedita impedit ipsam perspiciatis eligendi voluptatibus.
        Est totam officiis dolore quisquam odio. Minima molestias quo quod
        quibusdam officia quasi! Aut laudantium reiciendis sapiente! Cum soluta
        consequuntur, tenetur magnam numquam dicta aliquid fugiat eius ipsa
        illum saepe voluptatem, assumenda est asperiores. Corporis nam
        perferendis atque provident officiis commodi possimus, dolore blanditiis
        similique qui debitis omnis eligendi, minima ad minus. Mollitia
        repudiandae velit nemo ex, omnis sapiente fugit, veritatis harum, veniam
        dignissimos laborum ab saepe esse? Placeat perferendis obcaecati autem
        vitae, quisquam rem laudantium harum, temporibus nam est vero
        perspiciatis nihil? Deleniti, neque vel eligendi numquam asperiores
        beatae, saepe officia incidunt nostrum distinctio, possimus voluptas
        amet. Nemo libero possimus provident consectetur veniam exercitationem
        vitae cum dolorem rem voluptatum ipsum quasi architecto enim, laboriosam
        laborum doloribus repellendus! Distinctio, maxime perferendis harum
        veritatis quae porro aspernatur esse consectetur repellendus
        perspiciatis quia exercitationem delectus placeat consequuntur cumque
        magnam omnis odio pariatur unde recusandae non suscipit. Minima unde
        excepturi labore provident. Ex unde, odit facilis qui ullam voluptatem!
        Velit dolor quae incidunt non laudantium culpa quis totam odit
        consequuntur placeat. Totam exercitationem, deserunt optio est facere
        commodi impedit nam, enim maiores eaque sit excepturi necessitatibus ex
        rerum voluptate aspernatur ad rem! Voluptate explicabo nesciunt tempore
        ex deleniti rem neque assumenda vel sapiente corporis repellendus
        impedit et ipsum pariatur iusto recusandae est reprehenderit rerum,
        expedita numquam quam earum dolorum, quis eum! Nostrum id, similique
        ipsa ullam doloremque quas voluptatibus animi sequi inventore voluptatem
        maiores corrupti sit nulla. Consequuntur necessitatibus natus quia enim
        possimus maiores tempora maxime modi quo culpa quibusdam quod suscipit
        quaerat quis ex aliquid voluptas esse cumque officiis praesentium
        exercitationem, a blanditiis dolorem quas? Architecto eveniet provident
        veritatis rem quidem aut similique modi accusantium aliquid
        necessitatibus odit laboriosam, laudantium delectus consectetur corrupti
        amet doloremque ab praesentium. Cupiditate necessitatibus hic quam
        tenetur alias atque aperiam et totam nulla, odio delectus reprehenderit
        fugit qui ut quo excepturi! Culpa voluptates quo distinctio quis error
        ipsum harum amet, dolore soluta praesentium vitae quod impedit mollitia,
        at cum veniam vero. Velit laudantium culpa possimus nobis, quae eligendi
        fugiat nemo error aperiam dolorem facilis sequi, assumenda magni eveniet
        recusandae ab voluptas quasi sed dolor doloremque. Provident libero
        cumque deserunt officiis nihil facere minima animi pariatur facilis
        ratione molestias optio error exercitationem laborum, voluptatum ipsum,
        hic molestiae iusto, iure doloribus adipisci? Deserunt tenetur est fugit
        quos magni, cumque voluptatum? Nesciunt quam obcaecati quos repellendus
        cum tempora sit, deserunt saepe. Ad, minus! Minus aliquam, numquam
        voluptatum eos quasi omnis veritatis? Dignissimos error non esse harum
        sapiente ut ipsam expedita aspernatur cumque qui, vel omnis animi
        suscipit amet perferendis ipsa eius unde culpa nihil! Temporibus eum
        officiis ad pariatur maxime, animi fuga dignissimos placeat vero vitae
        illo ipsa eveniet nostrum, perspiciatis accusamus sint quisquam.
        Laboriosam nemo odio distinctio, dignissimos hic blanditiis rem.
        Nesciunt, harum sunt adipisci aperiam suscipit dolorum omnis
        consequuntur libero eligendi! Rem praesentium eaque dolorum vel
        provident libero consequuntur, accusantium perferendis corporis maiores
        veritatis! Odit, amet accusamus est veniam in eius aliquid magnam sit
        molestiae numquam illo harum sapiente nemo dolor rem quam, libero
        temporibus adipisci placeat natus illum consequuntur vitae dolorem
        voluptatum? Quae, nisi. Quam, assumenda inventore vero qui ducimus
        dolores, necessitatibus perspiciatis nesciunt reiciendis labore
        temporibus unde dolorum ab soluta asperiores eos sint incidunt quas esse
        enim deserunt cumque praesentium. Voluptatibus minima molestiae dolore
        voluptas odit maxime ratione non culpa iure architecto corporis soluta,
        aliquid id laudantium esse nobis consequatur! Molestias nesciunt illo
        odio in unde quos, corrupti est assumenda labore tenetur amet vel rem
        architecto modi facilis nobis iusto deleniti. Corrupti aut sit maxime?
        Dolore, tenetur maiores, nemo beatae doloribus distinctio ipsum modi
        similique reprehenderit delectus dolorum. Ipsa illum sint officiis,
        dolor temporibus facere accusantium, atque corrupti ex, hic laborum
        doloribus consectetur eaque minus? Nihil inventore vitae quis itaque,
        aliquid commodi atque dolor iste ipsa optio corrupti voluptatibus
        asperiores nulla reprehenderit ut labore. Iusto recusandae, pariatur
        culpa ratione rerum voluptas asperiores explicabo laborum esse ad
        deserunt alias ipsum qui inventore natus molestias beatae. Ea ab dolorem
        quis exercitationem corporis assumenda facere illo eligendi odit optio!
      </div>
    </>
  );
}

export default App;
