import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Space  from './pages/Space.js';
import About  from './pages/About.js';
import TopBar from './components/TopBar.js';
import NewReservation  from './pages/NewReservation.js';
import EditReservation  from './pages/EditReservation.js';
import Home  from './pages/Home.js';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function App() {
  const [openConfirm, setOpenConfirm] = React.useState(false);
  
  const handleConfirmClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenConfirm(false);
  };

  return (
    <div className="App">
      
      <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/newres/:spaceName" element={<NewReservation setOpenConfirm={setOpenConfirm} />}></Route>
          <Route path="/editres/:_id" element={<EditReservation setOpenConfirm={setOpenConfirm} />}></Route>
          <Route path="/space" element={<Space />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      <Snackbar open={openConfirm} autoHideDuration={6000} onClose={handleConfirmClose}>
        <Alert onClose={handleConfirmClose} severity="success" sx={{ width: '100%' }}>
          Reservation confirmed! Confirmation email has been sent.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
