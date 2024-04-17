import React from 'react'
import classe from './MyButton.module.css'
/* import { Link } from 'react-router-dom' */
const MyButton = () => {
  return (
    <button type="submit" className={classe.btn}
     /* onClick={(e)=>{e.preventDefault()}} */
    >{/* <Link to={"/cours"}>Connexion</Link> */}Connexion</button>
  )
}

export default MyButton