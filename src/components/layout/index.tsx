import Header from './components/Header'
import Footer from './components/Footer'
import { Box } from './components/box'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <Box
        css={{
          maxW: '100%',
        }}
      >
        <Header />
        {children}
        <Footer />
      </Box>
    </main>
  )
}
