import { useState } from 'react';
import './App.css';

function App() {
  //state creation
  const[counter,setcounter]=useState(0)
  function increment(){
    setcounter(counter+1)
  }
  function decrement(){
    if(counter!=0){
      setcounter(counter-1)
    }
  }
  function reset(){
    setcounter(0)
  }
  return (
    <div
    style={{display: 'flex',
  flexDirection: 'column',
alignItems:'center',
justifyContent:'center',
border:'2px solid grey',
margin:'20px',
padding:'200px',
}}
    className="App">
      <header className="App-header">
        <h2 style={{textAlign:'center',}}>Counter App</h2>
        <h1 style={{textAlign:'center',}}>{counter}</h1>
        <button 
        style={{
          backgroundColor:'red',
          padding:'10px',
          borderRadius:'20px',
         margin:'10px',
        }}
        onClick={increment}>increment</button>
        <button
          style={{
            backgroundColor:'green',
            padding:'10px',
            borderRadius:'20px',
           margin:'10px',
          }}
        onClick={decrement}>decrement</button>
        <button
          style={{
            backgroundColor:'yellow',
            padding:'10px',
            borderRadius:'20px',
           margin:'10px',
          }}
        onClick={reset}>reset</button>
      </header>
    </div>
  );
}

export default App;
