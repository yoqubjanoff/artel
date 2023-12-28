import React from 'react'
import Header from '../components/header/header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Layout