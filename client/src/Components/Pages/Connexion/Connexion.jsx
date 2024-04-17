import React from 'react'
import classe from './Connexion.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Connexion = () => {
  const [pseudo, setPseudo] = useState("")
  const [pwd, setPwd] = useState("")
  const navigate =useNavigate()


  const handleSubmit= (e)=>{
    e.preventDefault()
    const data = {pseudo,pwd}
    console.log(data)
      axios.post("http://localhost:5000/student/login",data).then((reponse)=>{
      console.log(reponse.data)
      localStorage.setItem("token",reponse.data.accessToken)
    navigate("/cours")})
      .catch((error)=>{
        console.log(error)
      })
  }
  return (
    <main>
      <div className={classe.loginBox}>
             <h2>Connexion</h2>
             <br />
             <form onSubmit={(e)=>{handleSubmit(e)}}>     
             <div className={classe.userBox}>
      <input type="text"  autoComplete="off" 
      onInput={(e)=>{
        setPseudo(e.target.value)
      }}
      value={pseudo}
      required/>
        <label>Nom d'utilisateur</label>
      </div>
      <div className={classe.userBox}>
      <input type="password"    autoComplete="off"
      onInput={(e)=>{
        setPwd(e.target.value)
      }}
      value={pwd}
      required/>
        <label>Mot de passe</label>
      </div>
      <button type='submit'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Soumettre
      </button>
      <button type='submit'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Link to='/inscription'>Vous n'avez pas de compte! Inscription</Link>
      </button>
    </form>
      </div>
            
    </main>
  )
}

export default Connexion