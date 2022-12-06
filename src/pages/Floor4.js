import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FourthFloor from './assets/floor4.png';
import Typography from '@mui/material/Typography';

function Floor4(props) {

    let navigate = useNavigate();

    return (
    <div>
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {navigate('/')}}>Back</Button>
        </Stack>
        <Typography align="center" variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Fourth Floor
        </Typography>
        <img src={FourthFloor} alt="Bihall fourth floor map" style={{ width: '800px', }}/>
        <Stack spacing={10} direction="row" alignItems="center" justifyContent="center">
        <Button variant="contained" onClick={() => {navigate('/newres/4N')}}>Reserve 4 north</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/4E')}}>Reserve 4 east</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/4M')}}>Reserve 4 middle</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/4W')}}>Reserve 4 west</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/4S')}}>Reserve 4 south</Button>
        </Stack>
    </div>
  );
}
export default Floor4;
