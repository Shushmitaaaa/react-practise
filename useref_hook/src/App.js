import { useState , useRef} from "react";


function App() {

  // to remove extra rendering that we are doing by storing the value in timer(change in timer-> re rendering of componenet->extra) we will use useRef hook instead, extra rendering->low optimal performance
  // useRef is used to create a reference for dom elements/values
  const[value,setvalue]=useState(1);
  // const[timer,settimer]=useState(0)
  const timer=useRef(0);

  function startfunc(){
    let val=setInterval(function(){
      setvalue(value=>value+1)

    },1000);
    // settimer(val); this will trigger a re-render
    timer.current=val;//this will not trigger a re-render
  }

  function stopfunc(){
    clearInterval(timer.current)
  }

  return <div>
    {value}
    <br />
    <button onClick={startfunc}>Start</button>
    <button onClick={stopfunc}>Stop</button>
  </div>

}



export default App;
