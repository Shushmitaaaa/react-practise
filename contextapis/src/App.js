import { useState,createContext, useContext } from "react";


 //step:1 create context,make sure it is always outside of the component
  const bulbcontext=createContext()

function App() {
  //using context api you can share children among components without any prop drilling
  const [bulb,setbulb]=useState(true);

 return <div>
  {/*step 2 use provider for providing the value to be passed to all children */}
  <bulbcontext.Provider value={{
    bulb:bulb,
    setbulb:setbulb
  }}>
    <LightBulb></LightBulb>
  </bulbcontext.Provider>
 </div>
}


function LightBulb(){
  return <div>
    <BulbOn  />
    <BulbToggle/>

  </div>
}

//child components of lightbulb
function BulbOn(){
  //step 3: consume the context
  const {bulb}=useContext(bulbcontext)
  //const [bulb,setbulb]=useState(true); since this is required by other child component we will roll it up to the lcs(here lightbulb) and pass it as props to both the children
  return <div>
    {bulb? "Bulb on":"bulb off"}

  </div>
}

//child components of lightbulb
function BulbToggle(){
  const{bulb,setbulb}=useContext(bulbcontext)
  function tog(){
  setbulb(!bulb)
}
  return <div>
    <button onClick={tog}>Toggle</button>
  </div>


}

export default App;
