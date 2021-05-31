import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus!: boolean;

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isLogged;
  }

  onSignIn() {
    this.authService.signIn().then(() => {
      this.authStatus = this.authService.isLogged;
      this.router.navigate(['devices']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isLogged;
  }

}
