import React, { lazy, Suspense, useEffect } from 'react'
import { HashRouter as Router, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'; 
import { Container } from '@mui/material';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import './App.css'
import theme from './theme';

const FacultyFellowship = lazy(() => import('./pages/Faculty_Fellowship'));
const CurricularMaterials = lazy(() => import('./pages/Curricular_Materials'));
const EducatorCommunity = lazy(() => import('./pages/Educator_Community'));
const Leadership = lazy(() => import('./pages/Leadership'))
const AdvisoryBoard = lazy(() => import('./pages/Advisory_Board'));
const FacultyFellows = lazy(() => import('./pages/Faculty_Fellows'));


import Home from './pages/Home'
import ResponsiveAppBar from './NavBar';
import { AppRoutes } from './Router';

const pages = {
  'Home': <Home />,
  'Faculty Fellowship Program': <Suspense fallback={<div>Loading...</div>}><FacultyFellowship /></Suspense>,
  'Foundational Modules': <Suspense fallback={<div>Loading...</div>}><CurricularMaterials /></Suspense>,
  //'Educator Community': <Suspense fallback={<div>Loading...</div>}><EducatorCommunity /></Suspense>,
  'Leadership': <Suspense fallback={<div>Loading...</div>}><Leadership /></Suspense>, 
  'Advisory Board': <Suspense fallback={<div>Loading...</div>}><AdvisoryBoard /></Suspense>,
  'Faculty Fellows': <Suspense fallback={<div>Loading...</div>}><FacultyFellows /></Suspense>,

};

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component does not render anything
};


function Content() {
  const location = useLocation();
  return (
    <>
    <ResponsiveAppBar pages={pages} />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes pages={pages} />
      </Suspense>
    </>
  );
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ marginBottom: "30px" }}>
        <Router>
          <ScrollToTop />
          <Container maxWidth={false} sx={{marginTop: "50px", paddingBottom: "75px" }}  >
            <Content />
          </Container>
        </Router>
      </Container>
      <Container maxWidth="100%">
      <Typography paragraph={true}>
          ACT-CMS is generously funded by the National Science Foundation 
          Training-based Workforce Development for Advanced Cyberinfrastructure program (
          <Link href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2321044">OAC 2321044</Link>,
          <Link href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2321045">OAC 2321045</Link>).
      </Typography>
        
      </Container>
    </ThemeProvider>  
  )
}

export default App
