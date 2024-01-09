import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as UsersSelectors from './users.selectors';

@Injectable()
export class UsersFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(UsersSelectors.selectUsersLoaded));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
  }
}
