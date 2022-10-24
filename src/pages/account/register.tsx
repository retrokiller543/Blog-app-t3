import { NextPage } from 'next'
import { Formik } from 'formik'
import { prisma } from '../../server/db/client'

type user = {
  name: string
  email: string
  password: string
  validPassword: string
}

const register: NextPage = () => {
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '', validPassword: '' }}
        onSubmit={registerUser}
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

const registerUser = async (values: user) => {
  if (values.password === values.validPassword) {
    const url = `${getBaseUrl()}/api/user/register`
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    }
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' },
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
}

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return `http://localhost:${process.env.PORT ?? 3000}`
}
