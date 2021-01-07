import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../assets/logo.svg'

export default function Header() {
  return (
    <header className='row'>
      <div className='row left'>
        <Logo />
        <Link to='/'>DS Delivery</Link>   
      </div>
    </header>
  )
}
