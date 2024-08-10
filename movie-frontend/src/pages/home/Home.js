import React from 'react'
import './Home.scss'
import ShineCard from '../../components/common/cards/shineCard/ShineCard';
import HomeCarousel from "../../components/carousel/Carousel";
import PlayerCard from "../../components/common/cards/playerCard/PlayerCard";
import { homeMovieData, lovedeathrobots, blackmirror } from '../../data/ExtraMoviesData';

import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import AddRoundedIcon from '@mui/icons-material/AddRounded';


export default function Home({movies}) {
  return (
    <Box className="home-container">
      <Box className="home-left-section-container">
        <HomeCarousel movies={movies} />
        <Typography variant="h6" noWrap sx={{ml: '22px'}}>Recents</Typography>
        <Box className='home-recents-image-container'>
          {homeMovieData.map((item, id) => {
            return (
              <ShineCard key={id} image={item} name={item} width="184px" height="315px" />
            )
          })}
        </Box>
      </Box>
      <Divider orientation='vertical' variant="middle" flexItem sx={{mx: 3, ml:5, backgroundColor: '#5C5C62', width: 2}}/>
      <Box className="home-right-section-container">
        <Typography variant="h6" noWrap >Continue watching</Typography>
        <Box className="home-right-section-cards">
          <PlayerCard img={lovedeathrobots} title="Love, Death, and Robots" season="Season 3 | Ep 2" playpause={PlayCircleIcon}/>
          <PlayerCard img={blackmirror} title="Black Mirror" season="Season 2 | Ep 4" playpause={PauseCircleIcon}/>
        </Box>
        <Grid container spacing={1}>
            {["Action", "Drama", "Supernutural", "Comedy", "Documentary", "Horror", "Romance", "Sci-fi", "Thriller", "Adventure", "Historical", "Musical"].map((item, id) => {
              return (
                <Grid item key={id}>
                  <Button variant="outlined" endIcon={<AddRoundedIcon />} className="home-add-category-btn" sx={{color: '#41EAD4', borderWidth: 2, borderColor: '#1D887A', ":hover": {borderWidth: 2, borderColor: '#41EAD4'}}}>{item}</Button>
                </Grid>
              )
            })}
        </Grid>
      </Box>
    </Box>
  );
}
