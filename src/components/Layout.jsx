import React from 'react'
import Header from './Layout/Header2'
import { Outlet } from 'react-router-dom'
import Footer from './Layout/Footer'

export default function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
