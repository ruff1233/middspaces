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
        <Button variant="contained" onClick={() => {navigate('/3m')}}>3 middle</Button>
        <Button variant="contained" onClick={() => {navigate('/3n')}}>3 north</Button>
        <Button variant="contained" onClick={() => {navigate('/3s')}}>3 south </Button>
        <Button variant="contained" onClick={() => {navigate('/3w')}}>3 west</Button>
        </Stack>
    </div>
  );
}
export default Floor3;
