import { Dropdown, Avatar, Text } from '@nextui-org/react'
import NavLink from '../../NavLink'
import { signOut, useSession } from 'next-auth/react'

const Mydropdown = () => {
  const { data: session } = useSession()

  return (
    <section className="m-4">
      <Dropdown placement="bottom-right">
        {/* <Navbar.Item> */}
        <Dropdown.Trigger>
          <section className="flex cursor-pointer items-center gap-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Avatar
              bordered
              as="button"
              color="secondary"
              size="md"
              src={session?.user?.image}
            />
            <Text b color="inherit">
              {session?.user?.name}
            </Text>
          </section>
        </Dropdown.Trigger>
        <Dropdown.Menu aria-label="User menu actions" color="secondary">
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
          <Dropdown.Item key="settings" withDivider>
            <NavLink href="/account/settings">
              <Text b color="inherit">
                Settings
              </Text>
            </NavLink>
          </Dropdown.Item>
          {/* TODO: Add more options to dropdown */}
          <Dropdown.Item key="signout" withDivider color="error">
            <button onClick={() => signOut()}>Sign Out</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </section>
  )
}

export default Mydropdown
