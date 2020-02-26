import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'movie-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  isMovie: any;
  movies: any;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
      this.moviesService.getMovieById(params['id']).subscribe((movie: any) => {
        this.isMovie = movie;
      });
    });
    this.moviesService.getMovies()
    .subscribe((res: any) => {
      this.movies = res;
    });
  }
  isInGenre(currentGenres: Array<string>, movieGenres: Array<string>): boolean {
    for (let i = 0; i < currentGenres.length; i++) {
      for (let j = 0; j < movieGenres.length; j++) {
        if (currentGenres[i] === movieGenres[j]) {
          return true;
        }
      }
    }
    return false;
  }
}
