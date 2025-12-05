import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Routine from './pages/Routine';
import Goals from './pages/Goals';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Routine />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </Router>
  );
}

export default App;
