import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import './App.css';
import LandingPage from './js/landing';
import Navbar from './js/navbar';


function App() {


  return (
    <Router>
      <Routes>
      
       

       <Route path="/" element={<LandingPage />} />
        <Route path="/navbar" element={<Navbar/>} /> 
       
      </Routes>
    </Router>
  );
}

export default App;
