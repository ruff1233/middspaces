import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ResDialog from '../components/ResDialog.js';
import Select, { SelectChangeEvent } from '@mui/material/Select'; 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@mui/material/TextField';

function NewReservation(props) {
    const [open, setOpen] = React.useState(false);
    const [time, setTime] = React.useState('');
    const [date, setDate] = React.useState(new Date());

    const handleClick = () => {

    };

    const handleDateChange = (date:Date) => {
        setDate(date)
    }

    const handleChange = (event: SelectChangeEvent) => {
        setTime(event.target.value);
    };

    const CustomPicker = React.forwardRef(({ value, onClick }, ref) => (
        <TextField size="small" label="Date" onClick={onClick} value={value} ref={ref} />
    ));

    return (
    <div>
        <Box sx={{ flexDirection: 'column' }}>
            <Typography align="center" variant="h4" component="div" sx={{ flexGrow: 1 }} style={{paddingTop: 10}}>New Reservation</Typography>
            <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }} style={{paddingBottom: 10}}>*Space Name* : *Floor #*</Typography>
            <Divider />
            <Box sx={{ flexDirection: 'row' }} style={{padding: 15}}>
                <Typography align="left" variant="body1" component="div" sx={{ flexGrow: 1 }}>*ADA Information*</Typography>
                <Typography align="left" variant="body1" component="div" sx={{ flexGrow: 1 }}>*Outlet?*</Typography>
                <Typography align="left" variant="body1" component="div" sx={{ flexGrow: 1 }}>*Nearby Bathoom? Water Fountain?* **Any other relevant info**</Typography>
            </Box>
            <Box sx={{ flexDirection: 'row' }} style={{padding: 15, textAlign:"left"}}>
                <DatePicker selected={date} onChange={(e) => handleDateChange(e)} customInput={<CustomPicker />} />
            </Box>
            <Box sx={{ flexDirection: 'row' }} style={{padding: 15, textAlign:"left"}}>
                <FormControl size="small" style={{width: "10%"}} >
                    <InputLabel>Time</InputLabel>
                    <Select value={time} label="Time" onChange={handleChange}>
                        <MenuItem value={"8:00am-8:30am"}>8:00am-8:30am</MenuItem>
                        <MenuItem value={"8:30am-9:00am"}>8:30am-9:00am</MenuItem>
                        <MenuItem value={"9:00am-9:30am"}>9:00am-9:30am</MenuItem>
                        <MenuItem value={"9:30am-10:00am"}>9:30am-10:00am</MenuItem>
                        <MenuItem value={"10:00am-10:30am"}>10:00am-10:30am</MenuItem>
                        <MenuItem value={"10:30am-11:00am"}>10:30am-11:00am</MenuItem>
                        <MenuItem value={"11:00am-11:30am"}>11:00am-11:30am</MenuItem>
                        <MenuItem value={"11:30am-12:00pm"}>11:30am-12:00pm</MenuItem>
                        <MenuItem value={"12:00pm-12:30pm"}>12:00pm-12:30pm</MenuItem>
                        <MenuItem value={"12:30pm-1:00pm"}>12:30pm-1:00pm</MenuItem>
                        <MenuItem value={"1:00pm-1:30pm"}>1:00pm-1:30pm</MenuItem>
                        <MenuItem value={"1:30pm-2:00pm"}>1:30pm-2:00pm</MenuItem>
                        <MenuItem value={"2:00pm-2:30pm"}>2:00pm-2:30pm</MenuItem>
                        <MenuItem value={"2:30pm-3:00pm"}>2:30pm-3:00pm</MenuItem>
                        <MenuItem value={"3:00pm-3:30pm"}>3:00pm-3:30pm</MenuItem>
                        <MenuItem value={"3:30pm-4:00pm"}>3:30pm-4:00pm</MenuItem>
                        <MenuItem value={"4:00pm-4:30pm"}>4:00pm-4:30pm</MenuItem>
                        <MenuItem value={"4:30pm-5:00pm"}>4:30pm-5:00pm</MenuItem>
                        <MenuItem value={"5:00pm-5:30pm"}>5:00pm-5:30pm</MenuItem>
                        <MenuItem value={"5:30pm-6:00pm"}>5:30pm-6:00pm</MenuItem>
                        <MenuItem value={"6:00pm-6:30pm"}>6:00pm-6:30pm</MenuItem>
                        <MenuItem value={"6:30pm-7:00pm"}>6:30pm-7:00pm</MenuItem>
                        <MenuItem value={"7:00pm-7:30pm"}>7:00pm-7:30pm</MenuItem>
                        <MenuItem value={"7:30pm-8:00pm"}>7:30pm-8:00pm</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
        <ResDialog open={open} setOpen={setOpen}/>
    </div>
    );
}
export default NewReservation;