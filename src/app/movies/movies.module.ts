import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { MoviesService } from './shared/services/movies.service';
import { SearchPipe } from './shared/pipes/search.pipe';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { AuthModalComponent } from './shared/modals/auth-modal/auth-modal.component';
import { AuthService } from './shared/services/auth.service';
import { UsersService } from './shared/services/users.service';

@NgModule({
  declarations: [MoviesComponent, HeaderComponent, SearchPipe, MoviesDetailsComponent, AuthModalComponent],
  imports: [CommonModule, MoviesRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, AuthModalComponent],
  providers: [MoviesService, AuthService, UsersService]
})

export class MoviesModule {}