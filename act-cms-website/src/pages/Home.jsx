import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink } from 'react-router-dom';

import TeamGrid from '../Profiles';

import HatIcon from '../assets/graduation-cap-circular-button.svg'
import PuzzlePieces from '../assets/two-puzzle-pieces.svg' 
import ClassIcon from '../assets/class-scene.svg' 

import Concept from '../assets/act-cms.svg'


const CapComponent = () => {
  return (
      <img src={HatIcon} alt="description" style={{ filter: 'invert(100%)', maxWidth: '175px' }} />
  )
}

const PuzzlePiecesComponent = () => {
  return (
      <img src={PuzzlePieces} alt="description" style={{ filter: 'invert(100%)', maxWidth: '175px' }} />
  )
}

const ClassComponent = () => {
  return (
      <img src={ClassIcon} alt="description" style={{ filter: 'invert(100%)', maxWidth: '175px' }} />
  )
}

const CustomListItem = ({ primary }) => {
  return (
    <ListItem sx={{
      paddingTop: '0px', // Reduce top padding
      paddingBottom: '0px', // Reduce bottom padding
      position: 'relative',
      '&::before': {
        content: '"•"', // Bullet character
        color: '#ed1c24', // Bullet color
        position: 'absolute',
        left: 0,
      },
      '& .MuiListItemText-root': {
        marginLeft: '0.25em', // Adjust spacing
      },
    }}>
      <ListItemText primary={primary} />
    </ListItem>
  );
};

function Home() {
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
  <Grid 
    container 
    rowSpacing={3}
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}  
    style={{ 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Grid item md={12} lg={3} style={{ textAlign: 'center' }} >
      <img src={Concept} alt="ACT-CMS Concept" style={{ 
        height: '225px', 
        display: 'block',
        margin: 'auto' // Centers the image horizontally
      }} />
    </Grid>
    <Grid item md={12} lg={9} style={{ textAlign: 'center' }} >
      <Typography variant="h1">
        Accelerating Curricular Transformation in the Computational Molecular Sciences
      </Typography>
    </Grid>
  </Grid>
</Box>


      <Container sx={{ padding: 3,  backgroundColor: "rgba(255, 255, 255, 0.10)" }} maxWidth={false} >
        {/*<Typography variant="h1">
        Accelerating Curricular Transformation in the Computational Molecular Sciences
      </Typography>*/}

        <Typography paragraph={true}>
        The Molecular Sciences Software Institute (MolSSI) is pleased to announce the launch of a new education and faculty development program: 
        Accelerating Curricular Transformation in the Computational Molecular Sciences (ACT-CMS). 
        The goal of ACT-CMS is to transform science curricula by accelerating the integration of programming and computation into existing molecular science courses through faculty training and the development of open and reusable curricular modules.
        </Typography>

        <Typography paragraph={true}>
        ACT-CMS will achieve this goal by providing faculty with the training and resources needed to integrate programming and computation into their existing courses. 
        ACT-CMS is generously funded by the National Science Foundation 
        Training-based Workforce Development for Advanced Cyberinfrastructure program (
        <Link href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2321044">OAC 2321044</Link>,
        <Link href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2321045">OAC 2321045</Link>).
        </Typography>

        <Typography variant="h2" component="h2" gutterBottom>
            Program Components
        </Typography>

        <Typography paragraph={true}>
            ACT-CMS is a faculty and curriculum development program that facilitates the integration of programming, computation, and other cyberinfrastructure skills into existing molecular science courses. 
            This will be achieved through the three program components: (1) A Faculty Fellows Program, (2) the creation of Open and Reusable Curricular Materials, and (3) the creation of an Educator Community and Support Network.
        </Typography>
        
        <Grid 
        container 
        rowSpacing={8}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}  
        style={{ 
          display: 'flex', 
          justifyContent: 'center', // Horizontal centering
          alignItems: 'center' // Vertical centering
        }}>
        <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
          <CapComponent />
        </Grid>
        <Grid item xs={12} md={9} >
          <Typography variant="h3" component="h3" gutterBottom>Faculty Fellowships</Typography>
          <Typography paragraph={true}>
            The Faculty Fellows Program is the cornerstone of ACT-CMS. 
            A Faculty Fellowship lasts two years and is awarded to a molecular science educator developing curricula integrating programming and computation into existing science courses.  
            Throughout the program, Faculty Fellows will receive curriculum development and assessment training and will upskill their programming and computational skills.  
            They will produce a curriculum module that uses programming and computation to teach STEM concepts in an existing course that they teach.
            These modules will be open and reusable, allowing other educators to adopt them in their classrooms. 
          </Typography> 
          <Typography paragraph={true}>
            Applications for the first cohort of Faculty Fellows will open in January 2024.
            A Faculty Fellowship has the following benefits:
          </Typography> 
          <div>
            <List>
              <CustomListItem primary="$3500 stipend each year of the fellowship." />
              <CustomListItem primary="$1500 travel funding each year of the fellowship." />
              <CustomListItem primary="Mentorship from an ACT-CMS Programming and Computation Mentor and an ACT-CMS Curriculum Mentor." />
              <CustomListItem primary="Annual meeting at MolSSI headquarters for training and networking." />
          </List>
          </div>

          <Box sx={{ 
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
            <RouterLink to="/faculty_fellowship">
              <Button variant="contained"><span style={{ textTransform: 'capitalize' }}>Interested in becoming a Faculty Fellow? Click Here</span></Button>
            </RouterLink>
          </Box>

        </Grid>
      
      <Grid item xs={12} md={9} >
        <Typography variant="h3" component="h3" gutterBottom>Open and Reusable Curricular Modules</Typography>
        <Typography paragraph={true}>
            Each Faculty Fellow will develop discipline-specific modules for use in molecular sciences classrooms integrating computation and programming. 
            These materials will all be released under permissive licenses to allow broad adoption.
            Building on existing MolSSI Education material, ACT-CMS will also provide a number of foundational modules for use in science curricula.
        </Typography>
        <Box sx={{ 
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
            <RouterLink to="/foundational_modules">
              <Button variant="contained"><span style={{ textTransform: 'capitalize' }}>Read more about ACT-CMS Foundational Modules</span></Button>
            </RouterLink>
          </Box>

      </Grid>
      <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
        <PuzzlePiecesComponent />
      </Grid>
    
      <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
          <ClassComponent />
        </Grid>
      <Grid item xs={12} md={9} >
      <Typography variant="h3" component="h3" gutterBottom>Educator Community and Support</Typography>
        <Typography paragraph={true}>
            ACT-CMS will facilitate the creation of a community for educators to share ideas and best practices for integrating computation and programming into their classrooms.
            This will be achieved through the creation of a platform for educators to share ideas and ask questions, as well as through the creation of a series of workshops and webinars.
            Workshops will be a mix of webinars and in-person workshops for CMS educators.
        </Typography>

        <Typography paragraph={true}>
            You can stay up-to-date with ACT-CMS by joining the MolSSI Mailing List.
        </Typography>
        
        <Box sx={{ 
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
            <a href="https://molssi.org/subscribe-to-our-mailing-list/" target="_blank">
              <Button variant="contained"><span style={{ textTransform: 'capitalize' }}>Join MolSSI Mailing List</span></Button>
            </a>
          </Box>

      </Grid>
    </Grid>
    
    </Container>
    </>
            
  );
}

export default Home