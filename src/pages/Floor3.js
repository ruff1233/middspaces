import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Floor3(props) {

    let navigate = useNavigate();

    return (
    <div>
        3rd floor:
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {navigate('/')}}>Back</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/3M')}}>3 middle</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/3N')}}>3 north</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/3S')}}>3 south </Button>
        <Button variant="contained" onClick={() => {navigate('/newres/3W')}}>3 west</Button>
        </Stack>
    </div>
  );
}
export default Floor3;
