import React, { useState } from 'react'
import classe from './Inscription.module.css'
import axios from 'axios'
/* import MyButton from '../../Layouts/MyButtonLayout/MyButton' */
import { Link, useNavigate } from 'react-router-dom'
const Inscription = (props) => {
    const [prenom, setPrenom] = useState("")
    const [nom, setNom] = useState("")
    const [pseudo, setPseudo] = useState("")
    const [mdp, setMdp] = useState("")
    const [confMdp, setConfMdp] = useState("")
    const [selectFil, setSelectFil] = useState("")
    const navigate =useNavigate()
    const [error, setError] = useState("")

    let handleSubmit =(e)=>{
        e.preventDefault()
        if (mdp===confMdp) {
          setError('')
          console.log('click')
        }else{
          setError('Les mots de passe ne sont pas conformes!!recommencez')
        }
        
        let data ={
            prenom,nom,pseudo,confMdp,selectFil
        }
        console.log(data)
        axios.post("http://localhost:5000/student/signup",data).then((reponse)=>{
      console.log(reponse)
      localStorage.setItem("token",reponse.data.accessToken)
      navigate('/cours')   
  
    }).catch((error)=>{
        console.log(error)
      })
    }
 
    return (
    <main>
      
        <div className={classe.loginBox}>
        <h2>INSCRIPTION</h2>
     <form 
      onSubmit={(e)=>{
        handleSubmit(e)
      }}>
      <div className={classe.userBox}>
      <input type="text" id="name"
                onChange={(e)=>{setPrenom(e.target.value)}}
                   required/>
        <label>Prénom</label>
      </div>
      <div className={classe.userBox}>
      <input type="text" id="lastname"
                onChange={(e)=>{setNom(e.target.value)}}
                 autoComplete="off" required/>
        <label>Nom</label>
      </div>     
       <div className={classe.userBox}>
      <input type="text" id="pseudo" 
                onChange={(e)=>{setPseudo(e.target.value)}}
                  autoComplete="off" required/>
        <label>Nom d'utilisateur</label>
      </div>
      <div className={classe.userBox}>
      <input type="password" id="password" 
                onChange={(e)=>{setMdp(e.target.value)}}
                 autoComplete="off" required/>
        <label>Password</label>
      </div>
      <div className={classe.userBox}>
      <input type="password" id="cpassword"
                onChange={(e)=>{setConfMdp(e.target.value)}}
                  autoComplete="off" required/>
        <label>Confirm password</label>
        {error && <div>{error}</div>}
      </div>
      
      <select  id="filiere" 
                onChange={(e)=>{setSelectFil(Number(e.target.value))}}
                required>
            <option defaultValue="choisie ta filiere" >Choisie ta filière</option>
            <option value="5">
              » INFO-COM « 
              Information et Communication
            </option>
            <option value="6">
              » TC « 
              Techniques de Commercialisation
            </option>
            <option value="7">
              » GEA « 
              Gestion des Entreprises et Administration
            </option>
            <option value="1">
              » SIL « 
              Systèmes Informatiques et Logiciels
            </option>
            <option value="3">
              » GEII « 
              Génie Électrique et Informatique Industrielle
            </option>
            <option value="2">
              » GMP « 
              Génie Mécanique et Productique
            </option>
            <option value="4">
              » GLT « 
              Gestion Logistique et Transport
            </option>
        </select>
      
      
        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Soumettre
        </button>
        <br />
        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link to='/connexion'>Vous avez un compte! Connexion</Link>
        </button>
      </form>
  </div>
    </main>
  )
}

export default Inscription