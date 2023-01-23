import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Garage } from './pages/Garage/Garage';
import { Winners } from './pages/Winners/Winners';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Garage />} />
        <Route path="/winners" element={<Winners />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
