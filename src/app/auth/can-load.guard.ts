import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CanLoadGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {
  }
  canLoad(route: Route): boolean {
    let url: string = route.path;
    // console.log('Url:' + url);
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.authService.setRedirectUrl(url);
    this.router.navigate(['/signin']);
    return false;
  }

}
