import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@ecommerce/feature-home-lib').then((m) => m.EcommerceFeatureHomeLibModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
