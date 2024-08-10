package com.kxw.dev.movies;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnimeService {

  @Autowired
  private AnimeRepository animeRepository;

  public List<Anime> allAnimes() {
    return animeRepository.findAll();
  }

  // Optional = can return null if no ID selected/Available
  public Optional<Anime> singleAnime(String uid) {
    return animeRepository.findAnimeByUid(uid);
  }
}
