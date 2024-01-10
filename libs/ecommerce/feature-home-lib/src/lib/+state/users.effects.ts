import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, forkJoin, tap } from 'rxjs';
import * as UsersActions from './users.actions';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  redirectUrlToHome = 'home';
  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store
  ) {}
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loginUser),
      switchMap(({ payload }) => {
        this.store.dispatch(UsersActions.loading({loaded:false}));
        const callForLogin = this.userService.login(payload);
        const callforUserDetails = this.userService.getUserDetails(1);
        return forkJoin([callForLogin, callforUserDetails]).pipe(
          map((result) => {
            const token = result[0];
            const userDetails = result[1];
            this.router.navigate([this.redirectUrlToHome]);
            this.store.dispatch(
              UsersActions.GetUserDetailsSuccess({ userDetails })
            );
            return UsersActions.loginUserSuccess(token);
          }),
          tap(()=>this.store.dispatch(UsersActions.loaded({ loaded: true }))),
          catchError((error) => {
            console.error('Error', error);
            return of(UsersActions.loginUserFailure({ error }));
          })
        );
      })
    )
  );
}
