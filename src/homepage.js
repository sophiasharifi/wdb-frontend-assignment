import React from "react";
import './homepage.css';


function HomePage () {
    return (
        <div>
            <div style = {{marginTop: "10%", textAlign: "left", marginLeft: "5%"}} className = "HomePage-Text">
                <h1 style = {{fontFamily: "Poppins"}}>Cats in the Sky</h1>
                <h3 style = {{fontFamily: "Poppins", fontSize: "36px", color: "#FFFFFF", marginTop: '-3%'}}>The only cat home in an airplane</h3>
            </div>
        </div>
    );
}
  
export default HomePage;


