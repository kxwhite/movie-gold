package com.kxw.dev.movies;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping("/api/v1/animes")
public class AnimeController {

  @Autowired
  private AnimeService animeService;

  private static final Logger logger = LoggerFactory.getLogger(AnimeController.class);

  @GetMapping
  public ResponseEntity<List<Anime>> getAllAnimes() {
    List<Anime> animes = animeService.allAnimes();
    logger.info("Returning {} animes from the API.", animes.size());
    return new ResponseEntity<>(animes, HttpStatus.OK);
  }

  @GetMapping("/{uid}")
  public ResponseEntity<Optional<Anime>> getSingleAnime(@PathVariable String uid) {
    return new ResponseEntity<Optional<Anime>>(animeService.singleAnime(uid), HttpStatus.OK);
  }
}
