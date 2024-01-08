import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@ecommerce/shared-ecommerce';

@Injectable()
export class UserService {
  baseUrl = 'https://fakestoreapi.com/';
  constructor(private http: HttpClient) {}

  login(user: User) {
    console.log('inside user service', user);

    this.http
      .post(`${this.baseUrl}auth/login`, user)
      .subscribe((res) => console.log(res));
  }
}
