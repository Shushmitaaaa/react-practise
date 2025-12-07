
import './App.css';

function App() {
  return <div style={{display:"flex"}}>
    <Card>
      <h2>card 1</h2>
      <div style={{color:"black"}}>This is some content incide the card</div>
    </Card>
    <Card>
      <h2>card 2</h2>
      <div style={{color:"black"}}>This card has different content</div>
    </Card>
    <Card>
      <h2>card 3</h2>
      <div>Where there is a will there is a way</div>
    </Card>
  </div>
  

  
}
//generic card component
function Card({children}){
  return <div style={{border:'1px solid #ccc',borderRadius:"5px",margin:"10px",padding:"20px",width:"200px",boxShadow:'2px 2px 5px rgba(0,0,0,0.1'}}>
    {children}
    
  </div>
}

export default App;
