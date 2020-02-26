import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddMovieComponent } from './add-movie/add-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../movies/shared/services/auth.guard';

const routes: Routes = [
  {path: '', component: AdminComponent, canActivate: [AuthGuard], children: [
    {path: 'add-movie', component: AddMovieComponent},
    {path: 'delete-movie', component: DeleteMovieComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
