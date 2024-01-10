import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { isLoggedInGuard } from './guards/is-logged-in/is-logged-in.guard';
import { LogoutComponent } from './components/logout/logout.component';

export const ecommerceFeatureHomeLibRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo:'login',
        pathMatch:'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [isLoggedInGuard]
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      { path: '**', component: LoginComponent }
    ]
  }
];
