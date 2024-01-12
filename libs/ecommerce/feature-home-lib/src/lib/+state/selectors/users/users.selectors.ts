import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from '../../reducers/users/users.reducer';
import { HomeFeatureState, USERS_FEATURE_KEY } from '../../reducers';

// Lookup the 'Users' feature state managed by NgRx
export const selectUserState =
  createFeatureSelector<HomeFeatureState>(USERS_FEATURE_KEY);

export const selectProfile = createSelector(selectUserState, (state: HomeFeatureState) => state.profile);

export const selectUsersLoaded = createSelector(
  selectProfile,
  (state: UsersState) => state.loaded
);

export const selectUserisLoggedIn = createSelector(
  selectProfile,
  (state: UsersState) => state.isLoggedIn
);

export const selectUserDetails = createSelector(
  selectProfile,
  (state: UsersState) => state.userDetails
);

export const selectUsersError = createSelector(
  selectProfile,
  (state: UsersState) => state.error
);