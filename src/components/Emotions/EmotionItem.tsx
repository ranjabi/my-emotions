import React from 'react';

import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { addEmotion } from '../../features/trackerSlice';

const EmotionItem = (props: any) => {
  const tracker = useSelector((state: RootState) => state.tracker);
  const dispatch = useDispatch();

  const emo = props.emo;

  return (
    <li>
      <div className="flex mx-auto w-6/12 items-center justify-evenly my-3">
        <h2 className="w-3/12 text-center text-lg">{emo}</h2>
        <button
          className="border-2 border-gray-100"
          onClick={() => {
            dispatch(
              addEmotion({ date: new Date().toJSON().slice(0, 10), emo: emo })
            );
          }}
        >
          Add
        </button>
      </div>
      <div className="w-4/12 mx-auto border-t border-slate-200"></div>
    </li>
  );
};

export default EmotionItem;
