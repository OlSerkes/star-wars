import './App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../header/Header';
import People from '../people/People';
import Planets from '../planets/Planets';
import Starships from '../starships/Starships';

function App() {
  return (
    <div className='wrapper'>
      <h1 className='font-face-gm'>STAR WARS</h1>
      <Header />
      <Routes>
        <Route path='/people' element={<People />} />
        <Route path='/planets' element={<Planets />} />
        <Route path='/starships' element={<Starships />} />
        <Route path='*' element={<Navigate to='/people' replace />} />
      </Routes>
    </div>
  );
}

export default App;
