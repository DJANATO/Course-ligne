import React from 'react'
import classe from './Header.module.css'
import {Link} from 'react-router-dom'

const Header = () => {
  
  return (
    <header>
        
        <div className={classe.companyLogo}><Link to="/" >UNIVERSITE LOÏC</Link></div>
        <nav className={classe.navbar}>
          <ul className={classe.navItems}>
            <li className={classe.navItem}><Link to="./inscription" className={classe.navLink}>INSCRIPTION</Link></li>
            <li className={classe.navItem}><Link to="./connexion" className={classe.navLink}>CONNEXION</Link></li>
          </ul>
        </nav>
        <div className={classe.menuToggle}>
          <i /* className={classe.bx} */></i>
          <i /* className={classe.bx bx-x} */></i>
        </div>
    </header>
  )
}

export default Header