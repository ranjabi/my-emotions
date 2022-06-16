import React from 'react';
import EmotionItem from './EmotionItem';

const dummy_emotions = [
  {
    id: "emo1",
    name: "Happy",
  },
  {
    id: "emo2",
    name: "Productive",
  },
  {
    id: "emo3",
    name: "Nervous",
  },
  {
    id: "emo4",
    name: "Tired",
  },
  {
    id: "emo5",
    name: "Angry",
  },
  {
    id: "emo6",
    name: "Sad",
  },
  {
    id: "emo7",
    name: "Sick",
  },
];

const Emotions = () => {
  return (
    <section className="container w-8/12 lg:w-6/12 2xl:w-4/12 mx-auto flex flex-col py-16 border bg-white rounded-xl">
      <h1 className='self-center mb-8 text-2xl'>What are you feeling the most right now?</h1>
      <ul>
        {dummy_emotions.map((emotion, index) => 
          <EmotionItem key={index} emo={emotion.name} />
        )}
      </ul>
    </section>
  );
};

export default Emotions;