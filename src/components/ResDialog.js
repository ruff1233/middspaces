import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function ResDialog(props) {
    const { open, setOpen, spaceName, time, setTime, date, reservations } = props;
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [openDouble, setOpenDouble] = useState(false);

    const handleCancel = () => {
        setOpen(false)
    };

    var templateParams = {
      to_name: name,
      send_to: email,
    };

    const handleOk = () => {
        setOpen(false)
        if(!reservations.has(time)) {
          emailjs.send('midd.spaces.reservations', 'middspacesnewres', templateParams, "3doC5g_UjSmO1xLoW")
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
            console.log('FAILED...', error);
          });
        } else {
          setOpenDouble(true);
          setTime("");
        }
    };

    const handleDoubleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenDouble(false);
    };

  return (
    <div>
      <Dialog
        open={open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Booking ", spaceName, " - ", time}
        </DialogTitle>
        <DialogContent style={{paddingTop: 5}}>
            <TextField onChange={(e) => setName(e.target.value)} required style={{paddingRight: 10}} id="resName" label="Name" variant="outlined" />
            <TextField onChange={(e) => setEmail(e.target.value)} required id="resEmail" label="Email" variant="outlined" />
        </DialogContent>
        <DialogActions>
            <Button variant="outlined" color="error" autoFocus onClick={handleCancel}>Cancel</Button>
            <Button disabled={!name || !email} variant="outlined" onClick={handleOk}>Submit Reservation</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={openDouble} autoHideDuration={6000} onClose={handleDoubleClose}>
        <Alert onClose={handleDoubleClose} severity="error" sx={{ width: '100%' }}>
          This time is already booked! Reservation unsuccessful.
        </Alert>
      </Snackbar>
    </div>
  );
}
export default ResDialog;