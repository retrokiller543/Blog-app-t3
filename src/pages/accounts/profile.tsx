import { NextPage } from 'next'
import { useSession } from 'next-auth/react'

const user: NextPage = () => {
  const { data: session } = useSession({ required: true })

  return (
    <main>
      <section>
        <h2>user is {session?.user?.name}</h2>
        <img
          src={session?.user?.image}
          alt="user image"
          className="h-6 w-6 rounded-full"
        />
        <p>The user email is {session?.user?.email}</p>
      </section>
    </main>
  )
}

export default user
