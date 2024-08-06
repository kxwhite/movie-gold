package com.kxw.dev.movies;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "movies")
@Data // Takes care of Getters, Setters and String method
@AllArgsConstructor // Takes care of constructor
@NoArgsConstructor // Takes care of constructor
public class Movie {

  @Id
  private ObjectId id;

  private String imdbId;

  private String title;

  private String director;

  private String duration;

  private String pgRating;

  private String description;

  private List<CastMember> cast;

  private String releaseDate;

  private String trailerLink;

  private String poster;

  private List<String> genres;

  private List<String> backdrops;

  private List<String> movieScenes;

  @DocumentReference
  private List<Review> reviewIds;
}
