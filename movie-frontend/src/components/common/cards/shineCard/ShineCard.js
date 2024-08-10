import React from 'react'
import './ShineCard.scss';
import { Box } from '@mui/material';

function ShineCard({ name, image, width, height, classStyle }) {
  return (
    <Box className={`shine-container shine-overlay ${classStyle}`}>
      <Box className="shine-img-overlay" style={{ width: width, height: height }}></Box>
      <img src={image} alt={name} className="shine-images" style={{ width: width, height: height }} />
      <Box className="shine" style={{ width: width, height: height }}></Box>
    </Box>
  );
}

export default ShineCard
