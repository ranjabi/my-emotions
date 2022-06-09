import { Fragment } from "react";
import Card from "../Emotions/Card";

const dummy_item = [...Array(31)].map((u, i) => i);

const Tracker = (props) => {
  return (
    <Fragment>
      <Card className="w-80 ">
        <h1 className="text-2xl text-center">June</h1>
        <div className="grid grid-cols-7 gap-2 pl-2 pt-4 pb-2">
          {dummy_item.map((item) => (
            <div className="bg-slate-400 h-6 w-6"></div>
          ))}
        </div>
      </Card>
    </Fragment>
  );
};

export default Tracker;
