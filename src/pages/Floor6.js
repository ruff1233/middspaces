import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Floor6(props) {

    let navigate = useNavigate();

    return (
    <div>
        3rd floor:
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {navigate('/')}}>Back</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/6M')}}>6 east</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/6G')}}>Greenhouse</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/6W')}}>6 west</Button>
        </Stack>
    </div>
  );
}
export default Floor6;
