import { formatPrice } from '../utils/formatters'

interface Props {
  amount: number
  totalPrice: number
  handleSubmit: () => void
}

export default function OrderSummary({ amount, totalPrice, handleSubmit }: Props) {
  return (
    <div className='row order-summary-container'>
      
      <div>
        <div>
          <strong>{amount}</strong>
          Pedidos selecionados
        </div>
        <strong>{formatPrice(totalPrice)}</strong>
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className='button primary'
        >
          FAZER PEDIDO
        </button>
      </div>
      
    </div>
  )
}
