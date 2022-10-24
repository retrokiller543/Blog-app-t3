import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../server/db/client'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = uuidv4()
  const password = await bcrypt.hash(req.body.password, 10)
  const NewUser = {
    id,
    name: req.body.name,
    email: req.body.email,
    password,
  }

  const curr_user_email = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  })
  if (!curr_user_email) {
    const register_User = await prisma.user.create({
      data: NewUser,
    })
    res.status(200).send(register_User)
  } else {
    res.status(400).send('User exists')
  }
  res.status(200).send('test')
}

export default registerUser
