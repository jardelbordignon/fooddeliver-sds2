import Header from './components/Header'
import AppRoutes from './pages/appRoutes'
import Footer from './components/Footer'

import './App.css'

export default function App() {
  return (
    <div className='grid-container'>
      <Header />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  )
}

