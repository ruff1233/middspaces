import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CreateRes from "../CreateRes.js";

function Home(props) {

    let navigate = useNavigate();

    return (
    <div>
        Welcome to MiddSpaces!
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {navigate('/space')}}>Example Space</Button>
        <Button variant="contained" onClick={() => {navigate('/newreservation')}}>Example New Reservation</Button>
        <CreateRes/>
        </Stack>
    </div>
    );
}
export default Home;