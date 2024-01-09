import { Route } from '@angular/router';
import { HomeComponent } from '@ecommerce/feature-home-lib';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
