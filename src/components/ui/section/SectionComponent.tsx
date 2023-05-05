import { BigTitle } from "../title/BigTitle"

function SectionComponent({children, titleText}){
    return(
        <section className={`section relative p30  pt50mt70 `}>
        <BigTitle>{titleText}</BigTitle> 
          {children} 
      </section>
    )
}
export default SectionComponent