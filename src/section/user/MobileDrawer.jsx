
import { Button, SwipeableDrawer } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Sidebarmenu from '../Sidebarmenu'

function MobileDrawer() {
 

    return (
        <>      
        
        <SwipeableDrawer
                anchor='left'
            >
                <Sidebarmenu />
            </SwipeableDrawer>         
        </>

    )
}

export default MobileDrawer