import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { AddMovieComponent } from './add-movie/add-movie.component';


const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: MoviesDetailsComponent},
  {path: 'add-movie', component: AddMovieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
