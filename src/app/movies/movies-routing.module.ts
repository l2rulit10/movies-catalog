import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';


const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: MoviesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
