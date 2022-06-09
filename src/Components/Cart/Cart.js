import { useSelector} from "react-redux";
import Card from "../Emotions/Card";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [cart, setCart] = useState([]);

  const cartHandler = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  return (
    <Card className="w-96 pt-4 pb-16">
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
      { cartItems.length > 0 && <button onClick={cartHandler} className="float-right py-1 px-3 mr-4 mt-1">Submit</button>}
    </Card>
  );
};

export default Cart;

/* 
cart state data structure
bikin 31 object, objek ke n di hari ke n isi valuenya
[
  {
    id: "emo1",
    date: 9,
    score: 1-5,
  }
]
*/