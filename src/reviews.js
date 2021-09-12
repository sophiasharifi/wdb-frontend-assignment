import React, { useState } from "react";
import { data } from "./data.json";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  paper:{
    width: 700,
    height: 100,
    background: "#FFFFFF",
    boxShadow: "0px 5px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: '4px',
    display: "flex",
    alignItems: "center"
  },
  info:{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: 10 
   },
   expand:{
    background: "#FFFFFF"
   }
}));
        
export const Reviews = () => {
  return (
    <>
        {data.map((data, key) => {
          return (
            <div key={key}>
              <DisplayReviews
                key={key}
                postedBy={data.postedBy}
                createdAt={data.createdAt}
                title={data.title}
                body={data.body} 
              />
            </div>
          );
        })}
    </>
  );
};

const DisplayReviews = ({ postedBy, createdAt, title, body, key }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('panel_0')

  const handleChange = panel => (event, expanded) => {
    setExpanded(expanded ? panel : false)
  };
  
    return (
         <div className = {classes.root}>
             <Accordion elevation={0} square expanded={expanded === `panel_${key}`} onChange={handleChange(`panel_${key}`)}>
                 <AccordionSummary aria-controls={`panel_${key}d-content`} id={`panel_${key}d-header`}>
                 <Paper className = {classes.paper}>
                    <div className = {classes.info}>
                      <div>Posted by <strong>{postedBy}</strong></div>
                      {createdAt}
                      <h3 style = {{fontFamily: "Poppins", fontSize: '16px', fontWeight: '200'}}>{title}</h3>
                    </div>
                  </Paper>
                 </AccordionSummary>
                 <AccordionDetails className = {classes.expand}>
                     <Typography style = {{textAlign: "left",fontFamily: "Poppins", fontSize: '16px', fontWeight: '200'}}>
                         {body}
                     </Typography>
                  </AccordionDetails>
             </Accordion>
         </div>
  );
}


export default Reviews;
