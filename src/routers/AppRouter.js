import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoutes from './PrivateRoutes'

const AppRouter = () => {
  return (
        <Router>
            <Routes>
                <Route path='/login' element={<LoginScreen/>}/>

                <Route path='/*' element={
                  <PrivateRoutes>
                    <DashboardRoutes/>
                  </PrivateRoutes>
                } />

                {/* <Route path='/*' element={<DashboardRoutes/>}/> */}
            </Routes>
        </Router>
  )
}

export default AppRouter