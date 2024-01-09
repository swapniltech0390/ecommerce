import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as UsersActions from './users.actions';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';


@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  redirectUrlToHome = 'home';
  constructor(private userService: UserService,private router: Router) {}
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loginUser),
      switchMap(({ payload }) => {
        return this.userService.login(payload).pipe(
          map((token) => {
            this.router.navigate([this.redirectUrlToHome]);
            return UsersActions.loginUserSuccess(token);
          }),
          catchError((error) => {
            console.error('Error', error);
            return of(UsersActions.loginUserFailure({ error }));
          })
        );
      })
    )
  );
}
