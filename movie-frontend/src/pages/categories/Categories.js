import React, { useState } from 'react'
import './Categories.scss'
import ShuffleCards from '../../components/common/cards/shuffleCards/ShuffleCards'
import CatCards from '../../components/common/cards/catCards/CatCards'
import { categoryMovies } from '../../data/ExtraMoviesData'

import { Box, Typography } from '@mui/material'
import PgRating from '../../components/common/pgRating/PgRating'

function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  function mouseOver(index) {
    setHoveredIndex(index);
  }

  function mouseLeave() {
    setHoveredIndex(null);
  }

  return (
    <Box className="cat-main-container">
      <Box className="cat-left-container">
        <ShuffleCards />
      </Box>
      <Box className="cat-right-container">
        <Typography variant="h6" noWrap sx={{mt: '20px'}}>Genres</Typography>
        <CatCards />
        <Typography variant="h6" noWrap sx={{mt: '20px'}}>Best New Films</Typography>
         <Box className='cat-new-films-image-container' onWheel={handleScroll}>
          <Box className='cat-new-films-image-slide'>
            {categoryMovies.map((movie, index) => {
              return (
                <Box
                  key={index}
                  className="cat-new-films-item"
                  onMouseEnter={() => mouseOver(index)}
                  onMouseLeave={mouseLeave}
                >
                  <img
                    src={hoveredIndex === index ? movie.sceneImage : movie.image}
                    alt={movie.title}
                    className={`cat-new-films-image ${hoveredIndex === index ? "hovered" : ""}`}
                  />
                  <Box className="cat-overlay"></Box>
                  {hoveredIndex === index && (
                    <Box className="cat-new-films-info" sx={{ width: '100%'}}>
                      <Typography variant="h5" sx={{ fontWeight: '900 !important', textWrap: 'wrap' }}>
                        {movie.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50%' }}>
                        <PgRating rating={movie.rating} />
                        <Typography variant="body1" sx={{ fontWeight: '900 !important', textWrap: 'wrap' }}>
                          {movie.duration}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: '900 !important', textWrap: 'wrap' }}>
                          {movie.releaseYear}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Categories
