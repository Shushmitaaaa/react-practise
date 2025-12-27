import {useState} from 'react';


function ThemeToggle(){

    const [isDark,setbackground]=useState(false)



    function changebackground(){
            setbackground(!isDark)
        }
    

    return (
        <div style={{
        backgroundColor: isDark? "black":"white",
        color:isDark?"white":"black",
        height:"100vh"
        }}>

    
        

        <button onClick={changebackground}>{isDark?"Switch to white":"Switch to dark"}</button>

        </div>
    )

}

export default ThemeToggle;