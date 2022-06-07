import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import style from "./EmotionItem.module.css";
import Card from "./Card";

const EmotionItem = (props) => {
  const dispatch = useDispatch();

  const { title, score, description, id } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        score,
        title,
      }));
    
  };

  return (
    <li className={style.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div>{score}</div>
        </header>
        <p>{description}</p>
        <div>
          <button onClick={addToCartHandler}>Add</button>
        </div>
      </Card>
    </li>
  );
};

export default EmotionItem;
