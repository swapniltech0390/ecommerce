import { createReducer, Action, on } from '@ngrx/store';
import { Product } from '../../../models/products';
import { ProductsActions } from '../../actions/products.actions';

export const productsFeatureKey = 'products';

export interface ProductsState {
  products: Product[];
}

export const initialProductState: ProductsState = {
  products: []
};

export const reducer = createReducer(
  initialProductState,
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products
  }))
);

export function productsReducer(
  state: ProductsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
