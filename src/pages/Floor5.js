import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Floor5(props) {

    let navigate = useNavigate();

    return (
    <div>
        3rd floor:
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {navigate('/')}}>Back</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/5E')}}>5 east</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/5M')}}>5 middle</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/5N')}}>5 north</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/5S')}}>5 south </Button>
        <Button variant="contained" onClick={() => {navigate('/newres/5W')}}>5 west</Button>
        </Stack>
    </div>
  );
}
export default Floor5;
