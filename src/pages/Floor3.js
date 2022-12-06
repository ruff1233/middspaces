import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ThirdFloor from './assets/floor3.png';
import Typography from '@mui/material/Typography';

function Floor3(props) {

    let navigate = useNavigate();

    return (
    <div>
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {navigate('/')}}>Back</Button>
        </Stack>
        <Typography align="center" variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Third Floor
        </Typography>
        <img src={ThirdFloor} alt="Bihall third floor map" style={{ width: '800px', }}/>
        <Stack spacing={15} direction="row" alignItems="center" justifyContent="center">
        <Button variant="contained" onClick={() => {navigate('/newres/3N')}}>Reserve 3 north</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/3M')}}>Reserve 3 middle</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/3W')}}>Reserve 3 west</Button>
        <Button variant="contained" onClick={() => {navigate('/newres/3S')}}>Reserve 3 south</Button>
        </Stack>
        
    </div>
  );
}
export default Floor3;
