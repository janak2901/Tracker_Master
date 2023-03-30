import { Menu, ArrowBack, ArrowForward, ListOutlined } from '@mui/icons-material';
import { AppBar as MuiAppBar, Drawer as MuiDrawer, Box, CssBaseline, useTheme, styled, Divider, Toolbar, IconButton, SwipeableDrawer, Typography, useMediaQuery, List } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react';
import { drawerWidth } from '../../config/Constants.config';
import '../../Data/sidebardata'
import Sidebarmenu from '../Sidebarmenu';
import Header from './Header';
import { MobileDevice } from '../../config/Constants.config';

const openedMixin = (theme) => ({
  width:drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper': {
      marginTop: '64px',
    },
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }
    ),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    })
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .css-y4yfnf-MuiPaper-root-MuiAppBar-root':{
  zIndex: `${MobileDevice ?theme.zIndex.drawer + 1 : theme.zIndex.drawer - 1}`},
  background: "white",
  transition: theme.transitions.create(['width', 'margin'], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
  }),

  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - 0px)`,
    transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [isMobile , setMobile] = useState(false); 
  const theme = useTheme();
  console.log(window.screen);

  const  closedSide = ()=>{
    if(MobileDevice){
      setOpen(false);
    }
  }
  useEffect(()=>{
    closedSide();
  },[])
  const handleDrawerOpen = () => {
   setOpen(true);
   };
  const mobileOpen=()=>{
    setMobile(true);
  }
  const mobileClose=()=>{
    setMobile(false);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" open={open} elevation={1} >
        <CssBaseline />
        <Toolbar>
          {/* <Divider/> */}
          <IconButton
            edge="start"
            sx={{
              marginRight: 3,
              // ...(open && { display: 'none' }),
            }}
          >
            {!MobileDevice ? open ? <ArrowBack color='primary' onClick={handleDrawerClose} /> :<Menu color='primary' onClick={handleDrawerOpen} />:<Menu color='primary' onClick={mobileOpen}/>}
            
          </IconButton>
          <Header />
        </Toolbar>
      </AppBar>

      
         <Drawer variant="permanent" open={open} >
        <Divider />
        <Sidebarmenu />
      </Drawer> 
      <SwipeableDrawer
                
                sx={{display:`${!MobileDevice && 'none'}`,'& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper':{width:drawerWidth}}}
                open={isMobile}
                variant='temporary'
                anchor='left'
            >
                <Box>
                  <Box sx={{marginTop:"20px",paddingLeft:"13px"}}>
                  {
                  MobileDevice && <ArrowBack onClick={mobileClose} color='primary' sx={{position:"absulate",left:'10px'
                }} />
                }
                  </Box>
                <Sidebarmenu />
                </Box>
            </SwipeableDrawer>    
     
    </>
  )
}

