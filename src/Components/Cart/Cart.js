import { useSelector } from "react-redux";
import Card from "../Selection/Card";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  return (
    <Card>
      <h2 style={{ color: "rgb(87, 119, 82)"}}>Emotions Cart</h2>
      <ul style={{padding: "0 1rem"}}>
        {cartItems.map((item) => (
          <CartItem
            item={{
              key: item.id,
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              score: item.score,
              total: item.totalScore,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
