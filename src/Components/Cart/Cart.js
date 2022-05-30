import Modal from "../UI/Modal";

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
    <Modal>
      {cartItems}
      <div>
        <span>Total Level</span>
        <span>13</span>
      </div>
      <div>
        <button>Close</button>
        <button>Submit</button>
      </div>
    </Modal>
  );
};

export default Cart;
