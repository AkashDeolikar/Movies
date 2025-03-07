package dev.farhan.movieist.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import java.util.logging.Logger;

@Service
public class MovieService {
    private static final Logger logger = Logger.getLogger(MovieService.class.getName());

    @Autowired
    private MovieRepository repository;

    public List<Movie> findAllMovies() {
        logger.info("Fetching all movies from database...");
        List<Movie> movies = repository.findAll();
        logger.info("Found " + movies.size() + " movies.");
        return movies;
    }
}


//@Service
//public class MovieService {
//
//    @Autowired
//    private MovieRepository repository;
//
//    public List<Movie> findAllMovies() {
//        return repository.findAll();
//    }
//    public Optional<Movie> findMovieByImdbId(String imdbId) {
//        return repository.findMovieByImdbId(imdbId);
//    }
//}
