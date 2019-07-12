import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesListService } from '../core/services/movies-list/movies-list.service';

interface Movie { id: number, name: string }

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<Movie> {

  constructor(private moviesListService: MoviesListService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Movie> | Promise<Movie> | Movie {
    // console.log(route.params['id']);
    return this.moviesListService.getSingleMovie(+route.params['id']);
  }
}
