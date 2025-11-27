import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const[count,setCount]=useState(0);
  const[count1,setCount1]=useState(0);

  function increaseCount(){
    setCount(count=>count+1)

  }

  function decreaseCount(){
    setCount1(count1=>count1-1);
  }
  return (
    <div><Counter count={count} count1={count1}></Counter>
    <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  );
}
//just like how we pass arguents in functions we pass props for componenets
//passing the state variables(count,count1) as props to the Counter component
function Counter(props){

  //using the useEffect hook with state variable
  useEffect(function(){
    //only when the statevariable count changes the below line executes
    console.log("ony when count changes")

    //cleanup logic
    return function(){
      console.log("cleareed original value")
    }
  },[props.count])

  return <div>
    <h1>Counter {props.count}</h1><br/>
    <h1>Counter1 {props.count1}</h1>
  </div>
}

export default App;
