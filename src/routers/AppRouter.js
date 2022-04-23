import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoutes from './PrivateRoutes'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  return (
        <Router>
            <Routes>

                <Route path='/login' element={
                  <PublicRoute>
                    <LoginScreen/>
                  </PublicRoute>
                }/>


                <Route path='/*' element={
                  <PrivateRoutes>
                    <DashboardRoutes/>
                  </PrivateRoutes>
                } />

            </Routes>
        </Router>
  )
}

export default AppRouter