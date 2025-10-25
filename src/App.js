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

  //component
  return (
    <div >
      <button id="btn" onClick={onClickHandler}>Count {count}</button>
    </div>
  );}
  
export default App;

