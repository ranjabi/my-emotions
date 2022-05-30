import { Fragment } from "react";
import AvailableEmotions from "./AvailableEmotions";

const Emotions = () => {
  return (
    <Fragment>
      <p>Select your current emotion.</p>
      <AvailableEmotions />
    </Fragment>
  )
}

export default Emotions;
