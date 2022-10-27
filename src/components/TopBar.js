import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

function TopBar(props) {
  let navigate = useNavigate();

  return (
    <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="home"
                sx={{ mr: 2 }}
                onClick={() => {navigate('/')}}
            >
                <HomeIcon />
            </IconButton>
            <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MiddSpaces
            </Typography>
            <Button color="inherit" onClick={() => {navigate('/about')}}>About</Button>
          </Toolbar>
        </AppBar>
    </div>
  );
}
export default TopBar;