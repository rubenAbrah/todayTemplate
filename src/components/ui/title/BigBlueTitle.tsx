function BigBlueTitle({children,classnames = null}){
  return (
    <div className="myMinus25 relative">
      <div className={`br075rem title topminus80 width100 flex br075rem justifyCenter bgBlue alignCenter positionAbsolute mtminus30 active p30 ${classnames}`}>
        <h1 className="">{children}</h1>
      </div>
    </div>
  );
}
export { BigBlueTitle };
