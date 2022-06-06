import style from './CartButton.module.css';

const CartButton = (props) => {
  return (
    <button>
      <span>My Cart </span>
      <span className={style.badge}>1</span>
    </button>
  )
};

export default CartButton;