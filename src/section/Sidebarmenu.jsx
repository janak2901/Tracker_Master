import { ArrowBack } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MobileDevice } from '../config/Constants.config';
import sideBardata from '../Data/sidebardata'

function Sidebarmenu() {
  const navigate = useNavigate();
  return (
    <>
      <List>
        {sideBardata.map((text) => (
          <ListItem disablePadding >
              <ListItemButton onClick={()=> navigate(text.path)}>
                <ListItemIcon>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.iconname} />
              </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default Sidebarmenu