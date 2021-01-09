
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import OrderLocation from '../components/OrderLocation'
import OrderSteps from '../components/OrderSteps'
import OrderSummary from '../components/OrderSummary'
import ProductCard from '../components/ProductCard'
import { fetchProducts, saveOrder } from '../services/api'
import { OrderLocationDTO, Product } from './interfaces'

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationDTO>()

  useEffect(() => {
    fetchProducts()
      .then(res => setProducts(res.data))
      .catch(error => console.log(error))
  }, [])


  const totalPrice = selectedProducts.reduce((acc, item) => acc + item.price, 0)
  const isSelected = (product: Product) => selectedProducts.some(item => item.id === product.id)
  
  const handleSelectProduct = (product: Product) => {
    if (isSelected(product)) {
      const selecteds = selectedProducts.filter(item => item.id !== product.id)
      setSelectedProducts(selecteds);
    } else {
      setSelectedProducts(previous => [...previous, product])
    }
  }

  const currentStep = selectedProducts.length
    ? orderLocation?.latitude ? 2 : 1
    : 0

  const handleSubmit = () => {
    if (currentStep < 2) {
      const message = currentStep===0
        ? 'Escolha seu pedido e informe o endereço de entrega'
        : 'Informe o endereço de entrega'
      toast.warning(message)
      return
    }

    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = { ...orderLocation!, products: productsIds }
 
    saveOrder(payload).then(res => {
      toast.error(`Pedido enviado com sucesso! Nº ${res.data.id}`);
      setSelectedProducts([]);
    })
    .catch(() => {
      toast.warning('Erro ao enviar pedido');
    })
  }


  return (
    <div className='orders-container'>
      <OrderSteps step={currentStep} />

      <div className='row center product-list'>
        { !!products.length &&
          products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onSelectProduct={handleSelectProduct}
              isSelected={isSelected(product)}
            />
          ))
        }
      </div>

      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
      <OrderSummary
        amount={selectedProducts.length}
        totalPrice={totalPrice}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
