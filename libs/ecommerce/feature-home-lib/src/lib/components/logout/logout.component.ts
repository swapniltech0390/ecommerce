import { AfterContentInit, Component } from '@angular/core';
import { logOutUser } from '../../+state/users.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ecommerce-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements AfterContentInit {
  constructor(private store: Store) {}
  ngAfterContentInit () {
    this.store.dispatch(logOutUser());
  }
}
