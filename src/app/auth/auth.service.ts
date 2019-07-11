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

  loginMeta = { loginStatus: false, role: '' }

  private redirectUrl: string = '/';

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(JSON.parse(localStorage.getItem('userMeta')));
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
          this.loginMeta.loginStatus = true;
          this.loginMeta.role = user.role;
          localStorage.setItem('userMeta', JSON.stringify(this.loginMeta));

          return this.router.navigate(['/profile']);
        }
      }
      swal.fire(
        'Sorry',
        'Email or password is invalid!',
        'error'
      );

      this.loginMeta.loginStatus = false;
      this.loginMeta.role = '';
      localStorage.setItem('userMeta', JSON.stringify(this.loginMeta));
      return this.router.navigate(['/landing']);
    }
  }

  signout() {
    swal.fire(
      'Thanks for visiting us',
      'You are loggedout!',
      'success'
    );

    this.loginMeta.loginStatus = false;
    this.loginMeta.role = '';
    localStorage.setItem('userMeta', JSON.stringify(this.loginMeta));
    this.router.navigate(['/landing']);
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }
  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

}
