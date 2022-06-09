import style from "./Emotions.module.css";
import EmotionItem from "./EmotionItem";

const dummy_emotions = [
  {
    id: "emo1",
    name: "Confused",
    score: 5,
  },
  {
    id: "emo2",
    name: "Sad",
    score: 2,
  },
  {
    id: "emo3",
    name: "Tired",
    score: 6,
  },
  {
    id: "emo4",
    name: "Happy",
    score: 10,
  },
  {
    id: "emo5",
    name: "Angry",
    score: 1,
  },
];

const Emotions = (props) => {
  return (
    <section className={style.emotions}>
      <h2 style={{ color: "rgb(228, 220, 185)", marginBottom: "1rem" }}>What are you feeling right now?</h2>
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
