package com.kxw.dev.movies;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieService {

  @Autowired
  private MovieRepository movieRepository;

  private static final Logger logger = LoggerFactory.getLogger(ReviewService.class);

  public List<Movie> allMovies(){
    logger.info("Fetching all movies");
    List<Movie> movies = movieRepository.findAll();
    logger.info("Fetched Movies: " + movies);
    return movies;

  }

  // Optional = can return null if no ID selected/Available
  public Optional<Movie> singleMovie(String imdbId){
    logger.info("Fetching movie with IMDb ID: " + imdbId);
    Optional<Movie> movie = movieRepository.findMovieByImdbId(imdbId);
    movie.ifPresent(value -> logger.info("Fetched Movie: " + value));
    return movie;
  }
}
