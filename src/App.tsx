import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import BooksList from './components/BooksList';
import Header from './components/Header';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookDetails from "./components/BookDetails";
import { Box, Container, CssBaseline, Grid, Paper } from '@mui/material';

function App() {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
            <div className="App">
                    <Box>
                        <Routes>
                            <Route path="/" element={<SearchBar />} />
                            <Route path="/listbooks/:searchString" element={<BooksList />} />
                        </Routes>
                    </Box>
      </div>
         </Grid>
    <CssBaseline />
</Grid>
      
  );
}

export default App;
