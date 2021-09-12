import React from "react";
import Logo from './logo.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './header.css';
import IgLogo from './ig.png'
import FbLogo from './fb.png'


function Header () {
    return (
        <div className = 'Header-Container'>
            <img style = {{width: '210px', height: '100px'}} src = {Logo}></img>
            <h1 style = {{ marginTop: "2.5%", fontSize: "60px"}}>CATS IN THE SKY</h1>
            <div style = {{fontFamily: "Overpass", fontWeight: "400px", fontSize: "20px", color: "#FFFFFF", textDecoration: "none"}}>
                <Router>
                    <Link style = {{color: "#FFFFFF", textDecoration: "none"}} to = "/" onClick={() => window.location.reload()}>Home</Link>
                </Router>/
                <Router>
                    <Link style = {{color: "#FFFFFF", textDecoration: "none"}} to = "/booking" onClick={() => window.location.reload()}>Booking</Link>
                </Router>/
                <Router>
                    <Link style = {{color: "#FFFFFF", textDecoration: "none"}} to = "/adoption" onClick={() => window.location.reload()}>Adoption</Link>
                </Router>/
                <Router>
                    <Link style = {{color: "#FFFFFF", textDecoration: "none"}} to = "/" onClick={() => window.location.reload()}>Photo Album</Link>
                </Router>
            </div>
            <div className = "logos" style ={{marginRight: "3%"}}>
                <img src = {IgLogo}></img>
                <img src = {FbLogo}></img>
            </div>
        </div>
    );
}

export default Header;