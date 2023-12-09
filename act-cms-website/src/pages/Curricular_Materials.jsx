import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function CurricularMaterials() {
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
        Foundational Modules
      </Typography>
      
    </Box>

    <Container sx={{ padding: 3, backgroundColor: "rgba(255, 255, 255, 0.10)" }} maxWidth={false} >

      <Typography paragraph={true}>
      Each Faculty Fellow will develop discipline-specific modules for use in molecular sciences classrooms integrating computation and programming. 
      These materials will all be released under permissive licenses to allow broad adoption.
      </Typography>

      <Typography paragraph={true}>
      Building on existing MolSSI Education material, ACT-CMS will also provide a number of foundational modules for use in science classrooms.
      </Typography>
      
      <Typography paragraph={true}>
      <strong>Introduction to Programming:</strong> This foundational module will introduce fundamental programming concepts in Python and C++, 
      including assignments, expressions, conditionals, data types, and syntax using examples relevant to molecular scientists. 
      It also will cover key tools such as Jupyter notebooks, text editors, and Integrated Development Environments (IDEs). 
      </Typography>

      <Typography paragraph={true}>
      <strong>Scientific Python Libraries and Data Fitting:</strong> This foundational module will introduce the core packages of the Scientific Python ecosystem, 
      including NumPy, pandas, SciPy, and matplotlib. 
      These packages will be applied to problems commonly encountered in chemistry and other molecular science disciplines.
      </Typography>

      <Typography paragraph={true}>
        <strong>Data Science, Machine Learning and High-Performance Computing:</strong> This set of foundational modules will introduce fundamental concepts in data science, 
        machine learning, and  high-performance computing using Python and C++.
      </Typography>

    </Container>
    </>
  );
}

export default CurricularMaterials