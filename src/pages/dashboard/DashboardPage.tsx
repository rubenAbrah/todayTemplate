import styles from './DashboardPage.module.css'
function DashboardPage() {
  return (
    <div className={[styles.sidebarWrapper, 'colorWhite'].join(' ')}>
      <div className="sidbarHeader ">
        <a href="/">
          <span>Logo</span>
          <img src="" />
        </a>
      </div>
      <div className="imgSection ">
        <img src="" alt="" />
      </div>
      <nav className='colorWhite'>
        <span className="navHeader">
            dashboardTitle
        </span>
        <ul>
          <li className='colorWhite active'>
            <img src="" alt="" className="icon" />
            <span><a className='colorWhite' href="">dashboard</a></span>
          </li>
          <li>
            <img src="" alt="" className="icon" />
            <span><a href="">dashboard</a></span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DashboardPage;
