import {Drawer,Box, IconButton, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import {useState} from 'react'
import {MuiSelect} from './MuiSelect'

export const MuiDrawer = () => {
  const[isDrawerOpen,setIsDrawerOpen] = useState(false)
  return (
    <>
    <IconButton size='large' edge='start' color='inherit' onClick={() => setIsDrawerOpen(true)}>
      <MenuIcon />
    </IconButton>
    <Drawer anchor='left' open={isDrawerOpen } onClose={()=>setIsDrawerOpen(false)}>
      <Box p={2} width='250px' textAlign='center' role='presentation'>
    
      <Typography variant='h6' >
         <NoteAltIcon></NoteAltIcon> Applications
      </Typography>
         <MuiSelect />
      </Box>
    </Drawer>
    </>
  )
}

export default MuiDrawer
