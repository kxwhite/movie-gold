import React from 'react'
import './PlayerCard.scss'

import { Box, Typography } from '@mui/material'
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ShineCard from '../shineCard/ShineCard';

function PlayerCard({img, title, season, playpause}) {
  return (
    <Box className="player-card-container">
      <ShineCard image={img} name={title} width="100%" height="175px" classStyle='player-card-img' />
      <Box className="player-card-info-container">
        <Box className="player-card-info">
          <PlayCircleIcon className='player-card-play-icon' fontSize='large'/>
          <Box>
            <Typography variant="body1" fontSize={14} noWrap ><b>{title}</b></Typography>
            <Typography variant="body1" fontSize={10} noWrap >{season}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PlayerCard
