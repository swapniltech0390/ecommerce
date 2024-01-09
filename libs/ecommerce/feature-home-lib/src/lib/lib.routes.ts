import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const ecommerceFeatureHomeLibRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
      },
      { path: 'home', component: HomeComponent },
      { path: '**', component: LoginComponent }
    ]
  }
];
