import { ReactComponent as Logo } from '../assets/logo.svg'

export default function NavBar() {
  return (
    <div className='main-navbar flex vertical-center'>
      <Logo />
      <a href='/' className='text-logo'>MyFood Delivery</a>   
    </div>
  )
}
