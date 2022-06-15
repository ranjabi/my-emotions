import React from 'react';

import { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { addEmotion } from '../../features/trackerSlice'

const EmotionItem = () => {
  const tracker =  useSelector((state: RootState) => state.tracker)
  const dispatch = useDispatch()

  return (
    <li>
      <div className="flex justify-evenly m-8 border border-red-400">
        <h2>Senang</h2>
        <button className='border-2 border-gray-100' onClick={() => {dispatch(addEmotion())}}>Add</button>
      </div>
    </li>
  );
};

export default EmotionItem;