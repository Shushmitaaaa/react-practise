
import './App.css';
import React from 'react';


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
    <ErrorBoundary>
      <Card>
        <FaultyComponent/>
        <h2>card 3</h2>
        <div>Where there is a will there is a way</div>
      </Card>
    </ErrorBoundary>
  </div>
  

  
}

function FaultyComponent() {
  throw new Error("Error inside Card 3!");
}
//generic card component
function Card({children}){
  return <div style={{border:'1px solid #ccc',borderRadius:"5px",margin:"10px",padding:"20px",width:"200px",boxShadow:'2px 2px 5px rgba(0,0,0,0.1'}}>
    {children}
  
    
  </div>
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}



export default App;
