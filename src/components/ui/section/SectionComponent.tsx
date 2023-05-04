import { BigTitle } from "../title/BigTitle"

function SectionComponent({children, titleText}){
    return(
        <section className={`section relative p30  pt50mt70 `}>
        <BigTitle>{titleText}</BigTitle>
        <div className="dx-viewport">
          {children}
        </div>
      </section>
    )
}
export default SectionComponent