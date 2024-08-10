import React, { useState } from 'react'
import './WatchlistCard.scss'
import { Nightcrawler } from '../../../../data/ExtraMoviesData'
import { Box } from '@mui/material'
import CancelIcon from "@mui/icons-material/Cancel";

export default function WatchlistCard() {
  const [showCancelBtn, setShowCancelBtn] = useState(false)

  function OnMouseEnter() {
    setShowCancelBtn(true)
  }

  function OnMouseLeave() {
    setShowCancelBtn(false)
  }
  return (
    <Box sx={{ ml: 4 }} className="watchlist-main-container">
      <Box className="watchlist-img-container" onMouseEnter={OnMouseEnter} onMouseLeave={OnMouseLeave}>
        {showCancelBtn && <CancelIcon sx={{ fontSize: '3rem', cursor: 'pointer' }} className="watchlist-cancel-btn" />}
        <img src={Nightcrawler} alt="Movie" className="watchlist-img"/>
      </Box>
    </Box>
  );
}
