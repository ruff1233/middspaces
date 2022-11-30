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
import { resRef } from '../firebase';
import { useNavigate } from "react-router-dom";

function ResDialog(props) {
    const { open, setOpen, spaceName, time, setOpenConfirm, setTime, styleDate, reservations } = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState(" ");
    const [openDouble, setOpenDouble] = useState(false);
    const [resId, setResId] = useState("");
    let navigate = useNavigate();

    const handleCancel = () => {
        setOpen(false)
    };

    const handleOk = () => {
        setOpen(false)
        if(!reservations.has(time)) {
          const rId = (resRef.push({
            "time": time,
            "date": styleDate,
            "spaceName": spaceName,
          }).key);
          var templateParams = {
            to_name: name,
            send_to: email,
            res_id: rId,
            space_name: spaceName,
            time: time,
            date: styleDate,
          };
          emailjs.send('midd.spaces.reservations', 'middspacesnewres', templateParams, "3doC5g_UjSmO1xLoW");
          setOpenConfirm(true);
          navigate('/');
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
          {"Booking " + spaceName + ": " + time + " on " + styleDate}
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