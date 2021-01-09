
import { Product } from '../pages/interfaces'
import { formatPrice } from '../utils/formatters'

type Props = {
  product: Product
}

export default function ProductCard({product}: Props) {

  return (
    <div className='row top card-container'>
      <h3 className='colored'>
        { product.name }
      </h3>
      
      <div className='card-image'>
        <img src={product.imageUri} alt={product.name} />
      </div>
      
      <div>
        <h2 className='colored'>{ formatPrice(product.price) }</h2>
        <h3>descrição</h3>
        <p>
          { product.description }
        </p>
      </div>
    </div>
  )
}
