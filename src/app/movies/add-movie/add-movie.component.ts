import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

import { Movie } from './../shared/models/movie.model';
import { MoviesService } from '../shared/services/movies.service';
@Component({
  selector: 'movie-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  form: FormGroup;
  movies: any;
  constructor(private moviesService: MoviesService, private fb: FormBuilder) { }

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

  onSubmit(form: NgForm) {
    // let {
    //   key,
    //   name,
    //   description,
    //   action,
    //   comedy,
    //   crime,
    //   thriller,
    //   drama,
    //   adventure,
    //   biography,
    //   history,
    //   sport,
    //   mystery,
    //   scifi,
    //   rate,
    //   length,
    //   img
    // } = form.value;
    let {
      key,
      name,
      description,
      genres,
      rate,
      length,
      img
    } = form.value;
    if (rate < 0) {
      rate *= -1;
    } else if (rate >= 10) {
      rate = 10;
    }

    // const genresArr = [action, comedy, crime, thriller, drama, adventure, biography, history, sport, mystery, scifi];
    // if (action === null && comedy === null) {
    //   genresArr.splice(0, 2);
    // } else if (action === null) {
    //   genresArr.splice(0, 1);
    // } else if (comedy === null) {
    //   genresArr.splice(1, 1);
    // } else if (crime === null) {
    //   genresArr.splice(2, 1);
    // } else if (thriller === null) {
    //   genresArr.splice(3, 1);
    // } else if (drama === null) {
    //   genresArr.splice(4, 1);
    // } else if (adventure === null) {
    //   genresArr.splice(5, 1);
    // } else if (biography === null) {
    //   genresArr.splice(6, 1);
    // } else if (history === null) {
    //   genresArr.splice(7, 1);
    // } else if (sport === null) {
    //   genresArr.splice(8, 1);
    // } else if (mystery === null) {
    //   genresArr.splice(9, 1);
    // } else if (scifi === null) {
    //   genresArr.splice(10, 1);
    // }
    // const movie = new Movie(key, name, description, genresArr, rate, length, img);
    const movie = new Movie(key, name, description, genres, rate, length, img);

    this.moviesService.addMovie(movie)
    .subscribe((res: any) => {
      form.reset();
      console.log(res);
    });
  }
}
