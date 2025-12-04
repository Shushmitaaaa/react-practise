import {useState} from 'react';

function ThemeToggle(){
    const [isDark,setIsDark]=useState(false);

    return (
        <div style={{
            backgroundColor:isDark? "black":"white",
            background:isDark?"white":"black",
            height:"100vh"
        }}>
            <button onClick={()=>setIsDark(!isDark)}>
                {isDark?"Switch to light":"Switch to dark"}
            </button>

        </div>

    );
}

export default ThemeToggle;