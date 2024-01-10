import { createAction, props } from '@ngrx/store';
import { User } from '@ecommerce/shared-ecommerce';
import { LoginResponse, UserDetails } from '../models/users';

export const loading = createAction(
  '[Users/API] Data loading',
  props<{loaded: boolean}>()
);

export const loaded = createAction(
  '[Users/API] Data loaded',
  props<{loaded: boolean}>()
);


export const loginUser = createAction(
  '[Users/API] Login Users initialize',
  props<{payload:User}>()
);


export const loginUserSuccess = createAction(
  '[Users/API] Login Users Success',
  props<LoginResponse>()
);

export const loginUserFailure = createAction(
  '[Users/API] Login Users Failure',
  props<{ error: any }>()
);

export const GetUserDetails = createAction(
  '[Users/API] Get User Details',
  props<{ payload: number }>()
);

export const GetUserDetailsSuccess = createAction(
  '[Users/API] Get User Details Success',
  props<{userDetails : UserDetails}>()
);

export const GetUserDetailsFailure = createAction(
  '[Users/API] Get User Details Failure',
  props<{ error: any }>()
);


export const logOutUser = createAction(
  '[Users/API] Logout User'
);

