import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.0
};



const AnimatedPage = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);


export const AppRoutes = ({ pages }) => (
    <Routes>
      <Route path='/' element={<AnimatedPage>{pages['Home']}</AnimatedPage>} />
      {Object.keys(pages).map((page, index) => (
        <Route key={page} path={`/${page.replace(" ", "_").toLowerCase()}`} element={
          <AnimatedPage key={location.pathname}>
            <Suspense fallback={<div>Loading...</div>}>
              {pages[page]}
            </Suspense>
          </AnimatedPage>
        } />
      ))}
    </Routes>
  );