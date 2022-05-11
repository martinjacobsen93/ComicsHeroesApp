import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DcScreen from '../components/dc/DcScreen'
import HeroScreen from '../components/hero/HeroScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import SearchScreen from '../components/search/SearchScreen'
import Error404 from '../components/ui/Error404'
import { Navbar } from '../components/ui/Navbar'

const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className='container mt-4'>
          <Routes>
              <Route path='/' element={<MarvelScreen/>}/>
              <Route path='marvel' element={<MarvelScreen/>}/>
              <Route path='dc' element={<DcScreen/>}/>
              <Route path='hero/:heroId' element={<HeroScreen/>}/>
              <Route path='search' element={<SearchScreen/>}/>
              <Route path='*' element={<Error404/>}/>
          </Routes>
        </div>
    </>
  )
}

export default DashboardRoutes