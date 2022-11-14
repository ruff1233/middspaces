import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ResDialog from '../components/ResDialog.js';

function NewReservation(props) {
    const [open, setOpen] = React.useState(false);
    const [start, setStart] = React.useState("");
    const [end, setEnd] = React.useState("");

    const handleClick = (start, end) => {
        setStart(start);
        setEnd(end);
        setOpen(true);
      };

    return (
    <div>
        <Box sx={{ flexDirection: 'column' }}>
            <Typography align="center" variant="h4" component="div" sx={{ flexGrow: 1 }} style={{paddingTop: 10}}>New Reservation</Typography>
            <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }} style={{paddingBottom: 10}}>*Space Name* : *Floor #*</Typography>
            <Divider />
            <img src="../bihall_floor_3.jpg" alt="Bihall third floor map" width="500" height="600"/>
            <Box sx={{ flexDirection: 'row' }} style={{padding: 15}}>
                <Typography align="left" variant="body1" component="div" sx={{ flexGrow: 1 }}>*ADA Information*</Typography>
                <Typography align="left" variant="body1" component="div" sx={{ flexGrow: 1 }}>*Outlet?*</Typography>
                <Typography align="left" variant="body1" component="div" sx={{ flexGrow: 1 }}>*Nearby Bathoom? Water Fountain?* **Any other relevant info**</Typography>
            </Box>
            <Box sx={{ flexDirection: 'row' }} style={{padding: 15}}>
                <Typography align="center" variant="body1" component="div" sx={{ flexGrow: 1 }}>*Date Picker that I cannot figure out for the life of me*</Typography>
            </Box>
            <Box sx={{ flexDirection: 'row' }} style={{padding: 15}}>
                <Button variant="contained" onClick={() => {handleClick("8:00am","8:30am")}}>8:00am-8:30am</Button>
                <Button disabled variant="contained">8:30am-9:00am</Button>
                <Button variant="contained">9:00am-9:30am</Button>
                <Button variant="contained">9:30am-10:00am</Button>
                <Button disabled variant="contained">10:00am-10:30am</Button>
                <Button variant="contained">10:30am-11:00am</Button>
            </Box>
            <Box sx={{ flexDirection: 'row' }} style={{padding: 15}}>
                <Button variant="contained">11:00am-11:30am</Button>
                <Button variant="contained">11:30am-12:00pm</Button>
                <Button variant="contained">12:00pm-12:30pm</Button>
                <Button disabled variant="contained">12:30pm-1:00pm</Button>
                <Button variant="contained">1:00pm-1:30pm</Button>
                <Button variant="contained">1:30pm-2:00pm</Button>
            </Box>
            <Box sx={{ flexDirection: 'row' }} style={{padding: 15}}>
                <Button variant="contained">2:00pm-2:30pm</Button>
                <Button variant="contained">2:30pm-3:00pm</Button>
                <Button variant="contained">3:00pm-3:30pm</Button>
                <Button variant="contained">3:30pm-4:00pm</Button>
                <Button variant="contained">4:00pm-4:30pm</Button>
                <Button variant="contained">4:30pm-5:00pm</Button>
            </Box>
            <Box sx={{ flexDirection: 'row' }} style={{padding: 15}}>
                <Button variant="contained">5:00pm-5:30pm</Button>
                <Button variant="contained">5:30pm-6:00pm</Button>
                <Button variant="contained">6:00pm-6:30pm</Button>
                <Button variant="contained">6:30pm-7:00pm</Button>
                <Button variant="contained">7:00pm-7:30pm</Button>
                <Button variant="contained">7:30pm-8:00pm</Button>
            </Box>
            <Box sx={{ flexDirection: 'row' }} style={{padding: 15}}>
                <Button variant="contained">8:00pm-8:30pm</Button>
                <Button variant="contained">8:30pm-9:00pm</Button>
                <Button variant="contained">9:00pm-9:30pm</Button>
                <Button variant="contained">9:30pm-10:00pm</Button>
            </Box>
        </Box>
        <ResDialog open={open} start={start} setOpen={setOpen} end={end}/>
    </div>
    );
}
export default NewReservation;