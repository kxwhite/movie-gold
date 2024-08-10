import React from 'react';
import './CatCards.scss';
import { Grid, Typography } from '@mui/material';

import Crime from '../../../../assets/categoriesAssets/catImages/crime.png'
import Action from '../../../../assets/categoriesAssets/catImages/action.jpeg'
import Western from '../../../../assets/categoriesAssets/catImages/western.webp'
import TvShows from '../../../../assets/categoriesAssets/catImages/tvshows.jpeg'
import Superheros from '../../../../assets/categoriesAssets/catImages/superheros.png'
import Animated from '../../../../assets/categoriesAssets/catImages/animated.png'
import Drama from '../../../../assets/categoriesAssets/catImages/drama.png'
import SciFi from '../../../../assets/categoriesAssets/catImages/sci-fi.jpeg'
import Thriller from '../../../../assets/categoriesAssets/catImages/thriller.webp'

function CatCards() {

  const categories = [
    {image: Crime, category: "Crime" },
    {image: Action, category: "Action" },
    {image: Western, category: "Western" },
    {image: TvShows, category: "Tv Shows" },
    {image: Superheros, category: "Superheros" },
    {image: Animated, category: "Animated" },
    {image: Drama, category: "Drama" },
    {image: SciFi, category: "Sci-fi" },
    {image: Thriller, category: "Thriller" },
  ];

  return (
    <div className='cat-grid-container'>
      {categories.map((item, id) => {
        return (
          <div key={id} className='cat-container shine-overlay'>
            <div className="cat-img-overlay"></div>
            <img src={item.image} alt="" className='cat-images'/>
            <div className="shine"></div>
            <Typography variant="body1" noWrap className='cat-title'>{item.category}</Typography>
          </div>
        )
      })}
    </div>
  )
}

export default CatCards
