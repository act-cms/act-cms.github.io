import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const exampleNewsItems = [
    {
      id: 1,
      title: 'Register for the 2026 Faculty Fellowship Info Session!',
      summary: 'Join us on January 30, 2026 for an ACT-CMS Faculty Fellowship Information Session. This session will cover application requirements, program expectations, and more.',
      link: 'https://molssi.typeform.com/to/u3lOVqZt',
      buttonText: 'Register Now',
    },
    {
      id: 2,
      title: '2026 Faculty Fellowship Application Now Open',
      summary: 'Applications for the 2026 Faculty Fellowship are now open. Apply by February 28, 2026 for consideration.',
      link: 'https://molssi.typeform.com/to/qaOlQ4aM',
      buttonText: 'Apply Here',
    },
  ];
  

const NewsScroll = ({ newsItems = exampleNewsItems }) => {
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        padding: 1,
        width: '100%',
      }}
    >
      {/* Navigation Button (Left) */}
      {/* <IconButton onClick={scrollLeft} sx={{ color: 'white', display: { xs: 'none', sm: 'block' } }}>
        <ChevronLeftIcon />
      </IconButton> */}

      {/* Scrollable News Cards */}
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: 2,
          padding: 1,
          width: '100%',
          '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
        }}
      >
        {newsItems.slice().reverse().map((item) => (
          <Card
            key={item.id}
            sx={{
              flex: '0 0 auto', // Prevent cards from shrinking
              scrollSnapAlign: 'start',
              width: { xs: '250px', sm: '400px' }, // Responsive card width
              padding: 2,
              backgroundColor: 'rgba(30, 30, 30, 1)', // Darker background for contrast
              color: 'white',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Soft shadow
              borderRadius: '8px', // Rounded corners
              border: '1px solid rgba(255, 255, 255, 0.1)', // Subtle border
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)', // Slight zoom on hover
                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: 2 }}>
                {item.summary}
              </Typography>

              {/* Determine Link Type */}
              {item.link.startsWith('http') ? (
                // External Link
                <Button
                  variant="contained"
                  color="primary"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: 'capitalize', // Optional: makes the button text easier to read
                  }}
                >
                  {item.buttonText}
                </Button>
              ) : (
                // Internal Link
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to={item.link}
                  sx={{
                    textTransform: 'capitalize', // Optional: makes the button text easier to read
                  }}
                >
                  {item.buttonText}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Navigation Button (Right) */}
      {/* <IconButton onClick={scrollRight} sx={{ color: 'white', display: { xs: 'none', sm: 'block' } }}>
        <ChevronRightIcon />
      </IconButton> */}
    </Box>
  );
};

export default NewsScroll;
