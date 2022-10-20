import { NextPage } from 'next'
import { useSession, signOut } from 'next-auth/react'

const user: NextPage = () => {
  const { data: session } = useSession({ required: true })

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <section>
        <h2>user is {session?.user?.name}</h2>
        <img
          src={session?.user?.image}
          alt="user image"
          className="h-12 w-12 rounded-full"
        />
        <p>The user email is {session?.user?.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </section>
    </main>
  )
}

export default user
