import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';

import Headshot from './assets/headshot.svg';

const HeadshotComponent = () => {
    return (
        <img src={Headshot} alt="description" style={{ filter: 'invert(100%)', maxWidth: '120px' }} />
    )
  }

const profiles = [
  { name: 'Jessica A. Nash', title: 'Program Director' },
  { name: 'Ashely McDonald', title: 'Director of Faculty Fellows Program' },
  { name: 'T. Daniel Crawford', title: 'Graduate Curriculum Mentor' },
  { name: 'Sina Mostafanejad', title: 'Machine Learning and High-Performance Computing Curriculum Mentor' },
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

const TeamGrid = () => {
  return (
    <Grid container spacing={4}>
      {profiles.map((profile, index) => (
        <>
        <Grid item xs={12} md={6} key={index}>
          <ProfileCard name={profile.name} title={profile.title} />
        </Grid>
        </>

      ))}
    </Grid>
  );
};

export default TeamGrid;
