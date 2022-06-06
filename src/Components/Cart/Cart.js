import Card from "../Selection/Card"
import CartItem from "./CartItem"

const Cart = (props) => {
  return (
    <Card>
      <h2>Emotions Cart</h2>
      <ul>
        <CartItem
          item= { { title: "test", quantity: 1, score: 6, total: 6 } }
        />
      </ul>
    </Card>
  )
};

export default Cart;