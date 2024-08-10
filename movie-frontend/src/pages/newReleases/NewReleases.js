import React from 'react'
import './NewReleases.scss'
import { Box, Typography } from '@mui/material'
import ComingSoonCard from '../../components/common/cards/comingSoonCard/ComingSoonCard'

import { upcomingMovies } from "../../data/ExtraMoviesData";

export default function NewReleases() {

  return (
    <Box className="newreleases-main-container">
      <Typography variant="h4" component="h1" gutterBottom sx={{ pl: 6, pt: 6, pb:2, fontWeight: '900 !important' }}>
        New Releases
      </Typography>
      <Box className='newreleases-card-image-container' sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {upcomingMovies.slice().reverse().map((item, id) => {
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
