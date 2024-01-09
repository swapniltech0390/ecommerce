import { createReducer, on, Action } from '@ngrx/store';
import * as UsersActions from './users.actions';
export const USERS_FEATURE_KEY = 'users';

export interface UsersState {
  loaded: boolean; // has the Users list been loaded
  error?: string | null; // last known error (if any)
  isLoggedIn: boolean;
  token: string;
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: UsersState;
}

export const initialUsersState: UsersState = {
  // set initial required properties
  loaded: false,
  isLoggedIn: false,
  token: ''
};

const reducer = createReducer(
  initialUsersState,
  on(UsersActions.loginUserSuccess, (state, { token }) => ({
    ...state,
    token,
    error: '',
    isLoggedIn: true
  })),
  on(UsersActions.loginUserFailure, (state, { error }) => ({
    ...state,
    error,
    token: '',
    isLoggedIn: false
  })),
  on(UsersActions.logOutUser, (state) => ({
    ...state,
    token: '',
    isLoggedIn: false
  }))
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return reducer(state, action);
}
