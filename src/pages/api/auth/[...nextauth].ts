import NextAuth, { type NextAuthOptions } from 'next-auth'
// import bcrypt from 'bcrypt'
// import CredentialsProvider from 'next-auth/providers/credentials'
import DiscordProvider from 'next-auth/providers/discord'
import GitHubProvider from 'next-auth/providers/github'

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '../../../server/db/client'
import { env } from '../../../env/server.mjs'

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    // CredentialsProvider({
    //   name: 'Sign in',
    //   id: 'app',
    //   credentials: {
    //     username: { label: 'Username', type: 'text' },
    //     password: { label: 'Password', type: 'password' },
    //   },

    //   authorize: async (credentials: {
    //     username: string
    //     password: string
    //   }) => {
    //     const user = await prisma.user.findUnique({
    //       where: { username: credentials.username },
    //     })
    //     if (!user) {
    //       return null
    //     }
    //     console.log(user)
    //     // const valid = await bcrypt.compare(credentials.password, user.password)

    //     // if (!valid) {
    //     //   console.log(`Credentials not valid`)
    //     //   return null
    //     // }

    //     // if (user) {
    //     //   return { ...user, email: user.username }
    //     // }
    //     return user
    //   },
    // }),
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: env.ID_GITHUB,
      clientSecret: env.SECRET_GITHUB,
    }),
  ],
}

export default NextAuth(authOptions)
