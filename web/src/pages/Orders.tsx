
import { useEffect, useState } from 'react'
import OrderLocation from '../components/OrderLocation'

import OrderSteps from '../components/OrderSteps'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../services/api'
import { Product } from './interfaces'

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchProducts()
      .then(res => setProducts(res.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='orders-container'>
      <OrderSteps step={1} />

      <div className='row center product-list'>
        { !!products.length &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>

      <OrderLocation />
    </div>
  )
}
