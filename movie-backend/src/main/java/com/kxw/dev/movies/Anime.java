package com.kxw.dev.movies;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "animes")
@Data // Takes care of Getters, Setters and String method
@AllArgsConstructor // Takes care of constructor
@NoArgsConstructor // Takes care of constructor
public class Anime {

  @Id
  private ObjectId id;

  private Number uid;

  private String title;

  private String synopsis;

  private List<String> genre;

  private String aired;

  private Number episodes;

  private Number members;

  private Number popularity;

  private Number ranked;

  private Float score;

  private String img_url;

  private String link;
}
