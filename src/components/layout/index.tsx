import Header from './components/Header'
import Footer from './components/Footer'
import { Box } from './components/box'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="w-screen">
      <Box
        css={{
          maxW: '100vw',
        }}
      >
        <Header />
        {children}
        <Footer />
      </Box>
    </main>
  )
}
