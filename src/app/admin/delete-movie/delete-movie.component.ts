import { Component, OnInit } from '@angular/core';

import { MoviesService } from './../../movies/shared/services/movies.service';
import { Movie } from './../../movies/shared/models/movie.model';

@Component({
  selector: 'movie-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.scss']
})
export class DeleteMovieComponent implements OnInit {

  movies: any;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.moviesService.getMovies()
    .subscribe((movies) => {
      this.movies = movies;
    });
  }

  deleteMovie(movie: Movie) {
    this.moviesService.deleteMovie(movie)
    .subscribe(() => {
      this.movies = this.movies.filter(c => c.id !== movie.id);
    });
  }
}
