import Header from './components/Header'
import Footer from './components/Footer'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
