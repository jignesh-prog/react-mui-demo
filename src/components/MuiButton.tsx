import {Stack, Button,IconButton,ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
export const MuiButton = () => {
  return (
    <Stack spacing={4}>
     <Stack spacing={2} direction='row'>
      <Button variant= 'text' href='https://google.com'>text</Button>
      <Button variant= 'contained'>contained</Button>
      <Button variant= 'outlined'>outlined</Button>
     </Stack>
     <Stack spacing={2} direction= 'row'>
       <Button variant='contained' color='primary'>primary</Button>
       <Button variant='contained' color='secondary'>econdary</Button>
       <Button variant='contained' color='error'>error</Button>
       <Button variant='contained' color='warning'>warning</Button>
       <Button variant='contained' color='info'>info</Button>
       <Button variant='contained' color='success'>success</Button>
     </Stack>
     <Stack display='block' spacing={2} direction= 'row'>
        <Button variant='contained' size='small'>small</Button>
        <Button variant='contained' size='medium'>medium</Button>
        <Button variant='contained' size='large'>large</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon />} onClick= {() => alert('clicked')}>send</Button>

        <IconButton aria-label='send' color='success'>
            <SendIcon/>
        </IconButton>
    </Stack>
    <Stack direction='row'>
        <ButtonGroup 
        variant='contained' 
        orientation='vertical'
        size='small' 
        color='secondary'
        aria-label='alignment button goup'
        >
        <Button onClick={() => alert('left clicked')}>left</Button>
        <Button>center</Button>
        <Button>right</Button>
        </ButtonGroup>
    </Stack>
    </Stack>
  )
} 

export default MuiButton
