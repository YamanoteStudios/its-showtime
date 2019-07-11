import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SigninForm } from 'src/app/core/forms/signin-form';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    public authService: AuthService,
    public signinform: SigninForm
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.signinForm = this.signinform.initForm();
  }

  signin() {
    this.authService.signin(this.signinForm);
  }

}
