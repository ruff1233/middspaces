import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FifthFloor from './assets/floor5.png';
import Typography from '@mui/material/Typography';

function Floor5(props) {

    let navigate = useNavigate();

    return (
    <div>
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {navigate('/')}}>Back</Button>
        </Stack>
        <Typography align="center" variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Fifth Floor
        </Typography>
        <img src={FifthFloor} alt="Bihall fifth floor map" style={{ width: '800px', }}/>
        <Stack spacing={10} direction="row" alignItems="center" justifyContent="center">
        <Button variant="contained" onClick={() => {navigate('/newres/5N')}}>Reserve 5 north</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/5E')}}>Reserve 5 east</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/5M')}}>Reserve 5 middle</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/5W')}}>Reserve 5 west</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/5S')}}>Reserve 5 south</Button>
        </Stack>
    </div>
  );
}
export default Floor5;
