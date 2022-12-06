import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SixthFloor from './assets/floor6.png';
import Typography from '@mui/material/Typography';

function Floor6(props) {

    let navigate = useNavigate();

    return (
    <div>
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {navigate('/')}}>Back</Button>
        </Stack>
        <Typography align="center" variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Sixth Floor
        </Typography>
        <img src={SixthFloor} alt="Bihall sixth floor map" style={{ width: '800px', }}/>
        <Stack spacing={15} direction="row" alignItems="center" justifyContent="center">
        <Button variant="contained" onClick={() => {navigate('/newres/6M')}}>Reserve 6 east</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/6G')}}>Reserve Greenhouse</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/6W')}}>Reserve 6 west</Button>
        </Stack>
    </div>
  );
}
export default Floor6;
