import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const CustomListItem = ({ primary }) => {
  return (
    <ListItem sx={{
      paddingTop: '2px', // Reduce top padding
      paddingBottom: '2px', // Reduce bottom padding
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
        Faculty Fellowships
      </Typography>
      
    </Box>

    <Container sx={{ padding: 3, backgroundColor: "rgba(255, 255, 255, 0.10)" }} maxWidth={false} >
      

      <Typography paragraph={true}>
            The Faculty Fellows Program is the cornerstone of ACT-CMS. 
            A Faculty Fellowship lasts two years and is awarded to a molecular science educator developing curricula integrating programming and computation into existing science courses.  
            Through the two-year program, faculty will receive curriculum development and assessment training and will upskill their programming and computational skills.  
            They will produce a reusable curriculum module that uses programming and computation to teach STEM concepts in an existing course that they teach.  
      </Typography> 
      
      
      <div>
      <Typography variant="h2" gutterBottom>
        Faculty Fellowship Benefits:
      </Typography>
        <List>
          <CustomListItem primary="$3500 stipend each year of the fellowship." />
          <CustomListItem primary="Travel funding each year of the fellowship." />
          <CustomListItem primary="Mentorship from an ACT-CMS Programming and Computation Mentor and an ACT-CMS Curriculum Mentor." />
          <CustomListItem primary="Annual meeting at MolSSI headquarters for training and networking." />
      </List>
      </div>

    <Typography variant="h2" gutterBottom>Eligibility</Typography>

    <Typography paragraph={true}>
      The ACT-CMS Faculty Fellows program provides resources and financial support to molecular science educators who integrate programming and computation in the molecular sciences curriculum.  
      The molecular science domain includes but is not limited to chemistry, physics, materials science and engineering, and molecular biology.  
      Educators must have a full-time appointment at an educational institution in the United States to be eligible for the fellowship.  
      Faculty at any level of higher education from any type of institution, including community colleges, liberal arts colleges, primarily undergraduate institutions, and research-intensive universities, are all eligible for the fellowship.  
      Educators who serve student populations that are historically underrepresented in STEM disciplines are especially encouraged to apply.  Please contact us at <Link href="mailto:act-cms@molssi.org">act-cms@molssi.org</Link> if you have any questions about your eligibility.    
    </Typography>

    <Typography variant="h2" gutterBottom>Preparing Your Application</Typography>

    <Typography paragraph={true}>
        Fellows will be selected through a competitive application process.  
        Applications will open on January 29, 2024 and close on February 29, 2024.  
        Fellows will be notified of their selection in early April 2024.   
    </Typography>
    
    <Box sx={{ 
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
      <Link href="https://video.vt.edu/media/ACT-CMS%20Info%20Session/1_tvmi497o">
        <Button variant="contained"><span style={{ textTransform: 'capitalize' }}>View the Recording of the Faculty Fellowship Info Session</span></Button>
      </Link>
    </Box>

    <Box sx={{ 
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden', 
                  marginTop: '1em'
                }}>
      <Link href="https://molssi.typeform.com/to/Xgzcby3Y">
        <Button variant="contained"><span style={{ textTransform: 'capitalize' }}>Click here for the Faculty Fellows Application Form</span></Button>
      </Link>
    </Box>
    <Typography paragraph={true}> 
        The application includes the following components:

        <ol>
          <li>
            <strong>Online Application</strong> - The online application will ask for information about you and your institution,  including your name, molecular science discipline, contact information, and institution information.  
            The online application asks if your institution is classified by the US Department of Education as a minority-serving institution and if so to describe that classification. 
          </li>
          <li><strong>A current CV.</strong></li>
          <li>
            <strong>Proposal of Curriculum Development</strong> - Your proposal should describe the curricular activity you propose developing as part of your fellowship.  
            You should describe the cyberinfrastructure skills and science/engineering skills that your activity would teach.  
            Give information about the course where you will pilot your activity, the program of study which includes your course, and any available information about the student population the course serves.  
            You should also describe your prior experience incorporating cyberinfrastructure skills in your curriculum, and explain why you want to participate in the Faculty Fellows program and how participating in the program would benefit you, your students, and your institution.
          </li>
          <li>
            <strong>Letter of support from your department chair, Dean, or other relevant institutional leader.</strong> 
            If your proposal is contingent on some type of institutional support (i.e. teaching a particular class in a particular term, commitment of computational or other university/department resources, 
            collaboration or cooperation of other faculty at your institution), 
            the letter of support should describe that commitment.  
          </li>
          <li>
            <strong>Statement</strong> committing to attend the MolSSI Faculty Fellows workshop in-person in Blacksburg, VA June 17-21, 2024
          </li>
        </ol>
      </Typography>

      <Typography variant="h2" gutterBottom>Program Structure</Typography>

      <Typography paragraph={true}>
      The fellowship is a two-year program over the course of two academic years.  
      We are currently recruiting our 2024 class of fellows, who will have a fellowship period of June 2024-May 2026.  
      Over this two year period, faculty will develop a curricular activity that integrates programming and computation into a course they teach, 
      pilot their activity with their own students at their own institution, and create a high-quality curriculum module (called a teaching kit) that will be shared through the ACT-CMS curriculum portal hosted by the MolSSI.
      </Typography>

      <Typography paragraph={true}>
      Faculty Fellows will participate in a weeklong workshop at MolSSI HQ in Blacksburg, 
      Virginia during the summer (June) of each of their fellowship years. 
      This workshop will offer training in cyberinfrastructure (CI) skills and curriculum design and assessment.  
      The Fellows will work closely with the ACT-CMS leadership team and collaborate with the other Fellows.  
      Each fellow will be assigned a CI mentor (a member of MolSSI staff) and a curriculum mentor (another faculty member) to work with on their curriculum development.  
      In the second year of the program, faculty will be assigned to serve as the curriculum mentor for a new fellow. 
      We anticipate selecting 10 fellows to participate in the program for the 2024-2026 cycle.  
      </Typography>

      <Typography paragraph={true}>
      Fellows will be paid a $3500 stipend each year of their fellowship.  
      All travel expenses associated with their participation in the Faculty Fellows Workshop are covered by the program.  
      Additionally, faculty will also receive travel support so they can present their teaching kit to their community at a conference or workshop for their discipline.  

      </Typography>


    </Container>

    
  </>

  );
}

export default FacultyFellows