
import {Button} from '@mui/material'

const Basket = ({order, tips, payment, onClose, sum}) => {

  return (
    <aside >
      <h3 style={{textAlign: "center"}}>Your Order</h3>

      {order.length === 0 &&
        <div> Basket is empty</div>}
      {order.map(el =>
      (<div key={el.id} style={{
        'borderBottom':'solid black 1px'
      }}>
        <h4><b>{el.title}</b></h4>
        <h5>{el.count * el.price}</h5>
        <h5> qty: {el.count}</h5>
      </div>

      ))}
      <div style={{
        'background':'#80ff80',
        'marginTop':'5px'
      }}>
        <h5>Total: ${sum}</h5>
        <h5>Tips: ${tips}</h5>
        <h4>Check: ${payment}</h4>
      </div>

      <Button variant='contained' onClick={onClose}>Payment</Button>
    </aside >
  )
}
export default Basket

