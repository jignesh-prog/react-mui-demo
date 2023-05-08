import {Stack, TextField, Box, Typography, InputAdornment, Button, Checkbox, FormControlLabel, Container } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export const MuiLogin = () => {
    const[name,setName] = useState({userName:'', password:''});
    const navigate = useNavigate()

  return (
    <Container  component="main" maxWidth="xs">
        <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: 'solid', 
        }}
        >
         <Stack spacing={4} width='360px' >
           <Stack >
            <Typography variant='h5'>Add your credential</Typography>
          </Stack>
          <Stack spacing={2}>
            <TextField color='primary' label='Username' 
            value={name.userName}  onChange={(e) => setName({...name,userName: e.target.value})}
                InputProps = {{
                    endAdornment: <InputAdornment position='end'>{<EmailIcon/>}</InputAdornment>}}
                >
           </TextField>
           <TextField label='Password' 
            required
            value={name.password}
            onChange={(e) => setName({...name,password: e.target.value})}
            color='primary'
            InputProps = {{
            endAdornment: <InputAdornment position='end'>{<LockIcon/>}</InputAdornment>}}
            >
            </TextField>
           </Stack>
           <Stack direction='row' spacing={2}>
               <FormControlLabel control={<Checkbox value='Remember me'/>} label='Remember me'/>
               <Button variant='contained'  type='submit' color='primary' size='small' onClick = {() => 
                name ? navigate('MuiDrawer') : 'error'}>  Sign In  
               </Button>
           </Stack>
           <Stack direction='row'>
             <Typography>Montay Finance-coded by </Typography>
             <Button variant='text' href='https://kusol.co.nz/'>Kusol Lab</Button>
            </Stack>
        </Stack>
      </Box>
    </Container>
  )
}

export default MuiLogin
