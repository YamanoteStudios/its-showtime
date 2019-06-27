import { Injectable } from '@angular/core';
import { movies } from "./movies-list-mock";
@Injectable({
  providedIn: 'root'
})
export class MoviesListService {

  constructor() { }

  getAllMovies() {
    return movies;
  }
}
