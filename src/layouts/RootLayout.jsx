import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RootLayout() {
  const navigation = useNavigation()

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main className={navigation.state === 'loading' ? 'opacity-60 transition-opacity' : ''}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}