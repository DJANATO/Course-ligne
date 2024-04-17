import React from 'react'
import classe from './HeaderCoursDetail.module.css'
import { Link } from 'react-router-dom'


const HeaderCoursDetail = () => {
  return (
    <header>
        <div className={classe.companyLogo}><Link to='/'>UNIVERSITE LOÏC</Link></div>
        {/* <div className={classe.companyDetail}>CONNECTE - TOI</div> */}
        <nav className={classe.navbar}>
          <ul className={classe.navItems}>
            <li className={classe.navItem}><Link className={classe.navLink} to='/'>DECONNEXION</Link></li>
            
          </ul>
        </nav>
        <div className={classe.menuToggle}>
          <i /* className={classe.bx} */></i>
          <i /* className={classe.bx bx-x} */></i>
        </div>
    </header>
  )
}

export default HeaderCoursDetail