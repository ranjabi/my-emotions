const CartItem = (props) => {
  const { title, quantity, score, total } = props.item;

  return (
    <li>
      <header>
        <h3>{title}</h3>
        <div>Score: {score} Total: {total}</div>
      </header>
      <div>
        <div>
          x <span>{quantity}</span>
        </div>
        <div>
          <button style={{fontSize: "21px", padding: "0.2rem 1.2rem"}}>+</button>
          <button style={{fontSize: "21px", padding: "0.2rem 1.2rem"}}>-</button>
        </div>
      </div>
    </li>
  )
};

export default CartItem;