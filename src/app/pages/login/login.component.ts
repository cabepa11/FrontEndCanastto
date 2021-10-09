import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string = "User accepted";

  constructor(private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem("Token");
    if (token !== null || undefined) {
      this.router.navigate(["/products"]);
    } else { }

  }

  login() {
    localStorage.setItem("Token", this.token);
    this.router.navigate(["/products"]);
  }


}
