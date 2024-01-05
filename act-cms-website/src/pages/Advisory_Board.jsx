import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import profiles from '../profiles/AdvisoryProfiles';   
import TeamGrid from '../components/ProfileComponets';

function AdvisoryBoard() {
  return (
    <>
    <Box sx={{ 
      width: '100%',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    }}>

      <Typography variant="h1">
        ACT-CMS Advisory Board
      </Typography>
      
    </Box>

    <Container sx={{ padding: 3, backgroundColor: "rgba(255, 255, 255, 0.10)" }} maxWidth={false} >
      <TeamGrid profiles={profiles} />
    </Container>

  </>
  );
}

export default AdvisoryBoard