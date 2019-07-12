import { Injectable } from '@angular/core';
import { CanLoad, Router, Route } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';

@Injectable()
export class CanLoadGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {
  }
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.userRoleAuthenticated()
      .then(
        (authenticated) => {
          console.log(authenticated);
          if (authenticated == 'superadmin') {
            return true;
          }
          else {
            swal.fire(
              'Only super admin can visit this page!',
              '',
              'error'
            );
          }
        });


    // if (this.authService.isAuthenticated()) {
    //   console.log(this.authService.isAuthenticated());
    //   return true;
    // }
    // else {
    //   console.log('else');
    //   this.router.navigate(['/signin']);
    //   return false;
    // }
  }

}
