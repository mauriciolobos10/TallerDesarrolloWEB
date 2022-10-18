
import './App.css';
import React, { Component }  from 'react';
import Home from './components/Home';
import Poke from './components/Poke';
import { useState } from 'react'



function App() {
  const [count, setCount] = useState(2)
  const [hookito, setHookito] = useState("holaa")

  return (
    <Home> </Home>
    //<Home dato={hookito}/>

    // <div>
    //   <button onClick={() => setCount((count) => count * count)}>
    //     count is {count}
    //   </button>

    // </div>
    
    
  );
}

export default App;
