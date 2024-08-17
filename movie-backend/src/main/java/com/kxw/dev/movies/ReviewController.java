package com.kxw.dev.movies;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = { "http://localhost:3000", "https://kxw-movie-gold.onrender.com/" })
@RequestMapping("/api/v1/reviews")
public class ReviewController {
  @Autowired
  private ReviewService reviewService;

  private static final Logger logger = LoggerFactory.getLogger(MovieController.class);

  @GetMapping
  public ResponseEntity<List<Review>> getAllReviews() {
    List<Review> reviews = reviewService.allReviews();
    logger.info("Returning {} reviews from the API.", reviews.size());
    return new ResponseEntity<>(reviews, HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
    String reviewBody = payload.get("reviewBody");
    String imdbId = payload.get("imdbId");
    String title = payload.get("title");
    String username = payload.get("username");
    String avatar = payload.get("avatar");
    Integer rating = Integer.parseInt(payload.get("rating"));

    return new ResponseEntity<Review>(reviewService.createReview(reviewBody, imdbId, title, username, avatar, rating), HttpStatus.CREATED);
  }

  @DeleteMapping("/{reviewId}")
  public ResponseEntity<Void> deleteReview(@PathVariable("reviewId") ObjectId reviewId, @PathVariable("imdbId") String imdbId) {
      Optional<Review> existingReview = reviewService.findByReviewId(reviewId);
      if (existingReview.isPresent()) {
          reviewService.deleteReview(reviewId, imdbId);
          return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }
}
