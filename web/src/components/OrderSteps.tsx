
interface Props {
  step: number;
}

export default function OrderSteps(props: Props) {
  return (
    <div className='row order-steps'>
      <div className={`row center ${props.step >= 1 ? 'active' : ''}`}>Escolher o pedido</div>
      <div className={`row center ${props.step >= 2 ? 'active' : ''}`}>Endereço de entrega</div>
      <div className={`row center ${props.step >= 3 ? 'active' : ''}`}>Pagamento</div>
    </div>
  )
}