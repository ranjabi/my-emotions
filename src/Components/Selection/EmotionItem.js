import style from './EmotionItem.module.css';
import Card from './Card';

const EmotionItem = (props) => {
  return (
    <li className={style.item}>
      <Card>
        <header>
          <h3>{props.title}</h3>
          <div>{props.score}</div>
        </header>
        <p>{props.description}</p>
        <div>
          <button>Add</button>
        </div>
      </Card>
    </li>
  )
};

export default EmotionItem;