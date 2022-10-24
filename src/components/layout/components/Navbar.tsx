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
      <nav className="flex items-center justify-between bg-main-dark-bg">
        <section className="m-4 px-4 py-2 text-white">
          <h3>Blog App</h3>
        </section>
        <section className="flex">
          <section className="my-8">
            <ul className="flex gap-1 text-white">
              {Object.keys(collapseItems).map((item) => (
                <li key={item}>
                  <NavLink href={collapseItems[item]}>
                    <p className="cursor-pointer rounded-md px-4 py-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-main-bg hover:text-black">
                      {item}
                    </p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </section>
          <section className="m-5 px-4 py-2 text-white">
            {session ? (
              <Mydropdown />
            ) : (
              <section className="flex">
                <button
                  onClick={() => signIn()}
                  className="my-3 mx-1 cursor-pointer rounded-md border-2 border-blue-500 px-4 py-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-main-bg hover:text-black"
                >
                  Sign In
                </button>
                <NavLink href="/account/register">
                  <p className="my-3 mx-1 cursor-pointer rounded-md border-2 border-blue-500 px-4 py-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-main-bg hover:text-black">
                    Register
                  </p>
                </NavLink>
              </section>
            )}
          </section>
        </section>
      </nav>
    </>
  )
}

export default Nav
