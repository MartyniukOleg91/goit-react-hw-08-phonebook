import image from '../image/4298389.png';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export default function Home() {
  return (  
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow:
            ' rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;',
          p: 3,
          backgroundColor: '#7a9b95',
          borderRadius: '5px',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          mt={{ color: '#fff3cc', fontWeight: 500 }}
        >
          Phonebook
        </Typography>
        <img src={image} alt="phone" width="150" />
      </Box>
  );
}
