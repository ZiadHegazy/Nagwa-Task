import React from 'react';
import './App.css';
import {Route , Routes} from "react-router-dom"
import { Home } from 'Components/Home';
import { Question } from 'Components/Question';
import { Rank } from 'Components/Rank';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/question" element={<Question/>}></Route>
      <Route path="/rank" element={<Rank/>}></Route>

    </Routes>
  );
}

export default App;
