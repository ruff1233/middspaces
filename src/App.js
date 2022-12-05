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
import Floor3 from './pages/Floor3.js';
import Floor4 from './pages/Floor4.js';
import Floor5 from './pages/Floor5.js';
import Floor6 from './pages/Floor6.js';
import ThreeM from './pages/ThreeM.js';
import ThreeN from './pages/ThreeN.js';
import ThreeS from './pages/ThreeS.js';
import ThreeW from './pages/ThreeW.js';

function App() {
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  
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
          <Route path="/editres/:_id" element={<EditReservation setOpenDelete={setOpenDelete} setOpenUpdate={setOpenUpdate} setOpenConfirm={setOpenConfirm} />}></Route>
          <Route path="/space" element={<Space />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/floor3" element={<Floor3 />}></Route>
          <Route path="/floor4" element={<Floor4 />}></Route>
          <Route path="/floor5" element={<Floor5 />}></Route>
          <Route path="/floor6" element={<Floor6 />}></Route>
          <Route path="/3m" element={<ThreeM />}></Route>
          <Route path="/3n" element={<ThreeN />}></Route>
          <Route path="/3s" element={<ThreeS />}></Route>
          <Route path="/3w" element={<ThreeW />}></Route>
        </Routes>
      </BrowserRouter>
      <Snackbar open={openConfirm} autoHideDuration={6000} onClose={handleConfirmClose}>
        <Alert onClose={handleConfirmClose} severity="success" sx={{ width: '100%' }}>
          Reservation confirmed! Confirmation email has been sent.
        </Alert>
      </Snackbar>
      <Snackbar open={openDelete} autoHideDuration={6000} onClose={handleConfirmClose}>
        <Alert onClose={handleConfirmClose} severity="success" sx={{ width: '100%' }}>
          Reservation successfully deleted.
        </Alert>
      </Snackbar>
      <Snackbar open={openUpdate} autoHideDuration={6000} onClose={handleConfirmClose}>
        <Alert onClose={handleConfirmClose} severity="success" sx={{ width: '100%' }}>
          Reservation successfully updated!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
