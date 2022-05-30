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
  {
    id: "emo4",
    name: "Happy",
    description: "I am happy",
    score: 10,
  },
  {
    id: "emo5",
    name: "Angry",
    description: "I am angry",
    score: 1,
  },
  {
    id: "emo6",
    name: "Energized",
    description: "I am energized",
    score: 8,
  },
];

const AvailableEmotions = () => {
  const emotionsList = dummy_emotions.map((emotion) => <li>{emotion.name}</li>);

  return (
    <section>
      <ul>{emotionsList}</ul>
    </section>
  );
};

export default AvailableEmotions;
