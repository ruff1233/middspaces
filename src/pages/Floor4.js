import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Floor4(props) {

    let navigate = useNavigate();

    return (
    <div>
        4th floor:
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {navigate('/')}}>Back</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/4E')}}>4 east</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/4M')}}>4 middle</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/4N')}}>4 north</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/4S')}}>4 south </Button>
        <Button variant="contained" onClick={() => {navigate('/newres/4W')}}>4 west</Button>
        </Stack>
    </div>
  );
}
export default Floor4;
