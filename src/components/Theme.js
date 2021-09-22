import React, {useState, useEffect} from 'react';
import { FaSun } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'

function Theme() {
    const [theme, setTheme] = useState("block")
    // const [bodyBg, setBodyBg] = useState(false)
    function toggleTheme() {
        if (theme === "block") {
            setTheme("none")
        } else {
            setTheme("block")
        }

        console.log(theme)
    }

        useEffect(() => {
            document.body.classList.toggle('active');
        },[theme])
    

    return (       
    <div className="switch-container">
        {theme === "none" ?
            <FaMoon className=""  onClick={toggleTheme}/>
            :
            <FaSun className="sun" onClick={toggleTheme}/>
        }
    </div>
    )
}


export default Theme;