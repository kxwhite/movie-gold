import React from 'react'
import './Movies.scss'
import { Box, Typography } from '@mui/material'
import ComingSoonCard from '../../components/common/cards/comingSoonCard/ComingSoonCard'

import { upcomingMovies } from '../../data/ExtraMoviesData'

export default function Movies({ movies }) {
  return (
    <Box className="movies-main-container">
      <Typography variant="h4" component="h1" gutterBottom sx={{ pl: 6, pt: 6, pb:2, fontWeight: '900 !important' }}>
        Movies
      </Typography>
      <Box className='movies-card-image-container' sx={{ display: 'flex', flexWrap: 'wrap' }}>
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
        {movies.map((item) => {
          return (
            <ComingSoonCard
              key={item.imdbId}
              img={item.poster}
              title={item.title}
              date={item.releaseDate}
            />
          );
        })}
      </Box>
    </Box>
  )
}
