package com.kxw.dev.movies;

import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "reviews")
@Data // Takes care of Getters, Setters and String method
@AllArgsConstructor // Takes care of constructor
@NoArgsConstructor // Takes care of constructor
public class Review {

  @Id
  private ObjectId id;

  private String body;

  private String title;

  private String username;

  private String avatar;

  private Integer rating;

  private Date timestamp;


  public Review(String body, String title, String username, String avatar, Integer rating) {
    this.body = body;
    this.title = title;
    this.username = username;
    this.avatar = avatar;
    this.rating = rating;
    this.timestamp = new Date();
  }
}
