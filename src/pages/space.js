import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

function Space(props) {
  let navigate = useNavigate();

  return (
    <div>
      Example Space Page!
      <Button variant="contained" onClick={() => {navigate('/')}}>Home</Button>
    </div>
  );
}
export default Space;