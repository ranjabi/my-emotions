import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

/*
 * Used on App.js
 * Passed onCLose props from App.js to close the cart modal
 * Passing onClose to Modal.js so the close button can do the same
 */

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[
        {
          id: "c1",
          name: "Strong",
          level: 3,
          score: 6,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div>
        <span>Total Level</span>
        <span>13</span>
      </div>
      <div>
        <button onClick={props.onClose}>Close</button>
        <button>Submit</button>
      </div>
    </Modal>
  );
};

export default Cart;
