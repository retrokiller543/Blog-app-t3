import React from 'react'
import Nav from './Navbar'
import NavLink from '../../NavLink'

const Header = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 ">
        {/* <section>
          <NavLink href="/">
            <h2 className="m-4 cursor-pointer">Blog App</h2>
          </NavLink>
        </section> */}
        <Nav />
      </nav>
    </>
  )
}

export default Header
