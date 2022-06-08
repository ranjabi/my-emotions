import style from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    /* dispatch the returned toggleCart function from uiActions */
    dispatch(uiActions.toggleCart());
  }

  return (
    <button onClick={toggleCartHandler}>
      <span>My Cart </span>
      <span className={style.badge}>{cartQuantity}</span>
    </button>
  )
};

export default CartButton;