import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  //initialize state, usestate return you 2 val in array,destructuring  
  const[count,setCount]=useState(0)// whenever we use the word use matlab it is a hook

  //function
  function onClickHandler(){
    setCount(count+1)
  }
  function decreaseCount(){
    setCount(count-1)
  }
  function resetCount(){
    setCount(0)
  }

  //component
  return (
    <div >
      <h1>{count}</h1>
      <button id="btn" onClick={onClickHandler}>Increase Count </button>
      <button  onClick={decreaseCount}>Decrease Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );}
  
export default App;

