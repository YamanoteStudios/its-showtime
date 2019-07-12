import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMovieComponent } from './add-movie.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AddMovieComponent }
]

@NgModule({
  declarations: [AddMovieComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddMovieModule { }
