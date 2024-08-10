import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import api from './api/axiosConfig';

import { ThemeProvider } from "@mui/material";
import theme from "./theme/Theme"

import Layout from './components/Layout';
import Trailer from './components/trailer/Trailer';
import Reviews from './pages/reviews/Reviews';
import NotFound from './pages/notFound/NotFound';
import Movie from './pages/movie/Movie';
import SideNav from './components/sideNav/SideNav';
import Categories from './pages/categories/Categories';
import Home from './pages/home/Home';
import Watchlist from './pages/watchlist/Watchlist';
import ComingSoon from './pages/comingSoon/ComingSoon';
import NewReleases from './pages/newReleases/NewReleases';
import Settings from './pages/settings/Settings';
import Movies from './pages/movies/Movies';
import Animes from './pages/animes/Animes';
import Series from './pages/series/Series';
import TvShows from './pages/tvShows/TvShows';

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [animes, setAnimes] = useState([]);
  const [anime, setAnime] = useState();
  const [series, setSeries] = useState([]);
  const [seriesSingle, setSeriesSingle] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
    } catch (error) {
      console.log(error);
    }
  }

  const getAnimes = async () => {
    try {
      const response = await api.get("/api/v1/animes");
      // console.log(response.data);
      setAnimes(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getAnimeData = async (animeId) => {
    try {
      const response = await api.get(`/api/v1/animes/${animeId}`);
      const singleAnime = response.data;
      setAnime(singleAnime);
    } catch (error) {
      console.log(error);
    }
  }

  const getSeries = async () => {
    try {
      const response = await api.get("/api/v1/series");
      // console.log(response.data);
      setSeries(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getSeriesData = async (seriesId) => {
    try {
      const response = await api.get(`/api/v1/series/${seriesId}`);
      const singleSeries = response.data;
      setSeriesSingle(singleSeries);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
    getAnimes();
    getSeries();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SideNav movies={movies} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home movies={movies} />} />
            <Route path="/Home" element={<Home movies={movies} />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Watchlist" element={<Watchlist />} />
            <Route path="/ComingSoon" element={<ComingSoon />} />
            <Route path="/NewReleases" element={<NewReleases />} />
            <Route path="/Movies" element={<Movies movies={movies} />} />
            <Route path="/Animes" element={<Animes animes={animes} />} />
            <Route path="/Series" element={<Series series={series} />} />
            <Route path="/TvShows" element={<TvShows series={series} />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
            <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}/>
            <Route path="/Movies/:movieId" element={<Movie getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
