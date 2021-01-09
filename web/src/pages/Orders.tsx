
import { useEffect, useState } from 'react'

import OrderLocation from '../components/OrderLocation'
import OrderSteps from '../components/OrderSteps'
import OrderSummary from '../components/OrderSummary'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../services/api'
import { OrderLocationDTO, Product } from './interfaces'

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationDTO>()

  useEffect(() => {
    fetchProducts()
      .then(res => setProducts(res.data))
      .catch(error => console.log(error))
  }, [])

  let currentStep = 0
  // if (pedido selecionado) currentStep = 1
  if (orderLocation?.latitude) currentStep = 2
  // if (pedido selecionado) currentStep = 3 

  return (
    <div className='orders-container'>
      <OrderSteps step={currentStep} />

      <div className='row center product-list'>
        { !!products.length &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>

      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
      <OrderSummary />
    </div>
  )
}
