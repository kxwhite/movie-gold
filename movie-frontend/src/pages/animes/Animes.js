import React from 'react'
import './Animes.scss';
import { Box, Typography } from '@mui/material';
import Progress from '../../components/common/progress/Progress'

function Animes({ animes }) {
  return (
    <Box className="animes-container" sx={{ px: 6, pt: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: '900 !important' }}>
        Anime
      </Typography>
      {animes?.map(anime => (
        <Box key={anime.uid} className="animes-row-container" sx={{ my: 6, display: 'flex', alignItems: 'center' }}>
          <img className="animes-img" src={anime?.img_url} alt={anime?.title} />
          <Box className="animes-info-container" sx={{ p: 3, height: '205px', width: '100%' }}>
            <Progress value={Math.round((anime?.score) * 10)}/>
            <Box sx={{ mb: "1rem" }}>
              <Typography variant="h6" className="animes-title" sx={{ color: 'white', fontWeight: '900 !important' }}>
                {anime?.title}
              </Typography>
              <Typography variant="caption" className="animes-aired" sx={{ color: 'lightgrey' }}>
                {anime?.aired}
              </Typography>
            </Box>
            <Typography variant="body2" className="animes-desc" sx={{ color: 'white' }}>
              {anime?.synopsis.length > 200 ? `${anime?.synopsis.slice(0, 200)}...` : anime?.synopsis}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Animes
