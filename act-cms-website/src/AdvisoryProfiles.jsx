import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';

import Headshot from './assets/headshot.svg';

const HeadshotComponent = () => {
    return (
        <img src={Headshot} alt="description" style={{ filter: 'invert(100%)', maxWidth: '120px' }} />
    )
  }

const profiles = [
  { name: 'Jay Foley', title: 'University of North Carolina, Charlotte' },
  { name: 'Bonnie Hall', title: 'Grand View University' },
  { name: 'Geoff Hutchison', title: 'University of Pittsburgh' },
  { name: 'Grace Stokes', title: 'Santa Clara University' },
  { name: 'Katsuyo Thornton', title: 'University of Michigan' },
];

const ProfileCard = ({ name, title }) => {
  return (
    <Paper elevation={3} sx={{ padding: 1, textAlign: 'center' }}>
        <HeadshotComponent />   
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body2">{title}</Typography>
    </Paper>
  );
};

const AdvisoryTeamGrid = () => {
  return (
    <Grid container spacing={4}>
      {profiles.map((profile, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <ProfileCard name={profile.name} title={profile.title} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AdvisoryTeamGrid;
