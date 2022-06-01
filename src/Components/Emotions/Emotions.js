import { Fragment } from "react";
import AvailableEmotions from "./AvailableEmotions";
import classes from "./Emotions.module.css";

const Emotions = () => {
  return (
    <div className={classes.emotions}>
      <p>Select your current emotion.</p>
      <AvailableEmotions />
    </div>
  )
}

export default Emotions;
