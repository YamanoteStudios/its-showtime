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
    let userMeta = JSON.parse(localStorage.getItem('userMeta'));
    // console.log(userMeta['loginStatus']);
    if (userMeta['loginStatus'])
      return true;

    return false;
  }

  roleCheck() {
    let role = JSON.parse(localStorage.getItem('userMeta'));
    // console.log(role)
    if (role['role'] == 'admin') {
      return 'admin';
    }
    else if (role['role'] == 'user') {
      return 'user';
    }
  }

}
