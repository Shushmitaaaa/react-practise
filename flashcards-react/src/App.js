
import './App.css';
import {  useEffect, useState } from 'react';
// import { PostComponent } from './Post.jsx';


function App() {

  const [reactdef,setreactdef]=useState(false);
  const[jsxdef,setjsxdef]=useState(false);
  const[compdef,setcompdef]=useState(false);
  const[propdef,setpropdef]=useState(false);
  const[hookdef,sethookdef]=useState(false);


  function def1(){
    setreactdef(!reactdef)
  }

  function def2(){
    setjsxdef(!jsxdef)
  }

  function def3(){
    setcompdef(!compdef)
  }

  function def4(){
    setpropdef(!propdef)
  }

  function def5(){
    sethookdef(!hookdef)
  }



  return <div>
    <div style={{marginTop:"150px",fontSize:"50px",marginLeft:"500px"}}><h2>BASIC FAQS</h2></div>
    <div style={{marginTop:"10px",display:'flex'}}>
    
    <Card>
      <h2 style={{color:"white"}}>What is react?</h2>
      <div style={{color:"yellow", fontWeight:"bold"}}>{reactdef && "A UI library for building interface"}</div><br/>
      <button onClick={def1}>click me</button>
    </Card>

    <Card>
      <h2 style={{color:"white"}}>What is JSX?</h2>
      <div style={{color:"yellow", fontWeight:"bold"}}>{jsxdef && "Javascript + XML syntax used in React"}</div><br />
      <button onClick={def2}>click me</button>
    </Card>

    <Card>
      <h2 style={{color:"white"}}>What is a component?</h2>
      <div style={{color:"yellow",fontWeight:"bold"}}>{compdef && "A component is a reusable piece of UI like a button, card, or navbar."}
</div><br />
      <button onClick={def3}>click me</button>
    </Card>

    <Card>
      <h2 style={{color:"white"}}>What is a prop?</h2>
      <div style={{color:"yellow",fontWeight:"bold"}}>{propdef && "Props are like function arguments they help pass data to components."}
</div><br />
      <button onClick={def4}>click me</button>
    </Card>

    <Card>
      <h2 style={{color:"white"}}>What is a hook?</h2>
      <div style={{color:"yellow",fontWeight:"bold"}}>{hookdef && "Hooks let you use features like state and lifecycle."}
</div><br />
      <button onClick={def5}>click me</button>
    </Card>

  </div>
  </div>
  
  
  
}


function Card({children}){
  return <div style={{
    border:'1px solid #ccc',
    borderRadius:'5px',
    margin:'10px',
    padding:'20px',
    boxShadow:'0px 4px 12px rgba(255,255,255,0.08)',
    backgroundColor:"black"
  }}>
    {children}
  </div>

}




export default App;
