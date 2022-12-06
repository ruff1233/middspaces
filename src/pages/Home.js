import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Home(props) {

    let navigate = useNavigate();

    return (
    <div>
        <Typography align="center" variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Welcome to MiddSpaces!
        </Typography>
        <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pick the floor you want to reserve a space on:
        </Typography>
        <Stack spacing={4} direction="column" alignItems="center" justifyContent="center">
        {/* <Button variant="contained" onClick={() => {navigate('/space')}}>Example Space</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/testSpace')}}>Example New Reservation</Button> 
        <Button variant="contained" onClick={() => {navigate('/editres/testRes2')}}>Example Edit Reservation</Button>
        <Button variant="contained" onClick={() => {navigate('/editres/testRes2')}}>Edit Reservation</Button>*/}
        <Button variant="contained" onClick={() => {navigate('/floor3')}}>Floor 3</Button>
        <Button variant="contained" onClick={() => {navigate('/floor4')}}>Floor 4</Button>
        <Button variant="contained" onClick={() => {navigate('/floor5')}}>Floor 5</Button>
        <Button variant="contained" onClick={() => {navigate('/floor6')}}>Floor 6</Button>
        </Stack>
    </div>
    );
}
export default Home;
