import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../sections/global/Header/Header'
import Footer from '../sections/global/Footer/Footer'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>     
    </div>
  )
}

export default Layout
