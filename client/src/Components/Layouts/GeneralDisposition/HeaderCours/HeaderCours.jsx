import React from 'react'
import { Link } from 'react-router-dom'
import classe from './HeaderCours.module.css'
const HeaderCours = () => {
  return (
    <header>
                <div className={classe.companyLogo}><Link to="/" >UNIVERSITE LOÏC</Link></div>
        <nav className={classe.navbar}>
          <ul className={classe.navItems}>
            <li className={classe.navItem}><Link to='/' className={classe.navLink}>DECONNEXION</Link></li>
          </ul>
        </nav>
        <div className={classe.menuToggle}>
          <i /* className={classe.bx} */></i>
          <i /* className={classe.bx bx-x} */></i>
        </div>
    </header>
  )
}
export default HeaderCours