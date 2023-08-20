import React from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar,Typography,InputBase, Box, IconButton  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


import {Search, SearchIconWrapper, StyledInputBase} from './styles.js';
const Header = ({ onPlaceChanged, onLoad }) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Travel Buddy
          </Typography>
          <Typography variant="h6" noWrap component="div" align = "right" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Explore New Places
          </Typography>
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}/>
          </Search>
          {/* </Autocomplete> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header