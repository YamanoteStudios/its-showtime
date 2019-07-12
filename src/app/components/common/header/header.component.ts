import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    window.onscroll = function () { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    // console.log(this.loginCheck());
    this.roleCheck();
  }

  loginCheck() {
    let loginStatus = localStorage.getItem('loginStatus');
    if (loginStatus)
      return true;

    return false;
  }

  roleCheck() {
    let role = localStorage.getItem('userRole');
    // console.log(role)
    if (role == 'admin') {
      return 'admin';
    }
    else if (role == 'user') {
      return 'user';
    }
  }

}
