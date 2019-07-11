import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import swal from 'sweetalert2';

@Injectable()
export class CanActiveChildGuard implements CanActivateChild {

  constructor(
    private authServ: AuthService
  ) { }

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authServ.isAuthenticated()
      .then(
        (authenticated) => {
          console.log(authenticated['role']);
          if (authenticated['role'] == 'admin') {
            return true;
          }
          else {
            swal.fire(
              'Only admin can visit this page!',
              '',
              'error'
            );
          }
        });
  }

}
