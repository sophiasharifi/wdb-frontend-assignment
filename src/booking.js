import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// Import kitty images
import Catnip from './catnip.png';
import Kitty from './kitty.png';
import Thirsty from './thirsty.png';
import Whisker from './whisker.png'

// Material UI Classes for styling components
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#FFFFFF",
      height: "100vh"
    },
    paper: {
      display: "flex",
      marginTop: '15%',
      height: 210,
      width: 500,
      background: "#FFFFFF",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.14)",
      borderRadius: "7px",
    },
    info:{
        height: 90,
        width: 500,
        background: "#F1EDDF",
        borderRadius: "3px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    control: {
        padding: theme.spacing(10)
    },
    button: {
      display: "flex",
      justifyContent: "center",
      width: 137,
      height: 51,
      background: "#EFDCB6",
      borderRadius: "30px",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.14)"
    }
  }));
  
// Returns Booking component
function Booking() {
    const [spacing, setSpacing] = React.useState(10);
    const classes = useStyles();
  
// Use Grid API from Material UI to set up 2x2 grid and referenced CSS styling classes

    return (
      <Grid container className={classes.root} spacing={10}>
        <Grid item xs={12}>
          <Grid container direction = "row" justifyContent="center"  spacing={spacing}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <img style={{width: "230px", height: "200px"}} src = {Catnip}></img>
                    </Paper>
                    <Paper className={classes.info}>
                        <h3 style ={{fontFamily: "Poppins"}}>Catnip (Standard Visit) </h3>
                        <Button href = "http://google.com" className={classes.button}>
                            <h3 style ={{fontFamily: "Poppins", fontWeight: "400", fontSize: "20px"}}>Book</h3>
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <img style={{width: "230px", height: "200px"}} src = {Whisker}></img>
                    </Paper>
                    <Paper className={classes.info}>
                        <h3 style ={{marginRight: "0%", fontFamily: "Poppins"}}>Whisker Wednesday </h3>
                        <Button href = "http://google.com" className={classes.button}>
                            <h3 style ={{fontFamily: "Poppins", fontWeight: "400", fontSize: "20px"}}>Book</h3>
                        </Button>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container direction = "row" justifyContent="center" spacing={spacing}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <img style={{width: "230px", height: "200px"}} src = {Thirsty}></img>
                    </Paper>
                    <Paper className={classes.info}>
                        <h3 style ={{fontFamily: "Poppins"}}>Thirsty Purrsdays </h3>
                        <Button href = "http://google.com" className={classes.button}>
                            <h3 style ={{fontFamily: "Poppins", fontWeight: "400", fontSize: "20px"}}>Book</h3>
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <img style={{width: "230px", height: "200px"}} src = {Kitty}></img>
                    </Paper>
                    <Paper className={classes.info}>
                        <h3 style ={{fontFamily: "Poppins"}}>Kitty Brunch </h3>
                        <Button href = "http://google.com" className={classes.button}>
                            <h3 style ={{fontFamily: "Poppins", fontWeight: "400", fontSize: "20px"}}>Book</h3>
                        </Button>
                    </Paper>
                </Grid>
            </Grid>

          </Grid>
        </Grid>
    );
  }

export default Booking;