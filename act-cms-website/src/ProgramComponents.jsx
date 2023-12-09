import Grid from '@mui/material/Grid';

import HatIcon from './assets/graduation-cap-circular-button.svg'
import PuzzlePieces from './assets/two-puzzle-pieces.svg'  

const CapComponent = () => {
    return (
        <img src={HatIcon} alt="description" style={{ filter: 'invert(100%)', maxWidth: '120px' }} />
    )
}

const PuzzlePiecesComponent = () => {
    return (
        <img src={PuzzlePieces} alt="description" style={{ filter: 'invert(100%)', maxWidth: '120px' }} />
    )
}

const ProgramComponents = () => (
    <Grid 
    container 
    spacing={2} 
    style={{ 
      display: 'flex', 
      justifyContent: 'center', // Horizontal centering
      alignItems: 'center' // Vertical centering
    }}
  >
    <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
        <CapComponent />
        <div>Faculty Fellows</div>
    </Grid>
    <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
      <PuzzlePiecesComponent />
      <div>Open and Reusable Curricular Modules</div>
    </Grid>
    <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
      Hello!
    </Grid>
  </Grid>
);

export default ProgramComponents;
