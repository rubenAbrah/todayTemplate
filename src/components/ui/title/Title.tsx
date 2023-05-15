function Title({ children, titleClassName = null }) {
  return ( 
      <div
        className={`${
          titleClassName ? titleClassName : "width100 color3"
        } br075rem p15 title flex br075rem justifyCenter alignCenter  mtminus60`}
      >
        <div>{children}</div>
      </div> 
  );
}
export { Title };
