import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import swal from 'sweetalert2';

@Injectable()
export class CanActiveGuard implements CanActivate, CanActivateChild {
  constructor(private authServ: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authServ.isAuthenticated()
      .then(
        (authenticated) => {
          if (authenticated['loginStatus']) {
            console.log(authenticated);
            return true;
          }
          else {
            swal.fire(
              'Please signin first to visit this page!',
              '',
              'error'
            )
            this.router.navigate(['/landing']);
          }
        });
  }
  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

}
