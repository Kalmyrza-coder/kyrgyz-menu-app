import {useContext} from "react";
import {ConstApi} from "../context/context"


const Basket = () => {
  const {order, handleClose, total} = useContext(ConstApi)
  let sum = total
    .map((el) => el.price * el.count)
    .reduce((amount, item) => item + amount, 0)
    .toFixed(2);

  let tips = parseInt(sum * 0.3);
  let nums = Number(sum);
  let payment = (nums + tips).toFixed(2);

  return (
    <aside >
      <h3 className="text-order">Your Order</h3>

      {order.length === "" &&
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

      <button className="btn-basket" onClick={handleClose}>Payment</button>
    </aside >
  )
}
export default Basket

