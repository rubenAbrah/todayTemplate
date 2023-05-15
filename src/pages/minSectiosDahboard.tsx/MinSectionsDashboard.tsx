import ChartComponent from "../../components/chart/ChartComponent";
import SectionComponent from "./../../components/ui/sections/SectionComponent";
function MinSectionsDashboard() {
  return (
    <>
      <div className="flex">
        <div className="col-3 col-md-6  col-sm-12 ">
          <SectionComponent
            sectionClassName={""}
            sectionTitle={<i className="chart" aria-hidden="true"></i>}
            titleStylesClassname={"minWidth color1 boxShedow_dark"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            rem?
          </SectionComponent>
        </div>
        <div className="col-3 col-md-6  col-sm-12 ">
          <SectionComponent
            sectionClassName={""}
            sectionTitle={<i className="calendar" aria-hidden="true"></i>}
            titleStylesClassname={"minWidth color2 boxShedow_dark"}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
            tempore!
          </SectionComponent>
        </div>
        <div className="col-3 col-md-6  col-sm-12 ">
          <SectionComponent
            sectionClassName={<i className="building" aria-hidden="true"></i>}
            sectionTitle={<i className="folder" aria-hidden="true"></i>}
            titleStylesClassname={"minWidth color3 boxShedow_dark"}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, aut.
          </SectionComponent>
        </div>
        <div className="col-3 col-md-6  col-sm-12 ">
          <SectionComponent
            sectionClassName={""}
            sectionTitle={<i className="building" aria-hidden="true"></i>}
            titleStylesClassname={"minWidth color4 boxShedow_dark"}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis iusto veritatis animi voluptate!
          </SectionComponent>
        </div>
      </div>
      <div className="flex">
        <div className="col-4 col-md-6  col-sm-12">
          <SectionComponent
            sectionClassName={""}
            sectionTitle={<ChartComponent chareType="line" />}
            titleStylesClassname={"width100 color4"}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis iusto veritatis animi voluptate!
          </SectionComponent>
        </div>
        <div className="col-4 col-md-6  col-sm-12">
          <SectionComponent
            sectionClassName={""}
            sectionTitle={<ChartComponent />}
            titleStylesClassname={"width100 color5"}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis iusto veritatis animi voluptate!
          </SectionComponent>
        </div>
        <div className="col-4 col-md-6  col-sm-12">
          <SectionComponent
            sectionClassName={""}
            sectionTitle={<ChartComponent chareType="line" />}
            titleStylesClassname={"width100 color6"}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis iusto veritatis animi voluptate!
          </SectionComponent>
        </div>
      </div>
    </>
  );
}
export default MinSectionsDashboard;
