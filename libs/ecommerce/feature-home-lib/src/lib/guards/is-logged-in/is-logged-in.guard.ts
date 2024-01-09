import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UsersFacade } from '../../+state/users.facade';
import { Router } from '@angular/router';
import { map } from 'rxjs';

export const isLoggedInGuard: CanActivateFn = () => {
  const usersFacade: UsersFacade = inject(UsersFacade);
  const router: Router = inject(Router);
  let isLogIn = false;
  usersFacade.isLoggedIn$
    .pipe(map((isLoggedIn) => (isLogIn = isLoggedIn)))
    .subscribe();
  return isLogIn || router.createUrlTree(['/login']);
};
