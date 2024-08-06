package com.kxw.dev.movies;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

  @Autowired
  public ReviewRepository reviewRepository;

  @Autowired
  private MongoTemplate mongoTemplate;

  private static final Logger logger = LoggerFactory.getLogger(ReviewService.class);

  public List<Review> allReviews(){
    return reviewRepository.findAll();
  }

  public Review createReview(String reviewBody, String imdbId, String title, String username, String avatar, Integer rating ) {
    Review review = reviewRepository.insert(new Review(reviewBody, title, username, avatar, rating));

    logger.info("Created Review: " + review);

    mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review))
                .first();

    return review;
  }

  public Optional<Review> findByReviewId(ObjectId reviewId) {
    logger.info("Fetching review with ID: " + reviewId);
    return reviewRepository.findById(reviewId);
  }

  public void deleteReview(ObjectId reviewId, String imdbId) {
    logger.info("Deleting review with ID: " + reviewId + " from movie with IMDb ID: " + imdbId);
    reviewRepository.deleteById(reviewId);

    mongoTemplate.update(Movie.class)
        .matching(Criteria.where("imdbId").is(imdbId))
        .apply(new Update().pull("reviewIds", reviewId))
        .first();
  }
}
