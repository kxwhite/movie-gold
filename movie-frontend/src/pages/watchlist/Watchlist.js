import React, { useState } from 'react'
import './Watchlist.scss'
import { Box, Typography } from '@mui/material'
import CustomTab from '../../components/common/tab/Tab';
import WatchlistCard from '../../components/common/cards/watchlistCard/WatchlistCard';

export default function Watchlist() {
  const [movieCount, setMovieCount] = useState(1);
  const [seriesCount, setSeriesCount] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box className="watchlist-main-container">
      <Box className="watchlist-nav-container">
        <Box className="watchlist-nav-left" sx={{ p: 6 }}>
          <Typography variant="h6" noWrap sx={{ pr: 3, fontWeight: '900 !important', color: '#C8CACC' }}>
            My Watchlist
          </Typography>
          <CustomTab labels={[{name: "Movie", count: movieCount}, {name: "Series", count: seriesCount}]} onTabChange={handleTabChange} />
        </Box>
          {
            activeTab === 0 && movieCount === 0 &&
            <Typography variant="body1" noWrap sx={{ ml: 6, color: '#C8CACC' }}>
              You haven't added any movies to your watchlist.
            </Typography>
          }
          {
            activeTab === 1 && seriesCount === 0 &&
            <Typography variant="body1" noWrap sx={{ ml: 6, color: '#C8CACC' }}>
              You haven't added any series to your watchlist.
            </Typography>
          }
          {activeTab === 0 && movieCount > 0 && <WatchlistCard />}
      </Box>
    </Box>
  )
}
