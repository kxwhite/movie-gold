import React from "react";
import "./Carousel.scss";
import Carousel from "react-material-ui-carousel";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function HomeCarousel({ movies }) {
  const navigate = useNavigate();

  const movieSelect = (movieId) => {
    navigate(`/Movies/${movieId}`);
  };

  const reviewsSelect = (movieId) => {
    navigate(`/Reviews/${movieId}`);
  };

  return (
    <div className="movie-carousel-container">
      <Carousel
        indicatorIconButtonProps={{
          style: {
            // padding: "10px",
            margin: "0 3px",
            width: "10px",
            height: "10px",
            color: "transparent",
            border: "2px solid #5C5C62",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: "#41EAD4",
            border: "none",
          },
        }}
        indicatorContainerProps={{
          style: {
            zIndex: 1,
            position: "relative",
            bottom: "50px",
          },
        }}
      >
        {movies.map((movie) => {
          return (
            <Paper key={movie.imdbId}>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url(${movie.backdrops[0]})`,
                  }}
                >
                  <div className="movie-details">
                    <Box className="movie-details-left">
                      <Typography variant="h5" fontWeight="bold" noWrap className="movie-title">{movie.title}</Typography>
                      <Typography variant="subtitle1" noWrap className="movie-year">{movie.genres[0]} | {movie.releaseDate.substring(0, 4)}</Typography>
                    </Box>
                    <Box className="movie-details-right">
                      <Button onClick={() => movieSelect(movie.imdbId)} variant="contained" className="movie-watch-btn" sx={{color: '#011627', backgroundColor: '#41EAD4', ":hover": { backgroundColor: '#3ad5c0'}}}>Watch Now</Button>
                      <Button onClick={() => navigate(`/Trailer/${movie.trailerLink.substring(
                          movie.trailerLink.length - 11
                        )}`)} variant="outlined" className="movie-trailer-btn" sx={{color: '#41EAD4', borderWidth: 2, borderColor: '#1D887A', mx: 1, ":hover": {borderWidth: 2, borderColor: '#41EAD4'}}}>Trailer</Button>
                      <Button variant="outlined" className="movie-reviews-btn" sx={{color: '#41EAD4', borderWidth: 2, borderColor: '#1D887A', ":hover": {borderWidth: 2, borderColor: '#41EAD4'}}} onClick={() => reviewsSelect(movie.imdbId)}> Reviews</Button>
                      <Button variant="outlined" className="movie-add-btn" sx={{color: '#41EAD4', borderWidth: 2, borderColor: '#1D887A', mx: 1, width: '38px', paddingInline: '5px', ":hover": {borderWidth: 2, borderColor: '#41EAD4', width: '38px'}}}><AddRoundedIcon /></Button>
                    </Box>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
}
