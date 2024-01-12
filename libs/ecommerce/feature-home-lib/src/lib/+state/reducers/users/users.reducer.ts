import { createReducer, on, Action } from '@ngrx/store';
import * as UsersActions from '../../actions/users.actions';
import { UserDetails } from '../../../models/users';


export interface UsersState {
  loaded: boolean; // has the Users list been loaded
  error?: string | null; // last known error (if any)
  isLoggedIn: boolean;
  token: string;
  userDetails: UserDetails;
}

export const initialUsersState: UsersState = {
  // set initial required properties
  loaded: true,
  isLoggedIn: false,
  token: '',
  userDetails:{
    id: 0,
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: ''
    },
    address:{
      city: '',
      street: '',
      number: 0,
      zipcode: '',
      geolocation: {
        lat: '',
        long: ''
      }
    },
    phone: ''
  }
};

const reducer = createReducer(
  initialUsersState,
   on(UsersActions.loading, (state, { loaded }) => ({
    ...state,
    loaded
  })),
  on(UsersActions.loaded, (state, {loaded }) => ({
    ...state,
    loaded
  })),
  on(UsersActions.loginUserSuccess, (state, { token }) => ({
    ...state,
    token,
    error: '',
    isLoggedIn: true
  })),
  on(UsersActions.loginUserFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(UsersActions.logOutUser, (state) => ({
    ...state,
    token: '',
    isLoggedIn: false
  })),
  on(UsersActions.GetUserDetailsSuccess, (state, { userDetails }) => ({
    ...state,
    userDetails,
    error: '',
    isLoggedIn: true
  })),
  on(UsersActions.GetUserDetailsFailure, (state, { error }) => ({
    ...state,
    error
  })),
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return reducer(state, action);
}
