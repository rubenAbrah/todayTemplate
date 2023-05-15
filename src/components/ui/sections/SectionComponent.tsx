import { Title } from "../title/Title";

function SectionComponent({
  children,
  sectionTitle = null,
  sectionClassName = null,
  titleStylesClassname = null,
}) {
  return (
    <section
      className={[`section relative p15 mt40m5 `, sectionClassName ].join(" ")}
    >
      {sectionTitle ? (
        <Title titleClassName={titleStylesClassname}>{sectionTitle}</Title>
      ) : (
        ""
      )}
      <div className="my10">{children}</div>
    </section>
  );
}

export default SectionComponent;
