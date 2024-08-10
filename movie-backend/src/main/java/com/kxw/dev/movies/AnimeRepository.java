package com.kxw.dev.movies;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AnimeRepository extends MongoRepository<Anime, ObjectId> {
  Optional<Anime> findAnimeByUid(String uid);
}
