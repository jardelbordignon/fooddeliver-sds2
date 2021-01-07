
import { error } from 'console'
import { useEffect, useState } from 'react'

import OrderSteps from '../components/OrderSteps'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../services/api'
import { Product } from './types'

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([])

  console.log(products)
  useEffect(() => {
    fetchProducts()
      .then(res => setProducts(res.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='orders-container'>
      <OrderSteps step={2} />

      <div className='row center product-list'>
        { !!products.length &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}
