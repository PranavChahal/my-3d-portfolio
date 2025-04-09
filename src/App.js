import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main 3D artwork portfolio */}
        <Route path="/" element={<Home />} />
        {/* About me page accessed via /me */}
        <Route path="/me" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
