import { GridView, ViewList } from '@mui/icons-material';
import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, styled, Typography as MuiTypography } from '@mui/material'
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Typography from '../core/Typography'
import { fetchUsersHoliday } from '../redux/action';

const ListStack = styled(Stack)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: "16px",
    // border: "1px solid rgb(83, 109, 254)",
    borderRadius: '4px',
    boxShadow: "0 4px 8px 0 rgba(83, 109, 254,0.3), 0 6px 20px 0 rgba(83, 109, 254, 0.19)"
}))

const GridViewCard = styled(Card)(() => ({
    boxShadow: "0 4px 8px 0 rgba(83, 109, 254,0.3), 0 6px 20px 0 rgba(83, 109, 254, 0.19)"
}))

function UserHoliday() {
    const dispatch = useDispatch();
    const selectHolidays = useSelector((state) => state.holiday.holiday);
    console.log('selectHolidays', selectHolidays);
    useEffect(() => {
        dispatch(fetchUsersHoliday());
    }, [dispatch])
    const [gridView, setGridView] = useState(true);

    const handlechangelist = () => {
        if (gridView) {
            setGridView(false);
        }
        else {
            setGridView(true);
        }

    }
    return (
        <>
            <Grid container paddingTop='20px' >
                <Grid item xs={12} sx={{ marginX: "20px" }}>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography >
                            Holidays
                        </Typography>
                        <Stack direction='row'>
                            <Button sx={{ color: "gray", padding: "0px", textTransform: "capitalize" }} onClick={handlechangelist}>
                                {
                                    gridView === false ?
                                        <>
                                            <GridView />
                                            <MuiTypography sx={{ paddingLeft: "10px" }} >
                                                Grid View
                                            </MuiTypography>
                                        </>
                                        :
                                        <>
                                            <ViewList />
                                            <MuiTypography sx={{ paddingLeft: "10px" }} >
                                                List View
                                            </MuiTypography>
                                        </>
                                }
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} sx={{ marginX: "20px", marginTop: "20px" }}>
                    <Grid container spacing={1}>
                        {
                            gridView !== true &&
                            <Grid item xs={12}>
                                <ListStack direction='row'  >
                                    <Stack sx={{ width: "100%" }}>
                                        <MuiTypography sx={{ textTransform: "capitalize" }}>
                                            Name
                                        </MuiTypography>
                                    </Stack>
                                    <Stack sx={{ width: "50%" }}>
                                        <MuiTypography sx={{ textTransform: "capitalize" }} variant="body1" >
                                            Type
                                        </MuiTypography>
                                    </Stack>
                                    <Stack direction='column' sx={{ width: "100%" }}>
                                        <MuiTypography variant="body1"  >
                                            Start Date :
                                        </MuiTypography>
                                    </Stack>
                                    <Stack direction='column' sx={{ width: "100%" }}>
                                        <MuiTypography variant="body1" >
                                            End Date :
                                        </MuiTypography>
                                    </Stack>
                                    <Stack sx={{ width: "100%" }} >
                                        <MuiTypography variant="body1">
                                            Description
                                        </MuiTypography>
                                    </Stack>

                                </ListStack>
                            </Grid>
                        }
                        {
                            selectHolidays.map((items, i) => {
                                const NewformatStart_Date = items.start_date.split('T');
                                let Start_Date = moment(NewformatStart_Date[0]).format('DD/MM/YYYY');
                                const NewformatEnd_Date = items.end_date.split('T');
                                let End_Date = moment(NewformatEnd_Date[0]).format('DD/MM/YYYY');
                                var diff = moment(End_Date, 'DD/MM/YYYY').diff(moment(Start_Date, 'DD/MM/YYYY'));
                                var duration = moment.duration(diff);

                                return (
                                    <>
                                        {
                                            gridView === true ?
                                                <Grid item xs={12} md={6} lg={3} >
                                                    <GridViewCard key={i}>
                                                        <CardContent sx={{"&:last-child":{paddingBottom:"16px"}}}>
                                                            <Stack direction='row' justifyContent='space-between' spacing={1}>
                                                                <MuiTypography sx={{ fontSize: 20, textTransform: "capitalize", width: "100px",color:"#1976d2",fontWeight:600 }} gutterBottom>
                                                                    {items.name}
                                                                </MuiTypography>
                                                                <CardMedia
                                                                    sx={{ height: 100, width: 150 }}
                                                                    image={require("../image/diwali.jpg")}
                                                                />
                                                            </Stack>
                                                            <MuiTypography variant='h6' sx={{marginTop:'10px'}}>
                                                                {
                                                                    Start_Date !== End_Date ? `${duration._data.days + 1} days` : " 1 day"
                                                                }
                                                            </MuiTypography>
                                                            <MuiTypography variant="p">
                                                                {items.description}
                                                            </MuiTypography>
                                                            <Stack direction='row' justifyContent="space-between"  sx={{marginTop:"8px",fontSize:"16px"}}>
                                                                <MuiTypography fontWeight={600} >
                                                                    {Start_Date}
                                                                </MuiTypography>
                                                                <MuiTypography fontWeight={600} > To  </MuiTypography>

                                                                <MuiTypography fontWeight={600}> 
                                                                    {End_Date}
                                                                </MuiTypography>
                                                            </Stack>
                                                        </CardContent>
                                                    </GridViewCard>
                                                </Grid> :
                                                <Grid item xs={12}>
                                                    <ListStack direction='row' key={i}  >
                                                        <Stack sx={{ width: "100%" }}>
                                                            <MuiTypography sx={{ fontSize: 20, textTransform: "capitalize" }}   >
                                                                {items.name}
                                                            </MuiTypography>
                                                        </Stack>
                                                        <Stack sx={{ width: "50%" }}>
                                                            <MuiTypography sx={{ textTransform: "capitalize" }} >
                                                                {items.type}
                                                            </MuiTypography>
                                                        </Stack>
                                                        <Stack direction='column' sx={{ width: "100%" }}>
                                                            <MuiTypography variant="body1" >
                                                                {Start_Date}
                                                            </MuiTypography>
                                                        </Stack>
                                                        <Stack direction='column' sx={{ width: "100%" }}>
                                                            <MuiTypography variant="body1" >
                                                                {End_Date}
                                                               
                                                            </MuiTypography>
                                                        </Stack>
                                                        <Stack sx={{ width: "100%" }} >
                                                            <MuiTypography variant="body1">
                                                                {items.description}
                                                            </MuiTypography>
                                                        </Stack>
                                                    </ListStack>
                                                </Grid>
                                        }
                                    </>
                                )
                            }
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default UserHoliday;