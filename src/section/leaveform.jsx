import { Box, Button, Card, FormControl, InputLabel, SelectChangeEvent, MenuItem, Select, Stack, styled, TextField } from '@mui/material';
import { useState } from 'react';
import Typography from '../core/Typography';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { SelectChangeEvent } from '@mui/material/Select';


const space = {
    marginY: '8px',
    zIndex: '99 !important'

}


function Leaveform() {
    const [leave, setLeave] = useState('Half');
    const [open, setOpen] = useState(true);
    const [date, setDate] = useState(null);
    // const handleChange = (event) => {
    //     setLeave(event.target.value);
    // }
    const handleSubmit = () => {
        // setOpen(false);

    }

    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        event.stopPropagation()
        setAge(event.target.value);
    };
    return (
        <>
            <Stack spacing={0} sx={{ width: "50vw" }}>
                <Card sx={{ maxWidth: '100vw', padding: "10px" }}>
                    <form>
                        <Stack marginX={5} marginY={2} >
                            <Typography textAlign='center'>
                                Request a leave
                            </Typography>
                            <Box sx={space}>
                                <TextField fullWidth variant='outlined' label='Name' size='small' />
                            </Box>
                            <Box sx={space}>
                                <TextField fullWidth variant='outlined' label='Email' size='small' />
                            </Box>
                            <Box sx={space}>
                                <Typography sx={{ fontSize: "20px" }}>
                                    Select Leave Date
                                </Typography>
                                <Box sx={space}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ zIndex: '100' }}>
                                        <DatePicker
                                            value={date}
                                            onChange={(newdate) => { setDate(newdate); }}
                                            renderInput={(prams) => <TextField {...prams} />}
                                        >
                                        </DatePicker>
                                    </LocalizationProvider>
                                </Box>
                            </Box>
                            <Box>
                                <TextField fullWidth variant='outlined' label='Reason' id='fullWidth' />
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: "20px", paddingY: '10px' }} >
                                    Type of leave
                                </Typography>


                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                        <Select className='menuitem'
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                            sx={{ border: '1px solid black' }}
                                        >
                                            <Box sx={{ border: '1px solid red', zIndex: '99' }}>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Box>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>

                            <Box textAlign='center' paddingY={2}>
                                <Typography sx={{ fontSize: "20px", paddingY: '10px' }}>
                                    Total Leave Day's :
                                </Typography>
                                <Box >
                                    <Typography>
                                        0
                                    </Typography>

                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='center'>
                                <Button variant='outlined' sx={{ width: "250px" }} onClick={handleSubmit()}>
                                    Submit
                                </Button>
                            </Box>

                        </Stack>
                    </form>
                </Card>
            </Stack>
        </>
    )
}

export default Leaveform;
