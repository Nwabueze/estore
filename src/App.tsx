import React, { lazy, Suspense } from 'react';
import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import Details from './components/Details';
const Details = lazy(() => import('./components/Details'));
const Orders = lazy(() => import('./components/Orders'));
const HomePage = lazy(() => import('./pages/Home'));


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Suspense fallback={<Box>Loading...</Box>}>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/orders" element={<Orders />}/>
            <Route path="/details/:id" element={<Details />}/>
          </Routes>
        </Suspense>
      </Router>
    </ChakraProvider>
  );
}

export default App;
