import { signIn, useSession } from 'next-auth/react'
import NavLink from '../../NavLink'
import Mydropdown from './Dropdown'

const Nav = () => {
  const { data: session } = useSession()

  // TODO: Add more nav links and pages
  const collapseItems = {
    Home: '/',
    Blog: '/blogs',
    About: '/about',
    Contact: '/contact',
    Profile: 'account/profile',
  }

  return (
    <>
      <nav className="flex items-center justify-between bg-main-dark-bg ">
        <section className="m-4 text-white">
          <h3>Blog App</h3>
        </section>
        <section className="ml-96 ">
          <ul className="m-4 flex text-white">
            {Object.keys(collapseItems).map((item) => (
              <div key={item}>
                <NavLink href={collapseItems[item]}>
                  <li className="m-2 cursor-pointer rounded-md p-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-main-bg hover:text-black">
                    {item}
                  </li>
                </NavLink>
              </div>
            ))}
          </ul>
        </section>
        <section className="m-4 text-white">
          {session ? (
            <Mydropdown />
          ) : (
            <button onClick={() => signIn()}>Sign In</button>
          )}
        </section>
      </nav>
    </>
  )
}

export default Nav
