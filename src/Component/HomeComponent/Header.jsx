import React from 'react';
import "../HomeComponentCSS/Header.css"
const Header = () => {
    return (
        <div className= "header"  >
            <div className= "container" >
                <h1 className= "h1" >What is your startup <br/>
                    worth?</h1>
                <p className= "p" >
                    Seamless valuation services from Starters' CFO
                </p>
                <ul className= "datalist" >
                    <li  >Valuation for regulatory purposes</li>
                    <li>Valuation for investment pitches</li>
                    <li>Clear & detailed valuation reports for negotiations</li>
                    <li>Trusted by 1000+ happy customers</li>
                </ul>
                <div className= "btns">
                    <button className= "btn btn1" >Get Started</button>
                    <button className= "btn btn2" >Instant meeting </button>
                </div>
            </div>
        </div>
    );
};

export default Header;