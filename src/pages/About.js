import React from "react";
import Typography from '@mui/material/Typography';

function About(props) {

  return (
    <div>
    <Typography variant="body1" align="left" gutterBottom>
      MiddSpaces was created by Paul Ruffolo and Emma Doubman for their Computer Science Senior Seminor course at Middlebury College. At the college's Bicentennial Hall, there are a multitude
      of study areas located at the end of long hallways that are very often taken by students. We decided to create an application that students could use to reserve these highly sought-after
      study areas.
    </Typography>
      
    <Typography variant="body1" align="left" gutterBottom>
      In the future, we hope to add more features this application to make it as robust and useful as possible to Middlebury College students. One future improvement we would
      like to make would be to consult with the Middlebury College administration to get the application approved in order to give students who have reserved a spot the
      authority to ask students to leave their area by showing their confirmation email. We also hope to implement a system that can show which spots in Bicentennial Hall are currently
      occupied regardless of whether the spot is reserved or not. We hope to use motion sensors or weight sensors in the seat to detect a student's presence, thus giving users the ability
      to find a spot in real time without the use of a reservation system.
    </Typography>

    </div>
  );
}
export default About;