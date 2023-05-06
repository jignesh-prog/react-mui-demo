import {Stack, TextField, InputAdornment} from '@mui/material'
import {useState} from 'react'
export const MuiTextField = () => {
    const [value,setValue] = useState('')
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <TextField  label='Name' variant='outlined' size='medium'/>
        <TextField  label='Name' variant='filled' size='medium'/>
        <TextField  label='Name' variant='standard' size='medium'/>
      </Stack>
      <Stack spacing={2} direction='row'>
        <TextField  label='SmallName'
         variant='outlined' 
         size='medium'  
         color='secondary'/>
      </Stack>
      <Stack spacing={2} direction='row'>
        <TextField  label='Form Input' required
         
         variant='outlined' size='medium'  color='secondary'/>
        <TextField  label='Password' required value={value} 
         onChange={(e) => setValue(e.target.value)}
         error={!value}
         helperText = {!value ?' required' : 'Dont share your password'}
          variant='outlined' size='medium'  color='secondary' />
      </Stack>
      <Stack spacing={2} direction='row'>
        <TextField  label='Amount' InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
        }}/>
        <TextField  label='Weight' InputProps= {{
            endAdornment: <InputAdornment position='end'>Kg</InputAdornment>
        }}/>
      </Stack>
    </Stack>
  )
}

export default MuiTextField
