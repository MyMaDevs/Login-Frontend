import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Main from './components/Main.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component ={Login} />
        <Route path="/" Component ={Main} />
      </Routes>
    </Router>
  );
}

export default App;