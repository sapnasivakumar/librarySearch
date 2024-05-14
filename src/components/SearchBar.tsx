
import * as React from 'react';
import { useState, useEffect } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Sample from './Sample';

export default function SearchBar() {
    const navigate = useNavigate();
    const handleClick = (searchQuery: String) => {
        navigate('/listbooks/'+searchQuery);
    }

    const [searchString, setSearchString] = useState('');

    function handleSearchString(value: string) {
        const splitString = value.split(' ');
        const searchQuery = splitString.join("+");
        setSearchString(searchQuery);
    }



    return (
        <Paper
        component="form"
        sx={{px: 2,py: 2, display: 'flex', alignItems: 'center', width: 400}}
      >
        <InputBase
          id="search"
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by Title, Author or ISBN"
          inputProps={{ 'aria-label': 'search by title, author or ISBN' }}
            onChange={(event) => {
                handleSearchString(event.target.value);
            }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search"   onClick={() => {
            alert(searchString);
            handleClick(searchString);
         }} >
          <SearchIcon />
        </IconButton>
        <Sample/>
      </Paper>
    )
}