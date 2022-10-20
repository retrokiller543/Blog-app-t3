// src/pages/_app.tsx
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { NextUIProvider } from '@nextui-org/react'
import type { Session } from 'next-auth'
import type { AppType } from 'next/app'
import { trpc } from '../utils/trpc'
import Layout from '../components/layout'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
