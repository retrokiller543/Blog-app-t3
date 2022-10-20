import React from 'react'
import Link from 'next/link'
import { signIn, useSession, signOut } from 'next-auth/react'
import NavLink from '../../NavLink'
import Mydropdown from './Dropdown'

const Navbar = () => {
  const { data: session } = useSession()
  return (
    <section className="flex items-center">
      <Link href="/" replace>
        <a className="m-4">Home</a>
      </Link>
      {session ? (
        <Mydropdown img={session?.user?.image} />
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </section>
  )
}

export default Navbar
