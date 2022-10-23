import { NextPage } from 'next'
import { Formik } from 'formik'
import { prisma } from '../../server/db/client'
import bcrypt from 'bcrypt'

import { env } from '../../env/server.mjs'

const register: NextPage = () => {
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '', validPassword: '' }}
        onSubmit={handelRegister}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            className="flex flex-grow flex-col justify-evenly pb-4 "
          >
            <label htmlFor="name">Display Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={props.handleChange}
              value={props.values.name}
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={props.handleChange}
              value={props.values.email}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={props.handleChange}
              value={props.values.password}
            />

            <label htmlFor="validPassword">Confirm Password</label>
            <input
              type="password"
              name="validPassword"
              id="validPassword"
              required
              onChange={props.handleChange}
              value={props.values.validPassword}
            />
            {props.errors.name && <div id="feedback">props.errors.name</div>}
            <button type="submit">Sign Up</button>
          </form>
        )}
      </Formik>
    </>
  )
}

export default register

async function handelRegister(values) {
  const saltRounds = 10
  const password = values.password
  const valid_password = values.validPassword
  if (password === valid_password) {
    const curr_user_email = await prisma.user.findUnique({
      where: {
        email: values.email,
      },
    })
    alert(curr_user_email)
    console.log(curr_user_email)
    if (curr_user_email) {
      alert('test')
      return null
    }
    const user = await prisma.user.create({
      data: {
        name: values.name,
        email: values.email,
        password: values.password,
      },
    })
    console.log(user)
    alert(user)
    return user
  }
}
