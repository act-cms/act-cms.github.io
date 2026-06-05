import React, { useEffect } from 'react';

import { Grid, Paper } from '@mui/material';

import ReactMarkdown from 'react-markdown';

import Headshot from '../assets/headshot.svg';


const HeadshotComponent = () => {
    return (
        <div style={{
            width: '120px',
            height: '120px',
            backgroundColor: 'rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img src={Headshot} alt="No photo available" style={{ filter: 'invert(100%)', opacity: 0.2, width: '70%' }} />
        </div>
    )
  }

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
        return (
          <img
            src={headshot}
            alt="Headshot"
            style={{ width: '100%', maxWidth: '160px', height: 'auto', display: 'block', margin: '0 auto' }}
          />
        );
      }
    };

    return (
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={3} sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            { renderHeadshot() }
          </Grid>
          <Grid item xs={12} md={9} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <ReactMarkdown
              components={{
                h2: ({ children }) => <p style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 4px' }}>{children}</p>,
                p: ({ children }) => <p style={{ fontSize: '0.95rem', margin: '2px 0', lineHeight: 1.5 }}>{children}</p>,
              }}
            >{bio}</ReactMarkdown>
          </Grid>
        </Grid>
      </Paper>
    );
  };

const TeamGrid = ( {profiles} ) => {
return (
    <Grid container spacing={4}>
    {profiles.map((profile, index) => (
        <Grid item xs={12} sm={6} key={index}>
        <ProfileCard headshot={profile.headshot} markdown_file={profile.markdown_file} />
        </Grid>
    ))}
    </Grid>
);
};


export default TeamGrid;