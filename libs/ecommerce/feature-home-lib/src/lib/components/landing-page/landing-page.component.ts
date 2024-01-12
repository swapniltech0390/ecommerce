import { Component, OnInit } from '@angular/core';
import { UsersFacade } from '../../+state/facades/users/users.facade';
import { UserDetails } from '../../models/users';

@Component({
  selector: 'ecommerce-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  username = '';
  constructor(public userFacade: UsersFacade) {}
  ngOnInit(): void {
    this.userFacade.userDetails$.subscribe(
      (userDetails: UserDetails) =>
        (this.username = `${userDetails.name.firstname} ${userDetails.name.lastname}`)
    );
  }
}
