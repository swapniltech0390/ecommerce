import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeFeatureState, USERS_FEATURE_KEY } from '../../reducers';
import { ProductsState } from '../../reducers/products/products.reducer';

// Lookup the 'Products' feature state managed by NgRx
export const selectUserState =
  createFeatureSelector<HomeFeatureState>(USERS_FEATURE_KEY);

export const selectProducts = createSelector(
  selectUserState,
  (state: HomeFeatureState) => state.products
);

export const selectAllProducts = createSelector(
  selectProducts,
  (state: ProductsState) => state.products
);

