import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

import './App.css'

export default function App() {
  return (
    <div className='grid-container'>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

