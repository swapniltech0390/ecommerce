import { Component } from '@angular/core';
import { User } from '@ecommerce/shared-ecommerce';

@Component({
  selector: 'ecommerce-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  login(user:User){
    console.log('user  ',user);
  }
}
