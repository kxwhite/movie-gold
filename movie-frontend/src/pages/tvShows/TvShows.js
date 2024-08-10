import React from 'react'
import './TvShows.scss'
import { Box, Typography } from '@mui/material'
import ComingSoonCard from '../../components/common/cards/comingSoonCard/ComingSoonCard'

export default function TvShows({ series }) {

  return (
    <Box className="tvshows-main-container">
      <Typography variant="h4" component="h1" gutterBottom sx={{ pl: 6, pt: 6, pb:2, fontWeight: '900 !important' }}>
        Tv Shows
      </Typography>
      <Box className='tvshows-card-image-container' sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {series.slice(20,41).map((item, id) => {
          return (
            <ComingSoonCard
              key={id}
              img={item.image.original}
              title={item.name}
              date={item.premiered}
            />
          );
        })}
      </Box>
    </Box>
  )
}
