import React from 'react'
import "./ComingSoonCard.scss";
import { Box, Typography } from "@mui/material";
import DateFormatter from '../../../../hooks/DateFormatter';

function ComingSoonCard({ img, title, date}) {
  return (
    <Box className='comingsoon-card-image-container' sx={{ pl: 5, display: 'flex', flexWrap: 'wrap' }}>
      <Box className='comingsoon-card-image-sub-container'sx={{ display: 'flex'}}>
        <img src={img} alt={title} className='comingsoon-card-image'/>
        <Box className="comingsoon-card-img-text">
          <Typography variant="body1" sx={{ pl: 2, pt: 2, fontWeight: '900 !important', maxWidth: '174px' }}>
            {title}
          </Typography>
          <Typography variant="caption" noWrap sx={{ pl: 2, fontWeight: '900 !important' }}>
            <DateFormatter date={date}/>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ComingSoonCard
