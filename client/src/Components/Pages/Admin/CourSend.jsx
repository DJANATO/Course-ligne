import React, { useState } from 'react'
import classe from './CourSend.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CourSend = () => {
   const [movie, setMovie] = useState({})
   const [name, setName] = useState("")
   const [descrip, setDescrip] = useState("")
   const navigate = useNavigate()
  const handleFileSelected = (e)=>{
    setMovie(e.target.files[0])
  }
  const handleSubmit = (e)=>{
e.preventDefault()
const fd = new FormData()
fd.append('video',movie,movie.name)
fd.append("name",name)
fd.append("descrip",descrip)
axios.post("http://localhost:5000/cours/add",fd)
.then((res)=>{
console.log(res)
navigate("/")
})
.catch((error)=>{
    console.log(error)
})

/* setMovie('')
setName('')
setDescrip('') */
  }
    return (
      <div className={classe.Admin_main}>
<div className={classe.loginBox}>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <div className={classe.userBox}>
                <input type="text" autoComplete='off' onInput={(e)=>{
        setName(e.target.value)
      }}
      value={name}/>
                <label>Nom du cours</label>
            </div>
            <div className={classe.userBox}>
                <input type="text"  autoComplete='off' onInput={(e)=>{
        setDescrip(e.target.value)
      }}
      value={descrip}/>
                <label>Description du cours</label>
            </div>
            <div>
                <input type="file" onChange={(e)=>{handleFileSelected(e)}}/>
                </div>
                <button type="submit">Envoyer</button>
        </form>
    </div>
      </div>
  )
}

export default CourSend