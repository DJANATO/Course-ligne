import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const Protection = () => {
  return <div>
    {
        localStorage.getItem('token')? <Outlet/> :<Navigate to='/connexion' />
    }
  </div>
}

export default Protection