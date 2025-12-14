
import {BrowserRouter,Routes,Route,Link,useNavigate, Outlet} from "react-router-dom";


{/* single page applications */}
function App() {
  return (
    <div className>
      {/* // navigation in react */}

      {/* using anchor tag but we see a loader everytime we switch between the routes*/}
          {/* <a href="/">HomePage</a>|
          <a href="/neet/online-coaching-class-11">Class 11 programs</a>|
          <a href="/neet/online-coaching-class-12">Class 12 programs</a>| */}

      <BrowserRouter>
        {/* navigation way 1 is using Link component -> always within browserrouter and no loader*/}
        {/* navigation way 2 is using useNavigate hook it redirects you toa specific page*/}

        {/* content */}
        <Routes>
          <Route path="/" element={<Layouts/>}>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/neet/online-coaching-class-11" element={<CLass11Program/>}></Route>
            <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}></Route>
            <Route path="*" element={<ErrorPage/>}></Route> 
          </Route>
        </Routes>
        <br />


      </BrowserRouter>  
      
    </div>
  );
}

function Layouts(){
  return <div>
    {/* header */}
        <div style={{display:'flex'}}>
          <div style={{border:'1px solid #ccc',borderRadius:'5px',margin:'10px',padding:'20px',boxShadow:'0px 4px 12px rgba(255,255,255,0.08)',backgroundColor:"black"}}><Link to="/">HomePage</Link></div>
          <div style={{border:'1px solid #ccc',borderRadius:'5px',margin:'10px',padding:'20px',boxShadow:'0px 4px 12px rgba(255,255,255,0.08)',backgroundColor:"black"}}><Link to="/neet/online-coaching-class-11">class 11 programs</Link></div>
          <div style={{border:'1px solid #ccc',borderRadius:'5px',margin:'10px',padding:'20px',boxShadow:'0px 4px 12px rgba(255,255,255,0.08)',backgroundColor:"black"}}><Link to="/neet/online-coaching-class-12">class 12 programs</Link></div>

        </div>

    {/* content */}
    <div>
      <Outlet/>
    </div>

     {/* footer */}
    Footer|content    
     
     

  </div>

}

function CLass11Program(){

  return <div>
    Welcome to class 11
  </div>
}

function Class12Program(){
  const navi=useNavigate();

  function redirect(){
    navi("/")
  }
  return <div>
    WElcome to class 12<br/>
    <button onClick={redirect}>backoff</button>
  </div>
}


function LandingPage(){
  return <div>
    WElcome to allen
  </div>
}

function ErrorPage(){
  return <div>
    There was an Error
    </div>
}

export default App;
