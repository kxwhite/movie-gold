import React from 'react'
import './PgRating.scss'
import { Box } from '@mui/material'

function PgRating({ rating }) {
  return (
    <Box className="pg">{rating}</Box>
  )
}

export default PgRating
