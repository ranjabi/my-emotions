import { useState, useEffect } from 'react';

let dummy_item = new Array(31).fill(0);

const getColor = (emoItem: any) => {
  if (emoItem.title === 'Confused') {
    return 'bg-lime-400';
  } else if (emoItem.title === 'Sad') {
    return 'bg-orange-400';
  } else if (emoItem.title === 'Tired') {
    return 'bg-indigo-400';
  } else if (emoItem.title === 'Happy') {
    return 'bg-yellow-400';
  } else if (emoItem.title === 'Angry') {
    return 'bg-red-400';
  } else {
    return 'bg-slate-400';
  }
};

function getColor2(date: any, data: any) {
  for (let item of data) {
    if (date === item['date']) {
      return getColor(item);
    }
  }
}

function isIn(param: any, data: any) {
  for (let item of data) {
    // console.log(item["data"])
    if (item['date'] === param) {
      return true;
    }
  }
  return false;
}

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Tracker = (props: any) => {
  const [tracker, setTracker] = useState([]);

  const cartItems: any = JSON.parse(localStorage.getItem('cartItems') || '{}');

  const currentMonth: String = month[new Date().getMonth()];

  useEffect(() => {
    setTracker(cartItems);
    console.log(tracker);
  }, []);

  return (
    <section className='container mx-auto p-8 pb-16 border border-red-400'>
      <h1 className="text-2xl text-center">{currentMonth}</h1>
      <div className="flex justify-around mt-8">
        <p>S</p>
        <p>M</p>
        <p>T</p>
        <p>W</p>
        <p>T</p>
        <p>F</p>
        <p>S</p>
      </div>
      <div className="grid grid-cols-7 gap-2 pl-2 pt-4 pb-2">
        {[...Array(31)].map((val, index) => (
          <div key={index} className={`mx-auto bg-slate-400 h-6 w-6`}></div>
        ))}
        {/* {[...Array(31)].map((val, index) => (
          <div
            className={`bg-slate-400 h-6 w-6 ${
              isIn(index, tracker) ? getColor2(index, tracker) : ''
            }`}
          ></div>
        ))} */}
        {/* {dummy_item.map((item, index) => (
            <div className={`bg-slate-400 h-6 w-6 ${index === item.date && getColor(item)}`}></div>
          ))} */}
      </div>
    </section>
  );
};

export default Tracker;
