import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Rating } from '@mui/material';

import useStyles from "./styles"
const Map = ({setCoords, setBounds, coords, places}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)')
  // const coordinates = { lat: 0, lng: 0};
  
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
          
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={coords}
          center={coords}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={(e) => {
            setCoords({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={''} 
        >
        

      </GoogleMapReact>
    </div>
  )
}

export default Map