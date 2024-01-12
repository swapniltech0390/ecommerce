import { ProductsState, productsReducer } from "./products/products.reducer";
import { UsersState, usersReducer } from "./users/users.reducer";
import { ActionReducerMap } from '@ngrx/store';
export const USERS_FEATURE_KEY = 'users';

export interface HomeFeatureState {
  profile: UsersState;
  products: ProductsState;
}

export const reducers: ActionReducerMap<HomeFeatureState> = {
  profile: usersReducer,
  products: productsReducer
};
