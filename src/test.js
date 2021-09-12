import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Reviews from './reviews.js';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '90%',
      height: '100%',
      background: "#F1EDDF",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
    description: {
        textAlign: "left", 
        fontFamily: "Poppins", 
        fontWeight: "400",
        fontSize: "20px", 
        color: "#000000",
        marginLeft: '5%',
    },
    reviews:{
        background: "#FFFFFF"
    } 
  }));

function About(){
    const classes = useStyles();
    return(
        <div className = {classes.root}>
            <div className= "About">
                <h1 style={{textAlign: "left", fontFamily: "Poppins", fontSize: "48px", marginTop: '15%', marginLeft: '5%', color: "#000000"}}>How to adopt a cat</h1>
                <h3 className = {classes.description}>Cats in the Sky is home for up to 20 cats. Our staff cares for the kitties day and night, and they stay with us until they find  their Forever Homes.  Since we opened in 2016, we have found homes for hundreds of cats. </h3>
                <h3 className = {classes.description}>All of our cats are adoptable and most were pulled from the Animal Care & Control's "at-risk" list by our partner, Anjellicle Cats Rescue.</h3>
                <h3 className = {classes.description}>If you’re interested in adopting a cat, please email us or talk to our staff during your visit and we will help you through the process.</h3>
            </div>
            <div className = {classes.reviews}>
                <h1 style={{fontFamily: "Poppins", fontSize: "48px", marginTop: '15%', marginLeft: '20%', color: "#000000"}}>Reviews</h1>
            <Reviews/>
            </div>       
        </div>
        
    );
}

export default About

