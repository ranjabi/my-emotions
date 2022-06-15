import React from 'react';
import EmotionItem from './EmotionItem';

const dummy_emotions = [
  {
    id: "emo1",
    name: "Confused",
  },
  {
    id: "emo2",
    name: "Sad",
  },
  {
    id: "emo3",
    name: "Tired",
  },
  {
    id: "emo4",
    name: "Happy",
  },
  {
    id: "emo5",
    name: "Angry",
  },
];

const Emotions = () => {
  return (
    <section className="container mx-auto flex flex-col border border-red-400">
      <h1 className='self-center mb-8 text-2xl'>What are you feeling right now?</h1>
      <ul>
        {dummy_emotions.map((emotion, index) => 
          <EmotionItem key={index} />
        )}
      </ul>
    </section>
  );
};

export default Emotions;