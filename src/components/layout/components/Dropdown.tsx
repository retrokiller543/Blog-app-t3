import { Dropdown } from '@nextui-org/react'
import NavLink from '../../NavLink'
import { signOut } from 'next-auth/react'

const Mydropdown = ({ img }) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Button flat>Profile</Dropdown.Button>
        <Dropdown.Menu aria-label="Static Actions">
          <Dropdown.Item key="profile">
            <NavLink
              href="/accounts/profile"
              name={
                <div className="flex items-center justify-between">
                  <p>Profile</p>
                  <img src={img} className="h-9 w-9 rounded-full" />
                </div>
              }
              classname=""
            />
          </Dropdown.Item>
          <Dropdown.Item key="signout">
            <button onClick={() => signOut()}>Sign Out</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default Mydropdown
