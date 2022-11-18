import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';

function ResDialog(props) {
    const { open, setOpen, start, end } = props;
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleCancel = () => {
        setOpen(false)
    };

    var templateParams = {
      to_name: name,
      send_to: email,
    };

    const handleOk = () => {
        setOpen(false)
        emailjs.send('midd.spaces.reservations', 'middspacesnewres', templateParams, "3doC5g_UjSmO1xLoW")
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
            console.log('FAILED...', error);
          });
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
          {"Book This Space From " + start + " Until " + end + "?"}
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
    </div>
  );
}
export default ResDialog;