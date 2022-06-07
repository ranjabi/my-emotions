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
    <li>
      <header>
        <h3>{title}</h3>
        <div>
          Score: {score} Total: {total}
        </div>
      </header>
      <div>
        <div>
          x <span>{quantity}</span>
        </div>
        <div>
          <button
            style={{ fontSize: "21px", padding: "0.2rem 1.2rem" }}
            onClick={addItemHandler}
          >
            +
          </button>
          <button
            style={{ fontSize: "21px", padding: "0.2rem 1.2rem" }}
            onClick={removeItemHandler}
          >
            -
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
