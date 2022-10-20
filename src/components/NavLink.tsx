import Link from 'next/link'

function NavLink({ href, children }) {
  return (
    <Link href={href} passHref replace>
      {children}
    </Link>
  )
}

export default NavLink
