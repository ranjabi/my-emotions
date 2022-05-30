const EmotionItem = (props) => {
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{props.score}</div>
      </div>
    </li>
  );
};

export default EmotionItem;
