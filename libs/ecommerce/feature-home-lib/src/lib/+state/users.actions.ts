import { createAction, props } from '@ngrx/store';
import { User } from '@ecommerce/shared-ecommerce';
import { LoginResponse } from '../models/users';

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
