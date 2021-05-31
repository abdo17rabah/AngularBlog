import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café']),
    new User('Lionel', 'Messi', 'messi@pulga.com', 'Mate', ['foot', 'nutmegs']),
  ];
  usersSubject= new Subject<any []>();

  constructor() { }

  emitAppareilSubject() {
    this.usersSubject.next(this.users.slice());
  }

  addUser(user:User) {
    this.users.push(user);
    this.emitAppareilSubject();
  }
}
