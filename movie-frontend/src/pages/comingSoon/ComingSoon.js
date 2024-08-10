import React from 'react'
import './ComingSoon.scss'
import { Box, Typography } from '@mui/material'
import ComingSoonCard from '../../components/common/cards/comingSoonCard/ComingSoonCard'

import { upcomingMovies } from "../../data/ExtraMoviesData";

export default function ComingSoon() {

  return (
    <Box className="comingsoon-main-container">
      <Typography variant="h4" component="h1" gutterBottom sx={{ pl: 6, pt: 6, pb:2, fontWeight: '900 !important' }}>
        Coming Soon
      </Typography>
      <Box className='comingsoon-card-image-container' sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {upcomingMovies.map((item, id) => {
          return (
            <ComingSoonCard
              key={id}
              img={item.image}
              title={item.name}
              date={item.releaseDate}
            />
          );
        })}
      </Box>
    </Box>
  )
}
