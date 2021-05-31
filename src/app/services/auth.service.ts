import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged= false;

  constructor() { }

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
            this.isLogged = true;
            resolve(true);
          }, 2000);
      });
  }

  signOut() {
    this.isLogged = false;
  }
}
