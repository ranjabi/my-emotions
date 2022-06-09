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
      })
    );
  };

  return (
    <li className={style.item}>
      <Card className={style.emotionItem}>
        <div>
          <header>
            <h3>{title}</h3>
          </header>
        </div>
        <div>
          <button onClick={addToCartHandler}>Add</button>
        </div>
      </Card>
    </li>
  );
};

export default EmotionItem;
