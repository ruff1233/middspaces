import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ThreeM(props) {

    let navigate = useNavigate();

    return (
    <div>
        3 middle
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {navigate('/floor3')}}>Back</Button>
        </Stack>
    </div>
    );
}
export default ThreeM;
