import { Subject } from 'rxjs';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;
  private admin: User;

  constructor(private router: Router) {
    this.admin = {
      email: 'tnsaturday@gmail.com',
      userId: '1',
      role: 'admin'
    };
  }

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: (Math.round(Math.random() * 100000)).toString(),
      role: 'user'
    };
    this.authChange.next(true);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: (Math.round(Math.random() * 100000)).toString(),
      role: 'user'
    };
    this.authChange.next(true);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
  }

  getUser() {
    return { ...this.user};
  }

  isAuth() {
    return this.user != null;
  }
}
