import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';

import { AddMovieComponent } from './add-movie/add-movie.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MoviesService } from '../movies/shared/services/movies.service';

@NgModule({
  declarations: [
    AdminComponent,
    AddMovieComponent,
    DeleteMovieComponent
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [MoviesService]
})

export class AdminModule {}