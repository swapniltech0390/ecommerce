import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const ecommerceFeatureHomeLibRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: '**', pathMatch: 'full', component: HomeComponent}
];
