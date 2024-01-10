import { Component } from '@angular/core';
import { UsersFacade } from '../../+state/users.facade';

@Component({
  selector: 'ecommerce-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(public userFacade: UsersFacade){}

}
