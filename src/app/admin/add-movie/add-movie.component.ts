import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

import { MoviesService } from './../../movies/shared/services/movies.service';
import { Movie } from './../../movies/shared/models/movie.model';

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
  }

  onSubmit(form: NgForm) {
    let {
      key,
      name,
      description,
      action,
      comedy,
      crime,
      thriller,
      drama,
      adventure,
      biography,
      history,
      sport,
      mystery,
      scifi,
      rate,
      length,
      img
    } = form.value;

    if (rate < 0) {
      rate *= -1;
    } else if (rate >= 10) {
      rate = 10;
    }

    const genresArray = [action, comedy, crime, thriller, drama, adventure, biography, history, sport, mystery, scifi];
    const resultArray = [];

    for (let i = 0; i < genresArray.length; i++) {
      if (genresArray[i] !== null && genresArray[i] !== undefined && genresArray[i] !== '') {
        resultArray.push(genresArray[i]);
      }
    }
    const movie = new Movie(key, name, description, resultArray, rate, length, img);

    this.moviesService.addMovie(movie)
    .subscribe(() => {
      form.reset();
    });
  }
}
