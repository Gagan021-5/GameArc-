import React from 'react'
import Navbar from '../components/Navbar'
import Foot from '../components/Foot'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Foot/>
    </>
  )
}

export default Layout
