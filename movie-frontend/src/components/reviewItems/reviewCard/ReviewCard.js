import React from 'react'
import './ReviewCard.scss'
import { Box, Avatar, Rating, Typography } from '@mui/material'
import StarIcon from "@mui/icons-material/Star";
import DateFormatter from '../../../hooks/DateFormatter';

function ReviewCard({ reviews, movie }) {
  return (
    <Box>
    {reviews?.slice().reverse().map((review, id) => {
      return (
        <Box key={id} className="reviewcard-main-container" sx={{ p: 3, my: 5 }}>
          <Rating name="read-only" value={review.rating} readOnly emptyIcon={<StarIcon style={{ color: '#C8CACC', opacity: 0.55 }} fontSize="inherit" />}/>
          <Box className="reviewcard-top-container" sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={review.avatar} alt={review.username} className='reviewcard-avatar' />
            <Box>
              <Typography variant="h5" component="h1" gutterBottom sx={{ mb: 0.5, fontWeight: "900 !important" }}>
                {review.title}
              </Typography>
              <Typography variant="caption" component="h1" gutterBottom>
                Written by <span className='reviewcard-name-span'>{review.username}</span> on {<DateFormatter date={review.timestamp} />}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" component="h1" gutterBottom sx={{ mt: 2 }}>
            {review.body}
          </Typography>
        </Box>
      )
    })}
    {movie?.reviewIds?.slice().reverse().map((review, id) => {
      return (
        <Box key={id} className="reviewcard-main-container" sx={{ p: 3, my: 5 }}>
          <Rating name="read-only" value={review.rating} readOnly emptyIcon={<StarIcon style={{ color: '#C8CACC', opacity: 0.55 }} fontSize="inherit" />}/>
          <Box className="reviewcard-top-container" sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={review.avatar} alt={review.username} className='reviewcard-avatar' />
            <Box>
              <Typography variant="h5" component="h1" gutterBottom sx={{ mb: 0.5, fontWeight: "900 !important" }}>
                {review.title}
              </Typography>
              <Typography variant="caption" component="h1" gutterBottom>
                Written by <span className='reviewcard-name-span'>{review.username}</span> on {<DateFormatter date={review.timestamp} />}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" component="h1" gutterBottom sx={{ mt: 2 }}>
            {review.body}
          </Typography>
        </Box>
      )
    })}
    </Box>
  );
}

export default ReviewCard
