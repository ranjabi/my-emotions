import { useState, useEffect } from 'react';
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';

let dummy_item = new Array(31).fill(0);

const getColor = (emoItem: any) => {
  if (emoItem.emo === 'Happy') {
    return 'bg-yellow-400';
  } else if (emoItem.emo === 'Productive') {
    return 'bg-orange-400';
  } else if (emoItem.emo === 'Nervous') {
    return 'bg-purple-400';
  } else if (emoItem.emo === 'Tired') {
    return 'bg-amber-900';
  } else if (emoItem.emo === 'Angry') {
    return 'bg-red-400';
  } else if (emoItem.emo === 'Sad') {
    return 'bg-blue-400';
  } else if (emoItem.emo === 'Sick') {
    return 'bg-green-400';
  }
};

function getColor2(date: any, data: any) {
  for (let item of data) {
    if (Number(item['date'].slice(8, 10)) === date+1) {
      // console.log(date + getColor(item))
      return getColor(item);
    }
  }
}

function isIn(date: any, data: any) {
  for (let item of data) {
    // console.log(item["data"])
    if (Number(item['date'].slice(8, 10)) === date+1) {
      return true;
    }
  }
  return false;
}

function isToday(index: any, data: any) {
  const today = new Date().toJSON().slice(8, 10)
    if (index+1 === Number(today)) {
      return true 
    }
  return false
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

  
  const trackerItems: any = useSelector((state: RootState) => state.tracker);

  // const trackerItems: any = JSON.parse(localStorage.getItem('trackerItems') || '[]');

  const currentMonth: String = month[new Date().getMonth()];

  return (
    <section className='container w-8/12 lg:w-6/12 2xl:w-4/12 mx-auto px-8 py-8 pb-16 bg-white rounded-lg mb-12'>
      <h1 className="text-2xl text-center">{currentMonth}</h1>
      <div className="flex justify-evenly gap-10 mt-8 text-2xl font-bold mb-2">
        <p>S</p>
        <p>M</p>
        <p>T</p>
        <p>W</p>
        <p>T</p>
        <p>F</p>
        <p>S</p>
      </div>
      <div className="grid grid-cols-7 gap-4 pt-4 pb-2">
        {[...Array(31)].map((val, index) => (
          <div key={index}
            className={`h-8 w-8 rounded-sm mx-auto ${
              isIn(index, trackerItems) ? getColor2(index, trackerItems) : 'bg-slate-300 '
            } ${isToday(index, trackerItems) ? 'h-10 w-10 border-4 border-gray-800' : ''}`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Tracker;
