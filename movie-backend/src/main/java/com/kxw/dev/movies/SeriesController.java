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
@RequestMapping("/api/v1/series")
public class SeriesController {

  @Autowired
  private SeriesService seriesService;

  private static final Logger logger = LoggerFactory.getLogger(SeriesController.class);

  @GetMapping
  public ResponseEntity<List<Series>> getAllSeries() {
    List<Series> series = seriesService.allSeries();
    logger.info("Returning {} Seriess from the API.", series.size());
    return new ResponseEntity<>(series, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Optional<Series>> getSingleSeries(@PathVariable String id) {
    return new ResponseEntity<Optional<Series>>(seriesService.singleSeries(id), HttpStatus.OK);
  }
}
