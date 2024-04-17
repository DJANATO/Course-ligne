import React, { useEffect, useState } from 'react'
import classe from './Details.module.css'
import HeaderCoursDetail from '../../Layouts/GeneralDisposition/HeaderCoursDetail/HeaderCoursDetail'
/* import axios from 'axios' */
import {  useNavigate } from 'react-router-dom'
import axiosPrivate from '../../../api/axiosPrivate'

const Details = ({coursId}) => {
const [coursDetails, setCoursDetails] = useState([])
/* const [videoUrl, setVideoUrl] = useState('') */
const navigate = useNavigate()
useEffect(()=>{
  axiosPrivate.post('/cours/selectOne',{coursId})
  .then((reponse)=>{
    console.log(reponse.data.result)
    console.log(coursId)
    setCoursDetails(reponse.data.result)
    /* const videoBlob = new Blob([reponse.data.result.Media],{type: 'video/mp4'})
    const videoUrl = URL.createObjectURL(videoBlob) 
    setVideoUrl(videoUrl)*/
    /* setCoursId(reponse.data.result.id_cours) */
 }).catch((err)=>{
    console.log(err.reponse.status)
    if(err.response.status){
       navigate('/connexion')
    }
  })
},[])  

let coursDetailDiv = coursDetails.length>0 ? coursDetails.map((coursDetail)=>{
return(
  <div className={classe.container} key={coursDetail.id_cours}>
     <button className={classe.bn} onClick={()=>{navigate('/cours')}}>retour</button>
    
       
              <video src={coursDetail.Media} controls ></video>
        
              
        <div className={classe.descri}>
          <p>{coursDetail.Description_cours}</p>
          </div> 
  </div>)
}):null
  
  return (
    <div>
      <HeaderCoursDetail/>
<div className={classe.contain}>
            {coursDetailDiv}
    </div>
    </div>
    
  )
}

export default Details