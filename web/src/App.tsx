import Header from './components/Header'
import _Routes from './pages/_Routes'
import Footer from './components/Footer'

import './App.css'

export default function App() {
  return (
    <div className='grid-container'>
      <Header />

      <main>
        <_Routes />
      </main>

      <Footer />
    </div>
  )
}

