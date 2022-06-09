import { Fragment, useState, useEffect } from "react";
import Card from "../Emotions/Card";

const dummy_item = new Array(31).fill(0);

const getColor = (emoItem) => {
  if (emoItem.title === "Confused") {
    return "bg-lime-400";
  } else if (emoItem.title === "Sad") {
    return "bg-orange-400";
  } else if (emoItem.title === "Tired") {
    return "bg-indigo-400";
  } else if (emoItem.title === "Happy") {
    return "bg-yellow-400";
  } else if (emoItem.title === "Angry") {
    return "bg-red-400";
  } else {
    return "bg-slate-400";
  }
}

function getColor2(date, data) {
  for (let item of data) {
      if (date === item["date"]) {
          return getColor(item);
      }
  }
}

function isIn(param, data) {
  for (let item of data) {
      // console.log(item["data"])
      if (item["date"] === param) {
          return true;
      }
  }
  return false;
}

const Tracker = (props) => {
  const [tracker, setTracker] = useState([]);

  useEffect(() => {
    setTracker(JSON.parse(localStorage.getItem("cartItems")));
    console.log(tracker);
  }, [])

  return (
    <Fragment>
      <Card className="w-80 ">
        <h1 className="text-2xl text-center">June</h1>
        <div className="grid grid-cols-7 gap-2 pl-2 pt-4 pb-2">
          { [...Array(31)].map((val, index) => <div className={`bg-slate-400 h-6 w-6 ${isIn(index, tracker) && getColor2(index, tracker)}`}></div>)}
          {/* {dummy_item.map((item, index) => (
            <div className={`bg-slate-400 h-6 w-6 ${index === item.date && getColor(item)}`}></div>
          ))} */}
        </div>
      </Card>
    </Fragment>
  );
};

export default Tracker;
