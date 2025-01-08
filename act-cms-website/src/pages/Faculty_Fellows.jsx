import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import profiles2024 from '../profiles/2024FacultyFellows';   
import TeamGrid from '../components/ProfileComponets';

function FacultyFellows() {
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
        ACT-CMS Faculty Fellows
      </Typography>
      
    </Box>

    <Container sx={{ padding: 3, backgroundColor: "rgba(255, 255, 255, 0.10)" }} maxWidth={false} >
        <Typography variant="h2">2024-2026 Faculty Fellows</Typography>
      <TeamGrid profiles={profiles2024} />
    </Container>

  </>
  );
}

export default FacultyFellows