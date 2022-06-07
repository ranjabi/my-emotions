import style from "./Emotion.module.css";
import EmotionItem from "./EmotionItem";

const dummy_emotions = [
  {
    id: "emo1",
    name: "Confusion",
    description: "I am confused",
    score: 5,
  },
  {
    id: "emo2",
    name: "Sad",
    description: "I am sad",
    score: 2,
  },
  {
    id: "emo3",
    name: "Strong",
    description: "I am strong",
    score: 6,
  },
  // {
  //   id: "emo4",
  //   name: "Happy",
  //   description: "I am happy",
  //   score: 10,
  // },
  // {
  //   id: "emo5",
  //   name: "Angry",
  //   description: "I am angry",
  //   score: 1,
  // },
  // {
  //   id: "emo6",
  //   name: "Energized",
  //   description: "I am energized",
  //   score: 8,
  // },
];

const Emotions = (props) => {
  return (
    <section className={style.emotions}>
      <h2>Choose Your Current Emotions..</h2>
      <ul>
        {dummy_emotions.map((emotion) => (
          <EmotionItem
            key={emotion.id}
            id={emotion.id}
            title={emotion.name}
            score={emotion.score}
            description={emotion.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Emotions;
