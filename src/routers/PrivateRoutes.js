import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import DashboardRoutes from './DashboardRoutes'

const PrivateRoutes = ({children}) => {

    const { user } = useContext(AuthContext)
  return (
    <>
        {user.logged ? <DashboardRoutes/> : <Navigate to='/login'/>}
    </>
  )
}

export default PrivateRoutes