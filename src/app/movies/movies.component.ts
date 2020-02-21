import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/services/movies.service';
import { Movie } from './shared/models/movie.model';
import { User } from './shared/models/user.model';

@Component({
  selector: 'movie-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  isMovies: any;
  isGenres: any;
  searchValue = '';
  searchField = 'name';
  view: boolean;
  user: User;
  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  getMovies() {
    this.moviesService.getMovies()
    .subscribe((movies: Movie[]) => {
      this.isMovies = movies;
    });
  }
}
