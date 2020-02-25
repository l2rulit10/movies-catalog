import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi } from '../core/base-api';
import { Movie } from '../models/movie.model';

@Injectable()
export class MoviesService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.post('movies', movie);
  }

  getMovies(): Observable<Movie[]> {
    return this.get('movies');
  }

  getMovieById(id: string): Observable<Movie> {
    return this.get(`movies/${id}`);
  }

  deleteMovie(movie: Movie): Observable<Movie> {
    return this.delete(`movies/${movie.id}`);
  }
}
