import { Dropdown, Avatar, Navbar, Text } from '@nextui-org/react'
import NavLink from '../../NavLink'
import { signOut, useSession } from 'next-auth/react'

const Mydropdown = () => {
  const { data: session } = useSession()

  return (
    <>
      <Dropdown placement="bottom-right">
        {/* <Navbar.Item> */}
        <Dropdown.Trigger>
          <Avatar
            bordered
            as="button"
            color="secondary"
            size="md"
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            src={session?.user?.image}
          />
        </Dropdown.Trigger>
        <Dropdown.Menu
          aria-label="User menu actions"
          color="secondary"
          onAction={(actionKey) => console.log({ actionKey })}
        >
          <Dropdown.Item key="profile" css={{ height: '$18' }}>
            <NavLink href="/account/profile">
              <section>
                <Text b color="inherit" css={{ d: 'flex' }}>
                  Signed in as
                </Text>
                <Text color="inherit" css={{ d: 'flex' }}>
                  {session?.user?.name}
                </Text>
              </section>
            </NavLink>
          </Dropdown.Item>
          {/* TODO: Add more options to dropdown */}
          <Dropdown.Item key="signout" withDivider color="error">
            <button onClick={() => signOut()}>Sign Out</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default Mydropdown
