package com.kxw.dev.movies;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeriesService {

  @Autowired
  private SeriesRepository seriesRepository;

  public List<Series> allSeries() {
    return seriesRepository.findAll();
  }

  // Optional = can return null if no ID selected/Available
  public Optional<Series> singleSeries(String id) {
    return seriesRepository.findSeriesById(id);
  }
}
