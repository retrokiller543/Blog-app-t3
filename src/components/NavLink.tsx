import Link from 'next/link'

function NavLink({ href, name, classname }) {
  return (
    <Link href={href} passHref replace>
      <a className={classname}>{name}</a>
    </Link>
  )
}

export default NavLink
