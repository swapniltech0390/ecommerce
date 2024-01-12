import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as UsersSelectors from '../../selectors/users/users.selectors';

@Injectable()
export class UsersFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(UsersSelectors.selectUsersLoaded));
  isLoggedIn$ = this.store.pipe(select(UsersSelectors.selectUserisLoggedIn));
  userDetails$ = this.store.pipe(select(UsersSelectors.selectUserDetails));
}
