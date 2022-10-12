import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Home from './components/Home';
import { useState } from 'react'
import { Button } from '@mui/material';


function App() {
  const [count, setCount] = useState(2)

  return (
    <div>
      <button onClick={() => setCount((count) => count * count)}>
        count is {count}
      </button>

    </div>
    
    
    //<Home>
      
    //</Home>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     Hola
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
