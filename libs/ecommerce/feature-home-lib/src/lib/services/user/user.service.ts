import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@ecommerce/shared-ecommerce';
import { Observable } from 'rxjs';
import { LoginResponse, UserDetails } from '../../models/users';

@Injectable()
export class UserService {
  baseUrl = 'https://fakestoreapi.com';
  constructor(private http: HttpClient) {}

  login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, user);
  }

  getUserDetails(id: number): Observable<UserDetails> {
    return this.http.get<UserDetails>(`${this.baseUrl}/users/${id}`);
  }
}
