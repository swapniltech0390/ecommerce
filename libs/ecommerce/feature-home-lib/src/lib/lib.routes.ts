import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { isLoggedInGuard } from './guards/is-logged-in/is-logged-in.guard';

export const ecommerceFeatureHomeLibRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [isLoggedInGuard]
      },
      { path: '**', component: LoginComponent }
    ]
  }
];
