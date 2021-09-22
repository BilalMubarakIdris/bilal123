import React, { useState } from 'react';


function Navbar() {
    const [openBurger, setOpenBurger] = useState(false)

    // function to handle Burger click
    function handleBurger() {
        setOpenBurger(prevBurger => !prevBurger);
        if(openBurger){}
    }
    return (
        <div className="container">
            <div className="logo">Bm</div>
            <nav onClick={handleBurger} className={openBurger ? 'change' : undefined}>
                <div className="hamburger-menu">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
                <ul className="nav-list">
                    <li className="nav-items">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-items">
                        <a href="#about" className="nav-link">About Me</a>
                    </li>
                    <li className="nav-items">
                        <a href="#projects" className="nav-link">Projects</a>
                    </li>
                    <li className="nav-items">
                        <a href="#skills" className="nav-link">Skills</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;