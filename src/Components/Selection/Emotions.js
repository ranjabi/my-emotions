import style from './Emotion.module.css';
import EmotionItem from './EmotionItem';

const Emotions = (props) => {
  return (
    <section className={style.emotions}>
      <h2>Choose Your Current Emotions..</h2>
      <ul>
        <EmotionItem 
          title='test'
          score={6}
          description='this is desc'
        />
      </ul>
    </section>
  )
};

export default Emotions;