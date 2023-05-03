import { BigBlueTitle } from "../title/BigBlueTitle"

function SectionComponent({children, classesHTML, titleText}){
    return(
        <section className={`section relative p30  pt50mt70 ${classesHTML}`}>
        <BigBlueTitle classnames={"titlecenter p15"}>{titleText}</BigBlueTitle>
        <div className="dx-viewport">
          {children}
        </div>
      </section>
    )
}
export default SectionComponent