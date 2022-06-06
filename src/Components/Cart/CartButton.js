import style from './CartButton.module.css';
import { useDispatch } from 'react-redux';

import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    /* dispatch the returned toggleCart function from uiActions */
    dispatch(uiActions.toggleCart());
  }

  return (
    <button onClick={toggleCartHandler}>
      <span>My Cart </span>
      <span className={style.badge}>1</span>
    </button>
  )
};

export default CartButton;