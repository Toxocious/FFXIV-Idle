import React from 'react';
import { Jobs } from './components/job';

import './App.css';

export default function App() {
  return (
    <div className='App'>
      <div className='background-image'></div>

      <div className='container'>
        <Jobs />
      </div>
    </div>
  );
}
