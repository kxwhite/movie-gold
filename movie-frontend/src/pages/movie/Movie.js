import React, { useEffect, useState } from 'react'
import './Movie.scss'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Avatar, Box, Button, Divider, Typography } from '@mui/material';
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import ReviewRow from '../../components/reviewItems/reviewRow/ReviewRow';

function Movie({ getMovieData, movie, reviews, setReviews }) {
  const [favourite, setFavourite] = useState(false)
  const [play, setPlay] = useState(false)

  const navigate = useNavigate();

  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  function favouriteMovie() {
    setFavourite(prevState => !prevState)
  }

  function playMovie() {
    setPlay(prevState => !prevState)
  }

  return (
    <Box className="single-movie-container">
      <Box className="single-movie-hero-container">
        <Box className="movie-overlay">
          <img
            src={movie?.backdrops[1]}
            alt={movie?.title}
            className="single-movie-backdrop"
          />
        </Box>
        <img
          src={movie?.poster}
          alt={movie?.title}
          className="single-movie-poster"
        />
        <Box className="single-movie-title-container">
          <Box className="single-movie-star-container">
            <Typography variant="h4" noWrap className="single-movie-title">
              {movie?.title}
            </Typography>
            <Box onClick={favouriteMovie}>
              {favourite ? (
                <StarIcon
                  sx={{
                    color: "#41EAD4",
                    ":hover": { color: "#1D887A", cursor: "pointer" },
                  }}
                />
              ) : (
                <StarOutlineIcon
                  sx={{
                    color: "#C8CACC",
                    ":hover": { color: "white", cursor: "pointer" },
                  }}
                />
              )}
            </Box>
          </Box>
          <Typography variant="h6" noWrap className="single-movie-director">
            By {movie?.director}
          </Typography>
          {movie?.genres.map((genre, id) => {
            return (
              <Button
                key={id}
                variant="outlined"
                className="home-add-category-btn"
                sx={{
                  color: "#41EAD4",
                  borderWidth: 2,
                  borderColor: "#1D887A",
                  marginRight: "0.5rem",
                  ":hover": { borderWidth: 2, borderColor: "#41EAD4" },
                }}
              >
                {genre}
              </Button>
            );
          })}
        </Box>
      </Box>
      <Box className="single-movie-bottom-container">
        <Box
          className="single-movie-play-container"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            onClick={playMovie}
            variant="contained"
            className="single-movie-play-btn"
            sx={{
              fontSize: "3rem",
              backgroundColor: "#41EAD4",
              color: "#011627",
              padding: "10px 20px",
              width: "200px",
              textAlign: "center",
              borderRadius: "15px",
              cursor: "pointer",
              ":hover": { backgroundColor: "#1D887A" },
            }}
          >
            {play ? (
              <PauseRoundedIcon sx={{ fontSize: "3rem" }} />
            ) : (
              <PlayArrowRoundedIcon sx={{ fontSize: "3rem" }} />
            )}
          </Button>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ borderColor: "#C8CACC", mx: 2 }}
          />
          <Button
            onClick={() =>
              navigate(
                `/Trailer/${movie.trailerLink.substring(
                  movie.trailerLink.length - 11
                )}`
              )
            }
            variant="outlined"
            className="movie-trailer-btn"
            sx={{
              color: "#41EAD4",
              borderWidth: 2,
              borderColor: "#1D887A",
              padding: "10px 20px",
              borderRadius: "10px",
              ":hover": { borderWidth: 2, borderColor: "#41EAD4" },
            }}
          >
            Trailer
          </Button>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ borderColor: "#C8CACC", mx: 2 }}
          />
          <Typography
            variant="h6"
            noWrap
            className="single-movie-director"
            sx={{ mb: "0 !important", fontWeight: "900 !important" }}
          >
            {movie?.releaseDate.slice(0, 4)}
          </Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ borderColor: "#C8CACC", mx: 2 }}
          />
          <Typography
            variant="h6"
            noWrap
            className="single-movie-director"
            sx={{ mb: "0 !important", fontWeight: "900 !important" }}
          >
            Rated {movie?.pgRating}
          </Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ borderColor: "#C8CACC", mx: 2 }}
          />
          <Typography
            variant="h6"
            noWrap
            className="single-movie-director"
            sx={{ mb: "0 !important", fontWeight: "900 !important" }}
          >
            {movie?.duration}
          </Typography>
        </Box>
        <Box sx={{ my: 3, maxWidth: "40rem" }}>
          <Typography
            variant="h6"
            noWrap
            sx={{ mb: 1, fontWeight: "900 !important", color: "#C8CACC" }}
          >
            Description
          </Typography>
          <Typography variant="body1" sx={{ color: "#C8CACC" }}>
            {movie?.description}
          </Typography>
        </Box>
        <Box sx={{ my: 3 }}>
          <Typography
            variant="h6"
            noWrap
            sx={{ mb: 1, fontWeight: "900 !important", color: "#C8CACC" }}
          >
            Cast
          </Typography>
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            {movie?.cast.map((cast, id) => (
              <Box
                key={id}
                sx={{
                  width: 96,
                  textAlign: "center",
                  mr: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt={cast.name}
                  src={cast.image}
                  sx={{ width: 76, height: 76 }}
                />
                <Typography variant="body2" sx={{ color: "#C8CACC" }}>
                  {cast.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ mt: 3, mb: 10 }}>
          <Typography
            variant="h6"
            noWrap
            sx={{ mb: 1, fontWeight: "900 !important", color: "#C8CACC" }}
          >
            Movie Scenes
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gridAutoRows: "1fr",
              gap: "2.5rem",
            }}
          >
            {movie?.movieScenes.map((scene, id) => (
              <img
                key={id}
                src={scene}
                alt={`${movie?.title} Movie Scene ${id + 1}`}
                className="single-movie-scene-img"
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="single-movie-review-container" sx={{ mb: 10 }}>
        <Box>
          <Typography variant="h6" noWrap sx={{ mb: 4, fontWeight: "900 !important", color: "#C8CACC" }}>
            Reviews
          </Typography>
          {movie && movie?.reviewIds?.length > 0 ? (
            <ReviewRow reviews={reviews} movie={movie} slice={3} />
            ) : (
            <Typography variant="body1" component="h1" gutterBottom sx={{ mb: 3, fontWeight: '900 !important' }}>
              No reviews yet.
            </Typography>
          )}
          <Link to={`/Reviews/${movieId}`} className='single-movie-review-link'>{movie && movie?.reviewIds?.length > 0 ? "Read all reviews" : "Review this title"}</Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Movie
