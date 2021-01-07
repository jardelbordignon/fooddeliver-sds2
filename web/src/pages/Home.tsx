
import { Link } from 'react-router-dom'

import { ReactComponent as MainImage } from '../assets/main.svg'

export default function Home() {
  return (
    <div className='row center home-container'>

      <div className='row top'>
        <div>
          <h1 className='home-title'>
            Faça seu pedido <br />que entregamos <br />para você!
          </h1>
          <h3 className='home-subtitle'>
            Escolha seus sabores preferidos e <br />
            rapidinho levamos até a sua porta.
          </h3>
          <Link to='/orders' className='button'>
            FAZER PEDIDO
          </Link>
        </div>

        <div className='home-image'>
          <MainImage />
        </div>
      </div>
    </div>
  )
}
