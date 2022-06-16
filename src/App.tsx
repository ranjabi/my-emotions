import React from 'react';
import Emotions from './components/Emotions/Emotions';
import Tracker from './components/Tracker';

function App() {
  return (
    <div className="bg-slate-100 py-24">
      <Tracker />
      <Emotions />
    </div>
  );
}

export default App;
