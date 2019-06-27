import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { MoviesListRoutingModule } from './movies-list-routing.module';
import { MoviesListService } from '../../core/services/movies-list/movies-list.service';

@NgModule({
  declarations: [MoviesListComponent],
  imports: [
    CommonModule,
    MoviesListRoutingModule
  ],
  providers:[MoviesListService]
})
export class MoviesListModule { }
