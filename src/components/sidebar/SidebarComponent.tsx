 
function SidebarComponent() {
  return (
    <div className='m15 br0375rem p15 width250 scrollbar sidebarBackground sidebarText sidebarHeight overflowXhidden fixed p20'>
      <div className="positionAbsolute clossButton topAndRight0"><span className='size32 py10'>&times;</span></div>
      <a href="/" className="flex my20 justifyCenter alignCenter">
        <img src="/src/assets/img/svg/logo.svg" />
      </a>

      <hr className='darkHr' /> 
      <div className="imgSection  my10  justifyCenter alignCenter">
        <img className='width100' src="/src/assets/img/backgrounds/sidebarImage.jpg" alt="" />
      </div>

      <hr className='darkHr'  />
      <div className="flex  imgSection  my10">
        <img className='br50 size40' src="/src/assets/img/backgrounds/avatar.png" alt="" />
        <span className='m15'>423</span>
      </div>
      <hr className='darkHr' />
      <nav className='colorWhite'>
        <div className="p15 navHeader flex between alignCenter navHeader">
          <span className="">
            dashboardTitle
          </span>
          <span className="navHeader rotate270">
            &#5171;
          </span>
        </div>
        <ul>
          <li className='active br0375rem p10 m5'>
            <img src="" alt="" className="icon" />
            <span><a href="">dashboard</a></span>
          </li>
          <li className='br0375rem p10 m5'>
            <img src="" alt="" className="icon" />
            <span><a href="">dashboard</a></span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SidebarComponent;
