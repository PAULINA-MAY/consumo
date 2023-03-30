import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cartas } from './components/Cartas';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Cartas/:id" element={<Cartas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;