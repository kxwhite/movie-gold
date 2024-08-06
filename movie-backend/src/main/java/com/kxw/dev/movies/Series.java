package com.kxw.dev.movies;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "series")
@Data // Takes care of Getters, Setters and String method
@AllArgsConstructor // Takes care of constructor
@NoArgsConstructor // Takes care of constructor
public class Series {

  @Id
  private ObjectId id;

  private String url;

  private String name;

  private List<String> genres;

  private String premiered;

  private Rating rating;

  private Image image;

  private String summary;
}
