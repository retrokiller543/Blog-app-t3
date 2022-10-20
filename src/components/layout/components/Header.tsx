import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <nav className="flex justify-between">
        <Sidebar />
        <Navbar />
      </nav>
    </>
  )
}

export default Header
