import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

function NewReservation(props) {
    let navigate = useNavigate();

    return (
    <div>
        Example Reservation Page!
        <Button variant="contained" onClick={() => {navigate('/')}}>Home</Button>
    </div>
    );
}
export default NewReservation;