import { Component } from '@angular/core';
import { User } from '@ecommerce/shared-ecommerce';
import { Store } from '@ngrx/store';
import { loginUser } from '../../+state/actions/users.actions';

@Component({
  selector: 'ecommerce-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private store: Store) {}
  login(user: User) {
    this.store.dispatch(loginUser({ payload: user }));
  }
}
