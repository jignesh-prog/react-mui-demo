import{Box,TextField,MenuItem} from '@mui/material'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CampaignIcon from '@mui/icons-material/Campaign';
import React, {useState} from 'react'
export const MuiSelect = () => {
    const[countries,setCountries] = useState<string[]>([]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value= e.target.value 
        setCountries (typeof value === 'string' ? value.split(',') : value)
    }
  return (
    <Box width='250px'  ><br></br>
      <TextField  label='Marketing' 
      variant='filled'
      color='secondary'
      size='small'
      select 
      value={countries} 
      onChange={handleChange} 
      fullWidth
      SelectProps = {{
        multiple: true,
      }}
      >
          <MenuItem value='Cont' color='success' ><PermContactCalendarIcon />Contact</MenuItem>
          <MenuItem value='Camp' color='success'  ><CampaignIcon />Campaigns</MenuItem>
         
      </TextField>
    </Box>
  )
}

export default MuiSelect
