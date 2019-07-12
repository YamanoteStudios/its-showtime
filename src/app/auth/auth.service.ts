import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';
import { UsersList } from '../core/modal/users-list';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  loginStatus = false;
  userRole = '';

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(localStorage.getItem('loginStatus'));
        }, 100);
      }
    );
    return promise;
  }

  userRoleAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(localStorage.getItem('userRole'));
        }, 100);
      }
    );
    return promise;
  }

  signin(form: FormGroup) {
    if (form.valid) {
      for (let user of UsersList) {

        // console.log(
        //   user.email + ' : ' +
        //   form.controls.email.value + ' : ' +
        //   user.password + ' : ' +
        //   form.controls.password.value
        // );

        if (user.email == form.controls.email.value &&
          user.password == form.controls.password.value) {
          swal.fire(
            'Welcome',
            'You are loggedin!',
            'success'
          );
          this.loginStatus = true;
          this.userRole = user.role;
          localStorage.setItem('loginStatus', JSON.stringify(this.loginStatus));
          localStorage.setItem('userRole', this.userRole);

          return this.router.navigate(['/profile']);
        }
      }
      swal.fire(
        'Sorry',
        'Email or password is invalid!',
        'error'
      );

      localStorage.clear();
      return this.router.navigate(['/landing']);
    }
  }

  signout() {
    swal.fire(
      'Thanks for visiting us',
      'You are loggedout!',
      'success'
    );

    localStorage.clear();
    this.router.navigate(['/landing']);
  }

}
