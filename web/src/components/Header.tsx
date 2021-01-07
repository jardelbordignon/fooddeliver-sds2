import { ReactComponent as Logo } from '../assets/logo.svg'

export default function Header() {
  return (
    <header className='row'>
      <div className='row left'>
        <Logo />
        <a href='/'>DS Delivery</a>   
      </div>
    </header>
  )
}
