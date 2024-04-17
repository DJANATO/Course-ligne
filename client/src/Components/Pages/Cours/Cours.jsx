import React, { useState } from 'react'
import classes from './Cours.module.css'
import logo from '../../../images/school.svg'
import HeaderCours from '../../Layouts/GeneralDisposition/HeaderCours/HeaderCours'
import { useEffect } from 'react'
import axiosPrivate from '../../../api/axiosPrivate'
import { useNavigate } from 'react-router-dom'
const Cours = ({setCoursId}) => {
  const navigate = useNavigate()
  const [cours, setCours] = useState([])
  


  
  
  useEffect(()=>{
   axiosPrivate.get('/cours/selectAll').then((reponse)=>{
      console.log(reponse.data)
      setCours(reponse.data.result)
      /* setCoursId(reponse.data.result.id_cours) */
   }).catch((err)=>{
      console.log(err.response.status)
      if(err.response.status){
         navigate('/connexion')
      }
   })
  },[])
  let coursDiv = cours.length>0 ? cours.map((cour)=>{
   return (
   <div className={classes.content} key={cour.id_cours}
   onClick={()=>{
      setCoursId(cour.id_cours)
      navigate('/details')
       }}>
      <div className={classes.cours} >
      <img src={logo} alt="" />
         {/* <div className={classe.icone}>
            
         </div> */}
         
         </div>
         <span>{cour.Name_cours}</span>
   </div>)
  }) : null


  return (
<div>
   <HeaderCours/>
   {/* <div className={classes.main}>
   </div> */}
      <main>
      {coursDiv}
      </main>
   
    
</div>
    
  )
}

export default Cours