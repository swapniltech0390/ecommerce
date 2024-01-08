import { Component } from '@angular/core';
import { User } from '@ecommerce/shared-ecommerce';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'ecommerce-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private userService: UserService) {}
  login(user: User) {
    this.userService.login(user);
  }
}
