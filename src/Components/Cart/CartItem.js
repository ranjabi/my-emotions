import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, score, total, id } = props.item;

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, score }));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <header>
          <h3 className="pt-4">{title}</h3>
        </header>
        <div>
          <span>{quantity}</span> / 5
        </div>
      </div>
      <div>
        <button
          style={{
            fontSize: "18px",
            padding: "0.1rem 1rem",
            margin: "0 0.6rem",
          }}
          onClick={addItemHandler}
        >
          +
        </button>
        <button
          style={{ fontSize: "18px", padding: "0.1rem 1rem" }}
          onClick={removeItemHandler}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default CartItem;
