import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ResDialog from '../components/ResDialog.js';
import Select, { SelectChangeEvent } from '@mui/material/Select'; 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@mui/material/TextField';
import { resRef, spaceRef } from '../firebase';
import { child, get } from "firebase/database";
import { useParams } from 'react-router-dom';
import { SettingsBackupRestoreSharp } from "@mui/icons-material";

function EditReservation(props) {
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const [space, setSpace] = React.useState({});
    const [spaceName, setSpaceName] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [reservations, setReservations] = React.useState([]);
    const [bookings, setBookings] = React.useState(new Map());
    const [rerender, setRerender] = React.useState(false);

    let { _id } = useParams();

    React.useEffect(() => {
        //Load in space information
        get(child(resRef, `${_id}`)).then((snapshot) => {
          if (snapshot.exists()) {
            setSpaceName(snapshot.val().spaceName);
            get(child(spaceRef, `${snapshot.val().spaceName}`)).then((snapshot) => {
                if (snapshot.exists()) {
                  setSpace(snapshot.val());
                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              });
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
      }, []);

    const handleClick = () => {
        setOpen(true);
    };

    const handleDelete = () => {

    };

    const handleDateChange = (date:Date) => {
        bookings.clear();
        var styleDate = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
        //Load in reservations for selected space on selected date
        get(resRef.orderByChild("date").equalTo(styleDate)).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach(function(resSnapshot) {
                    setBookings(bookings.set(resSnapshot.val().time, false));
                });
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
      });
      setTime('');
      setDate(date);
    }

    const handleTimeChange = (event: SelectChangeEvent) => {
        setTime(event.target.value);
    };

    const CustomPicker = React.forwardRef(({ value, onClick }, ref) => (
        <TextField size="small" label="Date" onClick={onClick} value={value} ref={ref} />
    ));

    function useForceUpdate(){
        setRerender(!rerender);
    }

    return (
    <div>
        <Box sx={{ flexDirection: 'column' }}>
            <Typography align="center" variant="h4" component="div" sx={{ flexGrow: 1 }} style={{paddingTop: 10}}>Edit Reservation</Typography>
            <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>{spaceName} | Floor {space.floorNum}</Typography>
            <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }} style={{paddingBottom: 10}}>{"Reservation ID: " + _id}</Typography>
            <Divider />
            <Box sx={{ flexDirection: 'row' }} style={{padding: 15}}>
                <Typography align="center" variant="body1" component="div" sx={{ flexGrow: 1 }}>ADA: {space.adaInfo}</Typography>
                <Typography align="center" variant="body1" component="div" sx={{ flexGrow: 1 }}>Outlet: {space.outlet}</Typography>
                <Typography align="center" variant="body1" component="div" sx={{ flexGrow: 1 }}>Bathroom: {space.bathroom}</Typography>
                <Typography align="center" variant="body1" component="div" sx={{ flexGrow: 1 }}>Water Fountain: {space.waterFountain}</Typography>
            </Box>
            <Box sx={{ flexDirection: 'row' }} style={{padding: 15, textAlign:"center"}}>
                <DatePicker selected={date} onChange={(e) => handleDateChange(e)} customInput={<CustomPicker />} />
            </Box>
            <Box sx={{ flexDirection: 'row' }} style={{padding: 15, textAlign:"center"}}>
                <FormControl disabled={!date} size="small" style={{width: 210}} >
                    <InputLabel>Time</InputLabel>
                    <Select onOpen={useForceUpdate} value={time} label="Time" onChange={handleTimeChange}>
                        <MenuItem disabled={bookings.has("8:00am-8:30am")} value={"8:00am-8:30am"}>8:00am-8:30am</MenuItem>
                        <MenuItem disabled={bookings.has("8:30am-9:00am")} value={"8:30am-9:00am"}>8:30am-9:00am</MenuItem>
                        <MenuItem disabled={bookings.has("9:00am-9:30am")} value={"9:00am-9:30am"}>9:00am-9:30am</MenuItem>
                        <MenuItem disabled={bookings.has("9:30am-10:00am")} value={"9:30am-10:00am"}>9:30am-10:00am</MenuItem>
                        <MenuItem disabled={bookings.has("10:00am-10:30am")} value={"10:00am-10:30am"}>10:00am-10:30am</MenuItem>
                        <MenuItem disabled={bookings.has("10:30am-11:00am")} value={"10:30am-11:00am"}>10:30am-11:00am</MenuItem>
                        <MenuItem disabled={bookings.has("11:00am-11:30am")} value={"11:00am-11:30am"}>11:00am-11:30am</MenuItem>
                        <MenuItem disabled={bookings.has("11:30am-12:00pm")} value={"11:30am-12:00pm"}>11:30am-12:00pm</MenuItem>
                        <MenuItem disabled={bookings.has("12:00pm-12:30pm")} value={"12:00pm-12:30pm"}>12:00pm-12:30pm</MenuItem>
                        <MenuItem disabled={bookings.has("12:30pm-1:00pm")} value={"12:30pm-1:00pm"}>12:30pm-1:00pm</MenuItem>
                        <MenuItem disabled={bookings.has("1:00pm-1:30pm")} value={"1:00pm-1:30pm"}>1:00pm-1:30pm</MenuItem>
                        <MenuItem disabled={bookings.has("1:00pm-1:30pm")} value={"1:00pm-1:30pm"} value={"1:30pm-2:00pm"}>1:30pm-2:00pm</MenuItem>
                        <MenuItem disabled={bookings.has("2:00pm-2:30pm")} value={"2:00pm-2:30pm"}>2:00pm-2:30pm</MenuItem>
                        <MenuItem disabled={bookings.has("2:30pm-3:00pm")} value={"2:30pm-3:00pm"}>2:30pm-3:00pm</MenuItem>
                        <MenuItem disabled={bookings.has("3:00pm-3:30pm")} value={"3:00pm-3:30pm"}>3:00pm-3:30pm</MenuItem>
                        <MenuItem disabled={bookings.has("3:30pm-4:00pm")} value={"3:30pm-4:00pm"}>3:30pm-4:00pm</MenuItem>
                        <MenuItem disabled={bookings.has("4:00pm-4:30pm")} value={"4:00pm-4:30pm"}>4:00pm-4:30pm</MenuItem>
                        <MenuItem disabled={bookings.has("4:30pm-5:00pm")} value={"4:30pm-5:00pm"}>4:30pm-5:00pm</MenuItem>
                        <MenuItem disabled={bookings.has("5:00pm-5:30pm")} value={"5:00pm-5:30pm"}>5:00pm-5:30pm</MenuItem>
                        <MenuItem disabled={bookings.has("5:30pm-6:00pm")} value={"5:30pm-6:00pm"}>5:30pm-6:00pm</MenuItem>
                        <MenuItem disabled={bookings.has("6:00pm-6:30pm")} value={"6:00pm-6:30pm"}>6:00pm-6:30pm</MenuItem>
                        <MenuItem disabled={bookings.has("6:30pm-7:00pm")} value={"6:30pm-7:00pm"}>6:30pm-7:00pm</MenuItem>
                        <MenuItem disabled={bookings.has("7:00pm-7:30pm")} value={"7:00pm-7:30pm"}>7:00pm-7:30pm</MenuItem>
                        <MenuItem disabled={bookings.has("7:30pm-8:00pm")} value={"7:30pm-8:00pm"}>7:30pm-8:00pm</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ flexDirection: 'row' }} style={{padding: 15, textAlign:"center"}}>
                <Button color="error" variant="contained" onClick={() => {handleDelete()}}>Delete</Button> &nbsp;
                <Button disabled={!date || !time} variant="contained" onClick={() => {handleClick()}}>Confirm Edit</Button>
            </Box>
        </Box>
        <ResDialog open={open} setOpen={setOpen} spaceName={space.spaceName} time={time} date={date}/>
    </div>
    );
}
export default EditReservation;
