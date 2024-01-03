import React, { useEffect } from 'react';

import { Grid, Paper } from '@mui/material';

import Headshot from './assets/headshot.svg';

import JayFoley from './assets/advisory_board/foley_jay.jpg';
import BonnieHall from './assets/advisory_board/hall_bonnie.jpg';
import GraceStokes from './assets/advisory_board/stokes_grace.jpg';

import ReactMarkdown from 'react-markdown';

const HeadshotComponent = () => {
    return (
        <img src={Headshot} alt="description" style={{ filter: 'invert(100%)', maxWidth: '80%' }} />
    )
  }

const profiles = [
  { headshot: JayFoley, markdown_file: '/bios/Jay_Foley.md'},
  { headshot: BonnieHall, markdown_file: '/bios/Bonnie_Hall.md'},
  { name: 'Geoff Hutchison', headshot: Headshot, markdown_file: '/bios/Geoff_Hutchison.md' },
  { headshot: GraceStokes, markdown_file: '/bios/Grace_Stokes.md' },
  { name: 'Katsuyo Thornton', headshot: Headshot, markdown_file: '/bios/Katsuyo_Thornton.md' },
];

const ProfileCard = ({ headshot, markdown_file }) => {
  const [bio, setBio] = React.useState(null);

  useEffect(() => {
    fetch(markdown_file)
      .then((response) => response.text())
      .then((text) => {
        setBio(text);
      });
  }, [markdown_file]);

  const renderHeadshot = () => {
    if (headshot === Headshot) {
      return <HeadshotComponent />;
    } else {
      return <img src={headshot} alt="Headshot" style={{ maxWidth: '80%', maxHeight: '300px' }} />;
    }
  };


  return (
    <Paper elevation={3} sx={{ padding: 1 }}>
      <Grid container>
        <Grid item sm={12} md={3} sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', // Center horizontally for small screens
          textAlign: 'center' 
        }}>
          { renderHeadshot() }
        </Grid>
        <Grid item sm={12} md={9} sx={{ textAlign: { sm: 'center', md: 'left' } }}>
          <ReactMarkdown>{bio}</ReactMarkdown>
        </Grid>
      </Grid>
    </Paper>
  );
};


const AdvisoryTeamGrid = () => {
  return (
    <Grid container spacing={4}>
      {profiles.map((profile, index) => (
        <Grid item xs={12} key={index}>
          <ProfileCard headshot={profile.headshot} markdown_file={profile.markdown_file} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AdvisoryTeamGrid;
