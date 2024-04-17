import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Accueil from './Components/Pages/Accueil/Accueil'
import Connexion from './Components/Pages/Connexion/Connexion'
import Inscription from './Components/Pages/Inscription/Inscription'
import Cours from './Components/Pages/Cours/Cours'
import Details from './Components/Pages/Details/Details'
import HomeLayout from './Components/Layouts/HomeLayout'
import { useState } from 'react'
import Protection from './Components/Protection/Protection'
import CourSend from './Components/Pages/Admin/CourSend'

 function App() {
  
  const [coursId, setCoursId] = useState("")
  
  return (
        <div>
      <BrowserRouter>
      <Routes>
        <Route path='/cours' element={<Protection/>}>
        <Route index element={<Cours setCoursId={setCoursId}/>}/>
        </Route>
        <Route path='/' element={<HomeLayout/>}>
        <Route index element={<Accueil/>}/>
        <Route path='connexion' element={<Connexion />}/>
        <Route path='inscription' element={<Inscription />}/>
        <Route path='admin' element={<CourSend/>}/>
        </Route>
        <Route path='/details' element={<Details coursId={coursId} setCoursId={setCoursId}/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;