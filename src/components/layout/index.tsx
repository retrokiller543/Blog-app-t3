import Header from './components/Header'
import Footer from './components/Footer'
import { Box } from './components/box'
import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta
          name="have-i-been-pwned-verification"
          content="f06da9c064307eaf1ca76508d5301b75"
        />
      </Head>
      <main className="w-screen">
        <Box
          css={{
            maxW: '100vw',
          }}
        >
          <Header />
          <section className="flex items-center ">{children}</section>
          <Footer />
        </Box>
      </main>
    </>
  )
}
